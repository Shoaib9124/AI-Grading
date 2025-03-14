import React from 'react';
import { Menu, Home, BookOpen, Users, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'teacher' | 'student';
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {userType === 'teacher' ? 'Teacher Portal' : 'Student Portal'}
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                <BookOpen className="w-5 h-5 mr-3" />
                {userType === 'teacher' ? 'Assignments' : 'My Work'}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Users className="w-5 h-5 mr-3" />
                {userType === 'teacher' ? 'Students' : 'Classes'}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button 
            onClick={onLogout}
            className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};