import React from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

// Define types for question and answer
type Answer = {
  id: number;
  answer: string;
  is_correct: boolean;
};

type Question = {
  id: number;
  question_text: string;
  answers: Answer[];
};

type Exam = {
  id: number;
  name: string;
  description: string;
  questions: Question[];
};

interface ExamResultsPageProps {
  exam: Exam;
  studentAnswers: { [key: number]: number }; // Student's answers: question_id => answer_id
  correctAnswersCount: number;
  totalQuestions: number;
  scorePercentage: number;
}

function ExamResultsPage({
                           exam,
                           studentAnswers,
                           correctAnswersCount,
                           totalQuestions,
                           scorePercentage,
                         }: ExamResultsPageProps) {

  // Helper function to check if the student's answer is correct
  const isStudentAnswerCorrect = (questionId: number, answerId: number) => {
    const correctAnswer = exam.questions
      .find((q) => q.id === questionId)
      ?.answers.find((a) => a.is_correct);

    return correctAnswer?.id === answerId;
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Exam Information */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>

        {/* Display the score */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-600">
            You scored: {correctAnswersCount} / {totalQuestions}
          </h2>
          <p className="text-xl">Percentage: {scorePercentage.toFixed(2)}%</p>
        </div>

        {/* Display the questions and answers */}
        {exam.questions.map((question) => {
          const studentAnswerId = studentAnswers[question.id];

          return (
            <div key={question.id} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{question.question_text}</h3>
              <ul className="space-y-2">
                {question.answers.map((answer) => (
                  <li
                    key={answer.id}
                    className={`flex items-center ${
                      answer.is_correct ? 'text-green-600' : 'text-gray-600'
                    }`}
                  >
                    {/* Show correct and incorrect answers */}
                    <span className="mr-2">
                      {answer.is_correct ? '✔️' : ''}
                      {studentAnswerId === answer.id && !answer.is_correct && '❌'}
                    </span>
                    <span>{answer.answer}</span>

                    {/* Feedback for the student's answer */}
                    {studentAnswerId === answer.id && (
                      <span
                        className={`ml-4 ${isStudentAnswerCorrect(question.id, studentAnswerId) ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {isStudentAnswerCorrect(question.id, studentAnswerId)
                          ? 'Correct'
                          : 'Incorrect'}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Show the correct answer if the student answered incorrectly */}
              {studentAnswerId && !isStudentAnswerCorrect(question.id, studentAnswerId) && (
                <div className="mt-2 text-sm text-green-500">
                  Correct Answer: {question.answers.find((a) => a.is_correct)?.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Layout usage
ExamResultsPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Exam Results" children={page} />
);

export default ExamResultsPage;
