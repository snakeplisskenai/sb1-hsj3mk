import { motion } from 'framer-motion';

export default function SupportPage() {
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
            Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We're here to help you succeed
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need help? Our support team is available 24/7 to assist you.
            </p>
            <button className="button-primary">Contact Us</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}