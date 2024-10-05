import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

// Define the type for a course
type Exams = {
  courses: string;
  id: number;
  name: string;
  description: string;
};

interface ExamDetailPageProps {
  exam: Exams;
}

function ExamDetailPage({ exam }: ExamDetailPageProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{exam.name}</h1>
        <p className="text-gray-600 mb-4">{exam.description}</p>
        <p className="text-gray-900 mb-4 ml-5">{exam.courses.name}</p>
        <div className="mt-6">
          <a href="/exams" className="text-blue-600 hover:underline">
            ← Back to Exams
          </a>
        </div>
      </div>
    </div>
  );
}

// Layout usage
ExamDetailPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Course Details" children={page} />
);

export default ExamDetailPage;
