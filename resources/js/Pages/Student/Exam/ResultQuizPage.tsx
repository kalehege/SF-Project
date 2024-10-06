import React from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

// Define the types for the question and answer
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

type StudentAnswer = {
  [question_id: number]: number; // This represents studentAnswers with question_id as key and answer_id as value
};

interface ExamResultsPageProps {
  exam: Exam;
  studentAnswers: StudentAnswer;
}

function ExamResultsPage({ exam, studentAnswers }: ExamResultsPageProps) {
  // Create a helper function to check if the student's answer is correct
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

        {/* Display the questions and answers */}
        {exam.questions.map((question) => {
          // Find the student's selected answer for the current question
          const studentAnswerId = studentAnswers[question.id]; // Accessing the student's selected answer

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
                    {/* Display ✔️ for the correct answer and ❌ for wrong student's answer */}
                    <span className="mr-2">
                      {answer.is_correct ? '✔️' : ''}
                      {studentAnswerId === answer.id && !answer.is_correct && '❌'}
                    </span>
                    <span>{answer.answer}</span>

                    {/* Show feedback for student's answer */}
                    {studentAnswerId === answer.id && (
                      <span
                        className={`ml-4 ${isStudentAnswerCorrect(question.id, studentAnswerId) ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {isStudentAnswerCorrect(question.id, studentAnswerId)
                          ? 'Your answer was correct'
                          : 'Your answer was incorrect'}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* If student's answer was wrong, show the correct answer explicitly */}
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
