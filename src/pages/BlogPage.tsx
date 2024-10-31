import { motion } from 'framer-motion';

export default function BlogPage() {
  const posts = [
    {
      title: 'Understanding Customer Sentiment',
      excerpt: 'Learn how AI can help you understand customer feedback at scale.',
      date: '2024-01-15',
      author: 'Sarah Johnson'
    },
    {
      title: 'The Future of Review Analysis',
      excerpt: 'Discover the latest trends in review analysis and sentiment detection.',
      date: '2024-01-10',
      author: 'Michael Chen'
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
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Insights and updates from our team
          </p>
        </motion.div>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}