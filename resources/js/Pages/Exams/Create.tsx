import React from 'react';
import { useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

function AddExamsPage() {
  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
  });

  // Correct the type of the event in the TypeScript declaration
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/exams/create');
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Add New Exams</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Course Name
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
          Add Course
        </button>
      </form>
    </div>
  );
}

AddExamsPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Add New Exams" children={page} />
);

export default AddExamsPage;
