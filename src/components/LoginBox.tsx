import React from 'react';
import { User, GraduationCap } from 'lucide-react';

interface LoginBoxProps {
  type: 'teacher' | 'student';
}

export const LoginBox: React.FC<LoginBoxProps> = ({ type }) => {
  return (
    <div className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        {type === 'teacher' ? (
          <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        ) : (
          <User className="w-12 h-12 text-green-600 dark:text-green-400" />
        )}
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        {type === 'teacher' ? 'Teacher Login' : 'Student Login'}
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor={`${type}-id`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            ID
          </label>
          <input
            type="text"
            id={`${type}-id`}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter your ID"
          />
        </div>
        <div>
          <label htmlFor={`${type}-password`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            id={`${type}-password`}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
            type === 'teacher'
              ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              : 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
          }`}
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          Forgot password?
        </a>
      </p>
    </div>
  );
};