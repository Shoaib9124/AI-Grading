import { useState, useEffect } from 'react';
import { LoginBox } from './components/LoginBox';
import { ThemeToggle } from './components/ThemeToggle';
import { TeacherDashboard } from './components/TeacherDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { BrainCog } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'teacher' | 'student' | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  if (isLoggedIn && userType) {
    return userType === 'teacher' ? (
      <TeacherDashboard onLogout={handleLogout} />
    ) : (
      <StudentDashboard onLogout={handleLogout} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-8">
          <BrainCog className="w-20 h-20 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Effortless Grading, Personalized Feedback
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Empowering educators and students with AI-driven feedback and grading
        </p>

        {/* Login Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div onClick={() => { setIsLoggedIn(true); setUserType('teacher'); }}>
            <LoginBox type="teacher" />
          </div>
          <div onClick={() => { setIsLoggedIn(true); setUserType('student'); }}>
            <LoginBox type="student" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 space-x-4">
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;