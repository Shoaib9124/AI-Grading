import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { CheckCircle, Clock, TrendingUp, Award, BookOpen, Brain } from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onLogout }) => {
  const assignments = [
    { id: 1, title: 'Essay on Climate Change', subject: 'Environmental Science', status: 'graded', grade: 'A', feedback: 'Excellent analysis and well-structured arguments.' },
    { id: 2, title: 'Mathematics Quiz', subject: 'Advanced Math', status: 'pending', dueDate: '2024-03-25' },
    { id: 3, title: 'History Research Paper', subject: 'World History', status: 'in_progress', dueDate: '2024-03-28' },
  ];

  return (
    <DashboardLayout userType="student" onLogout={onLogout}>
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Completed</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12</h3>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Pending</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Average Grade</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A-</h3>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Improvement</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">+15%</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Current Assignments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Current Assignments</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{assignment.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.subject}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === 'graded' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : assignment.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {assignment.status === 'in_progress' ? 'In Progress' : assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
              </div>
              {assignment.status === 'graded' ? (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Grade:</span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">{assignment.grade}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.feedback}</p>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Due: {assignment.dueDate}</p>
                  <button className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Assignment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Improvement Suggestions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">AI Learning Insights</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Brain className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Writing Style Improvement</h4>
                <p className="text-gray-600 dark:text-gray-300">Focus on varying sentence structure in your essays to improve readability and engagement.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Mathematical Concepts</h4>
                <p className="text-gray-600 dark:text-gray-300">Your understanding of calculus has improved significantly. Consider exploring advanced topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};