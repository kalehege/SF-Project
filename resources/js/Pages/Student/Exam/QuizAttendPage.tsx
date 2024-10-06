import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
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
  start_date: string;
  end_date: string;
  questions: Question[];
};

interface QuizAttendPageProps {
  exam: Exam;
}

function QuizAttendPage({ exam }: QuizAttendPageProps) {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [isExamActive, setIsExamActive] = useState(false);

  // Use Inertia's useForm hook to handle form submission
  const { post, data, setData } = useForm({
    exam_id: exam.id,
    selectedAnswers: {},
  });

  // Handle time calculation and countdown
  useEffect(() => {
    const examStartTime = new Date(exam.start_date).getTime();
    const examEndTime = new Date(exam.end_date).getTime();

    const updateTime = () => {
      const currentTime = new Date().getTime();

      if (currentTime < examStartTime) {
        // Before the exam starts
        const timeUntilStart = examStartTime - currentTime;
        setTimeRemaining(formatTime(timeUntilStart));
        setIsExamActive(false);
      } else if (currentTime >= examStartTime && currentTime <= examEndTime) {
        // During the exam
        const timeUntilEnd = examEndTime - currentTime;
        setTimeRemaining(formatTime(timeUntilEnd));
        setIsExamActive(true);
      } else {
        // Exam has ended
        setTimeRemaining('The exam has ended.');
        setIsExamActive(false);
      }
    };

    updateTime(); // Initial call to set the timer
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [exam.start_date, exam.end_date]);

  // Function to format milliseconds into a readable time (hh:mm:ss)
  const formatTime = (time: number) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, answerId: number) => {
    setData('selectedAnswers', {
      ...data.selectedAnswers,
      [questionId]: answerId,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the answers to the server via Inertia's post method
    post('/quiz/submit');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>

        {/* Countdown Timer */}
        <div className="text-xl font-semibold mb-4">
          {isExamActive ? (
            <span>Time Remaining: {timeRemaining}</span>
          ) : (
            <span>Exam starts in: {timeRemaining}</span>
          )}
        </div>

        {/* Show exam form only when the exam is active */}
        {isExamActive ? (
          <form onSubmit={handleSubmit}>
            {exam.questions.map((question) => (
              <div key={question.id} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{question.question}</h3>
                <ul className="space-y-2">
                  {question.answers.map((answer) => (
                    <li key={answer.id}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`question_${question.id}`}
                          value={answer.id}
                          checked={data.selectedAnswers[question.id] === answer.id}
                          onChange={() => handleAnswerSelect(question.id, answer.id)}
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
        ) : (
          <div className="text-red-600">The exam is not available yet.</div>
        )}
      </div>
    </div>
  );
}

// Layout usage
QuizAttendPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Attend Quiz" children={page} />
);

export default QuizAttendPage;
