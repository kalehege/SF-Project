import React, { useState } from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from '@inertiajs/react';

// Define the type for a course
type Exams = {
  courses: { name: string };
  id: number;
  name: string;
  description: string;
};

// Define the type for questions and answers in the quiz bank
type Question = {
  id: number;
  question: string;
  answers: { id: number; answer: string; is_correct: boolean }[];
};

interface ExamDetailPageProps {
  exam: Exams & {
    questions: Question[];
  };
}

function ExamDetailPage({ exam }: ExamDetailPageProps) {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Using useForm for form handling
  const { data, setData, post, errors } = useForm({
    question: '',
    exam_id: exam.id,
    answers: ['', '', '', ''],
    correctAnswerIndex: 0,
  });

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle form submission
  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();

    // Submitting the form to the 'quiz.store' route
    post('/quiz/store', {
      onSuccess: () => {
        // Close the modal on successful form submission
        setIsModalOpen(false);
      }
    });
  };

  // Function to update quiz answers
  const updateAnswer = (index: number, value: string) => {
    const updatedAnswers = [...data.answers];
    updatedAnswers[index] = value;
    setData('answers', updatedAnswers);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        <p className="text-gray-900 mb-4 ml-5">{exam.courses.name}</p>

        {/* Trigger for the Modal */}
        <button
          onClick={toggleModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Configure Quiz
        </button>

        {/* Modal Window for Configuring Quiz */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Configure Quiz</h2>

              <form onSubmit={handleSubmitQuiz}>
                {/* Question Input */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="question">
                    Quiz Question
                  </label>
                  <input
                    id="question"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={data.question}
                    onChange={(e) => setData('question', e.target.value)}
                  />
                  {errors.question && <div className="text-red-500 text-sm">{errors.question}</div>}
                </div>

                {/* Answer Inputs */}
                {data.answers.map((answer, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-sm font-bold mb-1" htmlFor={`answer-${index}`}>
                      Answer {index + 1}
                    </label>
                    <input
                      id={`answer-${index}`}
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={answer}
                      onChange={(e) => updateAnswer(index, e.target.value)}
                    />

                    {errors[`answers.${index}`] && <div className="text-red-500 text-sm">{errors[`answers.${index}`]}</div>}
                  </div>
                ))}

                {/* Correct Answer Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1">
                    Select Correct Answer
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={data.correctAnswerIndex}
                    onChange={(e) => setData('correctAnswerIndex', parseInt(e.target.value))}
                  >
                    {data.answers.map((_, index) => (
                      <option key={index} value={index}>
                        Answer {index + 1}
                      </option>
                    ))}
                  </select>
                  {errors.correctAnswerIndex && <div className="text-red-500 text-sm">{errors.correctAnswerIndex}</div>}
                </div>

                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                >
                  Save Quiz
                </button>
              </form>

              {/* Close button for the Modal */}
              <button
                onClick={toggleModal}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Quiz Bank: Display List of Existing Quizzes */}
        {/* Quiz Bank: Display List of Existing Quizzes */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Quiz Bank</h2>
          {exam.questions.length > 0 ? (
            exam.questions.map((question) => (
              <div key={question.id} className="mb-6">
                <h3 className="text-xl font-bold mb-2">{question.question}</h3>
                <ul className="list-disc ml-5">
                  {question.answers.map((answer) => (
                    <li
                      key={answer.id}
                      className={`mb-2 ${
                        answer.is_correct ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'
                      }`}
                    >
                      {answer.answer}{' '}
                      {answer.is_correct ? (
                        <span className="ml-2 text-green-600">✔️</span>
                      ) : (
                        <span className="ml-2 text-red-600">❌</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No quizzes available for this exam yet.</p>
          )}
        </div>


        <div className="mt-6">
          <a href="/admin/exams" className="text-blue-600 hover:underline">
            ← Back to Exams
          </a>
        </div>
      </div>
    </div>
  );
}

// Layout usage
ExamDetailPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Exam Details" children={page} />
);

export default ExamDetailPage;
