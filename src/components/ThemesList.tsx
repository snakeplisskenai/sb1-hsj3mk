import { Theme } from '../types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface ThemesListProps {
  themes: Theme[];
}

export default function ThemesList({ themes }: ThemesListProps) {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);

  const getSentimentColor = (sentiment: Theme['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200';
      case 'negative':
        return 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getProgressBarColor = (sentiment: Theme['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-500 dark:bg-green-400';
      case 'negative':
        return 'bg-red-500 dark:bg-red-400';
      default:
        return 'bg-gray-500 dark:bg-gray-400';
    }
  };

  const maxCount = Math.max(...themes.map(theme => theme.count));

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Common Themes
      </h3>
      <div className="grid gap-3">
        {themes.map((theme) => (
          <div
            key={theme.theme}
            className="relative overflow-hidden"
          >
            <button
              onClick={() => setExpandedTheme(expandedTheme === theme.theme ? null : theme.theme)}
              className="w-full text-left"
            >
              <div className="relative z-10 flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                      {theme.theme}
                    </h4>
                    <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(theme.sentiment)}`}>
                      {theme.sentiment}
                    </span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full ${getProgressBarColor(theme.sentiment)} transition-all duration-500`}
                      style={{ width: `${(theme.count / maxCount) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Mentioned {theme.count} times
                    </span>
                    {expandedTheme === theme.theme ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            </button>
            {expandedTheme === theme.theme && (
              <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">{theme.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}