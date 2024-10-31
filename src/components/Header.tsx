import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onReset: () => void;
  showReset: boolean;
}

export default function Header({ isDarkMode, onThemeToggle, onReset, showReset }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                ReviewAI
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
                <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Pricing
                </Link>
                <Link to="/documentation" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Documentation
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {showReset && (
              <button
                onClick={onReset}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                aria-label="Reset analysis"
              >
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={onThemeToggle}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <Link
              to="/pricing"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}