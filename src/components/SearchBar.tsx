import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading?: boolean;
  error?: string | null;
}

export default function SearchBar({ onSearch, loading = false, error = null }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateURL = (url: string) => {
    // Allow domain-only format (e.g., amazon.com) or full URL format
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    const urlRegex = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    
    return urlRegex.test(url) || domainRegex.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    
    if (!trimmedQuery) {
      setValidationError('Please enter a website URL');
      return;
    }

    if (!validateURL(trimmedQuery)) {
      setValidationError('Please enter a valid website URL (e.g., amazon.com)');
      return;
    }

    setValidationError(null);
    onSearch(trimmedQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (validationError) {
      setValidationError(null);
    }
  };

  return (
    <div className="relative z-10">
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div 
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 transition-opacity duration-200 ${isFocused ? 'opacity-100' : 'group-hover:opacity-70'}`}></div>
            <div className="relative">
              <input
                type="text"
                className={`block w-full px-6 py-4 text-lg rounded-xl border-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg ring-1 ring-inset ${
                  validationError || error ? 'ring-red-500' : 'ring-gray-300 dark:ring-gray-700'
                } placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all duration-200`}
                placeholder="Enter website URL (e.g., amazon.com)"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={loading}
                aria-label="Website URL input"
                autoComplete="url"
                spellCheck="false"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Analyze website"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <span>Analyze</span>
                  </>
                )}
              </button>
            </div>
          </div>
          {(validationError || error) && (
            <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">
              {validationError || error}
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Get instant insights from customer reviews across multiple platforms
          </p>
        </div>
      </form>
    </div>
  );
}