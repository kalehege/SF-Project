import { Link,usePage  } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Briefcase, BookOpen, Calendar, Users, ShieldAlert } from 'lucide-react';

function DashboardPage() {
  const { props } = usePage();  // Get all page props
  const user = props.auth.user;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to SF Campus, { user.first_name } { user.last_name }</h1>
        <p className="text-lg">Your academic journey starts here. Explore courses, track progress, and stay updated with the latest events.</p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Courses */}
        <Link href="/courses" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <BookOpen className="text-blue-600 w-12 h-12 mr-4" />
            <h2 className="text-xl font-bold">Your Courses</h2>
          </div>
          <p className="text-gray-600">View and manage the courses you are enrolled in, track progress, and access materials.</p>
        </Link>

        {/* Calendar */}
        <Link href="/calendar" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Calendar className="text-yellow-600 w-12 h-12 mr-4" />
            <h2 className="text-xl font-bold">Academic Calendar</h2>
          </div>
          <p className="text-gray-600">Stay up to date with upcoming lectures, exams, and other academic events.</p>
        </Link>

        {/* Profile */}
        <Link href={`/users/${user.id}/edit`} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Users className="text-green-600 w-12 h-12 mr-4" />
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
          <p className="text-gray-600">Manage your profile, view personal information, and update your settings.</p>
        </Link>

        {/* Alerts */}
        <Link href="/alerts" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <ShieldAlert className="text-red-600 w-12 h-12 mr-4" />
            <h2 className="text-xl font-bold">Alerts</h2>
          </div>
          <p className="text-gray-600">Check recent alerts and notifications regarding your academic journey.</p>
        </Link>

        {/* Campus Jobs */}
        <Link href="/campus-jobs" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Briefcase className="text-purple-600 w-12 h-12 mr-4" />
            <h2 className="text-xl font-bold">Campus Jobs</h2>
          </div>
          <p className="text-gray-600">Explore job opportunities available within the campus and apply for positions.</p>
        </Link>
      </div>
    </div>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
DashboardPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Dashboard" children={page} />
);

export default DashboardPage;
