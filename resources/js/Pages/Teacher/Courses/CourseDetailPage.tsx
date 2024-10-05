import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

// Define the type for a course
type Course = {
  id: number;
  name: string;
  description: string;
};

interface CourseDetailPageProps {
  course: Course;
}

function CourseDetailPage({ course }: CourseDetailPageProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.name}</h1>
        <p className="text-gray-600 mb-4">{course.description}</p>

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
