import { motion } from 'framer-motion';

export default function GuidesPage() {
  const guides = [
    {
      title: 'Getting Started with ReviewAI',
      description: 'Learn the basics of using ReviewAI for review analysis.',
      difficulty: 'Beginner'
    },
    {
      title: 'Advanced Sentiment Analysis',
      description: 'Deep dive into understanding sentiment analysis results.',
      difficulty: 'Advanced'
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn how to make the most of ReviewAI
          </p>
        </motion.div>

        <div className="grid gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{guide.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{guide.description}</p>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {guide.difficulty}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}