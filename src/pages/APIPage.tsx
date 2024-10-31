import { motion } from 'framer-motion';

export default function APIPage() {
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
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Integrate review analysis into your applications
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To use our API, you'll need an API key. Sign up for an account to get started.
            </p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code>{`fetch("https://api.reviewai.com/v1/analyze", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    url: "example.com"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}</code>
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Response Format</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The API returns a JSON object containing the analysis results.
            </p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code>{`{
  "trustScore": 85,
  "totalReviews": 1250,
  "sentimentBreakdown": {
    "positive": 850,
    "neutral": 300,
    "negative": 100
  },
  "commonThemes": [
    {
      "theme": "Customer Service",
      "count": 450,
      "sentiment": "positive"
    }
  ]
}`}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
}