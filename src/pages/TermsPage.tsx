import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our commitment to you and your obligations
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By using our service, you agree to these terms and conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}