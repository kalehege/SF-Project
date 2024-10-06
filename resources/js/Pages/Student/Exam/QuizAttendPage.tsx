import React, { useState } from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

// Define types for question and answer
type Answer = {
  id: number;
  answer: string;
};

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Exam = {
  id: number;
  name: string;
  description: string;
  questions: Question[];
};

interface QuizAttendPageProps {
  exam: Exam;
}

function QuizAttendPage({ exam }: QuizAttendPageProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({}); // Store the selected answers

  const handleAnswerSelect = (questionId: number, answerId: number) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit the answers to the server
    console.log('Selected Answers:', selectedAnswers);

    // You can add a POST request here to submit the answers to the server
    // post('/quiz/submit', { exam_id: exam.id, selectedAnswers });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>

        <form onSubmit={handleSubmit}>
          {exam.questions.map((question) => (
            <div key={question.id} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {question.question}
              </h3>
              <ul className="space-y-2">
                {question.answers.map((answer) => (
                  <li key={answer.id}>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={answer.id}
                        checked={selectedAnswers[question.id] === answer.id}
                        onChange={() =>
                          handleAnswerSelect(question.id, answer.id)
                        }
                        className="mr-2"
                      />
                      {answer.answer}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

// Layout usage
QuizAttendPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Attend Quiz" children={page} />
);

export default QuizAttendPage;
