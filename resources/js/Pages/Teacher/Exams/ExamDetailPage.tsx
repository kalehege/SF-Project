import React, { useState } from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from '@inertiajs/react';

// Define the type for a course
type Course = {
  id: number;
  name: string;
};

type Exams = {
  courses: { name: string };
  id: number;
  name: string;
  description: string;
  attempt_count: number;
  start_date: string;
  end_date: string;
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
  courses: Course[];
}

function ExamDetailPage({ exam, courses }: ExamDetailPageProps) {
  // State to control the visibility of both modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Using useForm for editing the exam
  const { data: examData, setData: setExamData, put, errors: examErrors } = useForm({
    name: exam.name,
    description: exam.description,
    attempt_count: exam.attempt_count || '',
    start_date: exam.start_date || '',
    end_date: exam.end_date || '',
    course_id: exam.courses.id || '',
  });

  // Using useForm for adding quiz questions
  const { data: quizData, setData: setQuizData, post, errors: quizErrors } = useForm({
    question: '',
    exam_id: exam.id,
    answers: ['', '', '', ''],
    correctAnswerIndex: 0,
  });

  // Toggle modals
  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
  const toggleQuizModal = () => setIsQuizModalOpen(!isQuizModalOpen);

  // Submit for updating exam
  const handleSubmitExam = (e: React.FormEvent) => {
    e.preventDefault();
    put(`/admin/exams/${exam.id}`, {
      onSuccess: () => setIsEditModalOpen(false),
    });
  };

  // Submit for creating a quiz
  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    post('/quiz/store', {
      onSuccess: () => setIsQuizModalOpen(false),
    });
  };

  // Function to update quiz answers
  const updateAnswer = (index: number, value: string) => {
    const updatedAnswers = [...quizData.answers];
    updatedAnswers[index] = value;
    setQuizData('answers', updatedAnswers);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        <p className="text-gray-900 mb-4 ml-5">{exam.courses.name}</p>

        {/* Trigger buttons for Modals */}
        <button onClick={toggleEditModal} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
          Edit Exam
        </button>
        <button onClick={toggleQuizModal} className="mt-4 ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
          Configure Quiz
        </button>

        {/* Edit Exam Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Edit Exam</h2>
              <form onSubmit={handleSubmitExam}>
                {/* Course Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="course">
                    Select Course Category
                  </label>
                  <select
                    id="course"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.course_id}
                    onChange={(e) => setExamData('course_id', e.target.value)}
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  {examErrors.course_id && <span className="text-red-600 text-sm">{examErrors.course_id}</span>}
                </div>

                {/* Exam Name */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="name">
                    Exam Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.name}
                    onChange={(e) => setExamData('name', e.target.value)}
                  />
                  {examErrors.name && <span className="text-red-600 text-sm">{examErrors.name}</span>}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.description}
                    onChange={(e) => setExamData('description', e.target.value)}
                  ></textarea>
                  {examErrors.description && <span className="text-red-600 text-sm">{examErrors.description}</span>}
                </div>

                {/* Attempt Count */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="attempt_count">
                    Attempt Count
                  </label>
                  <input
                    id="attempt_count"
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.attempt_count}
                    onChange={(e) => setExamData('attempt_count', e.target.value)}
                  />
                  {examErrors.attempt_count && <span className="text-red-600 text-sm">{examErrors.attempt_count}</span>}
                </div>

                {/* Start Date */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="start_date">
                    Start Date and Time
                  </label>
                  <input
                    id="start_date"
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.start_date}
                    onChange={(e) => setExamData('start_date', e.target.value)}
                  />
                  {examErrors.start_date && <span className="text-red-600 text-sm">{examErrors.start_date}</span>}
                </div>

                {/* End Date */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1" htmlFor="end_date">
                    End Date and Time
                  </label>
                  <input
                    id="end_date"
                    type="datetime-local"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={examData.end_date}
                    onChange={(e) => setExamData('end_date', e.target.value)}
                  />
                  {examErrors.end_date && <span className="text-red-600 text-sm">{examErrors.end_date}</span>}
                </div>

                <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
                  Save Changes
                </button>
              </form>

              <button onClick={toggleEditModal}
                      className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Configure Quiz Modal */}
        {isQuizModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Configure Quiz</h2>

              <form onSubmit={handleSubmitQuiz}>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="question">
                    Quiz Question
                  </label>
                  <input
                    id="question"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={quizData.question}
                    onChange={(e) => setQuizData('question', e.target.value)}
                  />
                  {quizErrors.question && <div className="text-red-500 text-sm">{quizErrors.question}</div>}
                </div>

                {quizData.answers.map((answer, index) => (
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
                  </div>
                ))}

                {/* Select Correct Answer */}
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1">Select Correct Answer</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={quizData.correctAnswerIndex}
                    onChange={(e) => setQuizData('correctAnswerIndex', parseInt(e.target.value))}
                  >
                    {quizData.answers.map((_, index) => (
                      <option key={index} value={index}>
                        Answer {index + 1}
                      </option>
                    ))}
                  </select>
                  {quizErrors.correctAnswerIndex && <div className="text-red-500 text-sm">{quizErrors.correctAnswerIndex}</div>}
                </div>

                <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
                  Save Quiz
                </button>
              </form>

              <button onClick={toggleQuizModal}
                      className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Quiz Bank: Display List of Existing Quizzes */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Quiz Bank</h2>
          {exam.questions.length > 0 ? (
            exam.questions.map((question) => (
              <div key={question.id} className="mb-6">
                <h3 className="text-xl font-bold mb-2">{question.question}</h3>
                <ul className="list-disc ml-5">
                  {question.answers.map((answer) => (
                    <li key={answer.id}
                        className={`mb-2 ${answer.is_correct ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}`}>
                      {answer.answer} {answer.is_correct ? '✔️' : '❌'}
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

// Use the MainLayout for the ResultsPage
ExamDetailPage.layout = (page: React.ReactNode) => <MainLayout title="Exam Details" children={page} />;

export default ExamDetailPage;
