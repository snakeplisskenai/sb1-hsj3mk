export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-blue-600 dark:border-blue-400 animate-spin border-t-transparent"></div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">Analyzing reviews...</p>
    </div>
  );
}