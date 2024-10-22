import MainMenuItem from '@/Components/Menu/MainMenuItem';
import { Building, CircleGauge, Printer, Users, BookOpenText, BookCheck, CheckCheck } from 'lucide-react';
import { usePage } from '@inertiajs/react';

interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {
  // usePage hook inside the component to access props
  const { props } = usePage();
  const user = props.auth.user;

  return (
    <div className={className}>
      <MainMenuItem
        text="Dashboard"
        link="dashboard"
        icon={<CircleGauge size={20} />}
      />

      <MainMenuItem
        text="Student Courses"
        link="courses.index"
        icon={<BookOpenText size={20} />}
      />

      <MainMenuItem
        text="Results"
        link="result.index"
        icon={<CheckCheck size={20} />}
      />
      {/* Separator */}
      <hr className="my-4 border-gray-300" />

      {/* Admin-specific menu items */}
      {(user.type === 'admin' || user.type === 'lecture') && (
        <>
          <MainMenuItem
            text="Exams"
            link="admin.exams.index"
            icon={<BookCheck size={20} />}
          />
        </>
      )}

      {(user.type === 'admin') && (
        <>
          <MainMenuItem
            text="Admin Courses"
            link="admin.courses.index"
            icon={<BookOpenText size={20} />}
          />
          <MainMenuItem
            text="Admin User Manage"
            link="users"
            icon={<BookOpenText size={20} />}
          />
        </>
      )}

    </div>
  );
}
