import { Link } from '@inertiajs/react';
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
                    <Link
                      href={`/courses/${course.id}/register`}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors duration-300"
                    >
                      Register for Course
                    </Link>
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
