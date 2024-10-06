import React from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

// Define the type for an exam
type Exam = {
  id: number;
  name: string;
  description: string;
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
              {course.exams.map((exam) => (
                <li key={exam.id} className="p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
                  <h3 className="text-xl font-semibold">{exam.name}</h3>
                  <p className="text-gray-600">{exam.description}</p>
                  <div className="mt-2">
                    <a
                      href={`/exams/${exam.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Exam
                    </a>
                  </div>
                </li>
              ))}
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
