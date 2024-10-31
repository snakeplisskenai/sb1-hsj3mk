import { motion } from 'framer-motion';

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Machine Learning Engineer',
      department: 'AI/ML',
      location: 'Remote',
      type: 'Full-time'
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
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Help us shape the future of customer feedback analysis
          </p>
        </motion.div>

        <div className="grid gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{position.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {position.department}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">
                  {position.location}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  {position.type}
                </span>
              </div>
              <button className="button-primary">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}