import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { CheckCircle, Clock, AlertCircle, BarChart2, Brain, MessageSquare } from 'lucide-react';

interface TeacherDashboardProps {
  onLogout: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onLogout }) => {
  const assignments = [
    { id: 1, title: 'Essay on Climate Change', student: 'John Doe', status: 'pending', dueDate: '2024-03-25' },
    { id: 2, title: 'Mathematics Quiz', student: 'Jane Smith', status: 'graded', dueDate: '2024-03-20' },
    { id: 3, title: 'History Research Paper', student: 'Mike Johnson', status: 'needs_review', dueDate: '2024-03-22' },
  ];

  return (
    <DashboardLayout userType="teacher" onLogout={onLogout}>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Pending Assignments</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">24</h3>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Graded This Week</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">18</h3>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Needs Review</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">6</h3>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="flex items-center justify-center p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
          <Brain className="w-5 h-5 mr-2" />
          Generate AI Feedback
        </button>
        <button className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
          <BarChart2 className="w-5 h-5 mr-2" />
          View Analytics
        </button>
        <button className="flex items-center justify-center p-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
          <MessageSquare className="w-5 h-5 mr-2" />
          Send Bulk Feedback
        </button>
      </div>

      {/* Recent Assignments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Assignments</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{assignment.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Student: {assignment.student} | Due: {assignment.dueDate}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === 'graded' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : assignment.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
                <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                  Grade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};