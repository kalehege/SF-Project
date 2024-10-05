import React from 'react';
import { useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// Define the type for the Course
type Course = {
  id: number;
  name: string;
};

interface AddExamsPageProps {
  courses: Course[];
}

function AddExamsPage({ courses }: AddExamsPageProps) {
  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
    course_id: '', // This will hold the selected course category
  });

  // Correct the type of the event in the TypeScript declaration
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/exams/create');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Add New Exam</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="course">
            Select Course Category
          </label>
          <select
            id="course"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={data.course_id}
            onChange={(e) => setData('course_id', e.target.value)}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          {errors.course_id && <span className="text-red-600 text-sm">{errors.course_id}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Exam Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          ></textarea>
          {errors.description && <span className="text-red-600 text-sm">{errors.description}</span>}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
        >
          Add Exam
        </button>
      </form>
    </div>
  );
}

AddExamsPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Add New Exam" children={page} />
);

export default AddExamsPage;
