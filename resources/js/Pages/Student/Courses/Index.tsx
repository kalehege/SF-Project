import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
// @ts-ignore
import MainLayout from '@/Layouts/MainLayout';

type Course = {
  id: number;
  name: string;
  description: string;
};

interface CoursesPageProps {
  registered_courses: Course[];
  non_registered_courses: Course[];
}

function CoursesPage({ registered_courses, non_registered_courses }: CoursesPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form submission hook
  const { get } = useForm();

  const handleRegisterClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const confirmRegistration = () => {
    if (selectedCourse) {
      get(`/courses/${selectedCourse.id}/register`);
    }
    // Close the modal
    setIsModalOpen(false);
  };

  const cancelRegistration = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Courses</h1>
        </div>

        {/* Registered Courses Section */}
        {registered_courses.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Already Registered Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registered_courses.map((course) => (
                <div
                  key={course.id}
                  className="p-6 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="font-bold text-xl text-gray-900 text-center">
                    <Link
                      href={`/courses/${course.id}/overview`}
                      className="hover:underline block"
                    >
                      {course.name}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mt-4 text-center">
                    {course.description}
                  </p>

                  <div className="flex justify-center mt-4">
                    {/* Button for Already Registered */}
                    <span className="px-4 py-2 bg-gray-400 text-white rounded-md cursor-default">
                      Already Registered
                    </span>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Link
                      href={`/courses/${course.id}/overview`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Non-Registered Courses Section */}
        {non_registered_courses.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {non_registered_courses.map((course) => (
                <div
                  key={course.id}
                  className="p-6 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="font-bold text-xl text-gray-900 text-center">
                    <Link
                      href={`/courses/${course.id}/overview`}
                      className="hover:underline block"
                    >
                      {course.name}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mt-4 text-center">
                    {course.description}
                  </p>

                  <div className="flex justify-center mt-4">
                    {/* Register for Course Button */}
                    <button
                      onClick={() => handleRegisterClick(course)} // Open modal on click
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-300"
                    >
                      Register for Course
                    </button>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Link
                      href={`/courses/${course.id}/overview`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {isModalOpen && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Confirm Registration</h2>
              <p className="mb-6">Are you sure you want to register for the course "{selectedCourse.name}"?</p>
              <div className="flex justify-end">
                <button
                  onClick={cancelRegistration}
                  className="px-4 py-2 bg-red-600 text-white rounded-md mr-2"
                >
                  No
                </button>
                <button
                  onClick={confirmRegistration}
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
CoursesPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Courses" children={page} />
);

export default CoursesPage;
