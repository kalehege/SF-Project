import React, { useState } from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';
import { useForm } from '@inertiajs/react'; // Inertia's form handling

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
  const [isEditing, setIsEditing] = useState(false);

  // Use Inertia.js form handling for TypeScript
  const { data, setData, post, put, errors } = useForm({
    name: course.name,
    description: course.description,
  });

  // Toggle the form view to edit the course
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update the course using PUT method
    put(`/admin/courses/${course.id}`, {
      onSuccess: () => {
        setIsEditing(false); // Exit edit mode after successful update
      },
    });
  };

  const handleDeleteExam = () => {
    put(`/admin/courses/${course.id}/delete`, {
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isEditing ? 'Edit Course' : course.name}
        </h1>

        {/* Conditionally render the form or course details */}
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              ></textarea>
              {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={toggleEditMode}
              className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={toggleEditMode}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400"
              >
                Edit Course
              </button>
              <button onClick={handleDeleteExam}
                      className="ml-4 px-4 py-2  bg-rose-500 text-white rounded-md hover:bg-blue-500">
                Delete Exam
              </button>
              <a href="/admin/courses" className="text-blue-600 hover:underline">
                ← Back to Courses
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Layout usage
CourseDetailPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Course Details" children={page} />
);

export default CourseDetailPage;
