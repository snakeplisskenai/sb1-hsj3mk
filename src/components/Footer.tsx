import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/features" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/documentation" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/privacy" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} ReviewAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}