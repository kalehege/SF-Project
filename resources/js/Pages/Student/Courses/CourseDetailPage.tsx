import React from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

// Define the type for a question
type Question = {
  id: number;
  question_text: string;
};

// Define the type for an exam
type Exam = {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  questions: Question[]; // Add questions to the exam type
  attempt_count: number; // Add attempt_count to the exam type
};

// Define the type for a course
type Course = {
  id: number;
  name: string;
  description: string;
  exams: Exam[];  // Include exams in the course
};

interface CourseDetailPageProps {
  course: Course;
}

function CourseDetailPage({ course }: CourseDetailPageProps) {
  const currentDate = new Date();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Course Information */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.name}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>

        {/* Available Exams Section */}
        {course.exams.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Exams</h2>
            <ul className="space-y-4">
              {course.exams.map((exam) => {
                const examEndDate = new Date(exam.end_date);
                const isExpired = examEndDate < currentDate;
                const questionsCount = exam.questions.length; // Count the questions

                return (
                  <li
                    key={exam.id}
                    className="p-6 bg-white border border-gray-300 rounded-md shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{exam.name}</h3>
                    <p className="text-gray-600 mb-2">{exam.description}</p>
                    <div className="text-gray-600 mb-2">
                      <span className="font-semibold">Start Time: </span>
                      <span>{new Date(exam.start_date).toLocaleString()}</span>
                    </div>
                    <div className="text-gray-600 mb-4">
                      <span className="font-semibold">End Time: </span>
                      <span>{new Date(exam.end_date).toLocaleString()}</span>
                    </div>

                    {/* Show the number of questions */}
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Questions Count: </span>{questionsCount}
                    </p>

                    {/* Show the number of remaining attempts */}
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Quiz Attempts Count: </span>{exam.attempt_count}
                    </p>

                    {/* Conditionally render Attend button or Expired message */}
                    <div className="mt-6">
                      {isExpired ? (
                        <>
                          <span className="text-red-600 font-semibold">Exam has expired</span>
                          <a
                            href={`/exams/${exam.id}/results`}
                            className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-300"
                          >
                            View Results
                          </a>
                        </>
                      ) : exam.attempt_count > 0 ? (
                        <a
                          href={`/exams/${exam.id}/quiz`}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
                        >
                          Attend to Quiz
                        </a>
                      ) : (
                        <span className="text-gray-600 font-semibold">No attempts remaining</span>
                      )}
                    </div>

                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <a href="/courses" className="text-blue-600 hover:underline">
            ← Back to Courses
          </a>
        </div>
      </div>
    </div>
  );
}

// Layout usage
CourseDetailPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Course Details" children={page} />
);

export default CourseDetailPage;
