import { motion } from 'framer-motion';
import TrustScore from '../components/TrustScore';
import SentimentChart from '../components/SentimentChart';
import ReviewList from '../components/ReviewList';
import ThemesList from '../components/ThemesList';
import type { Review, Theme } from '../types';

export default function FeaturesPage() {
  // Sample data for demonstrations
  const sampleData = {
    trustScore: 85,
    totalReviews: 1250,
    platformData: {
      website: 0,
      trustpilot: 450,
      yelp: 300,
      reddit: 200,
      google: 300
    },
    timelineData: [
      { month: 'Jan', score: 82 },
      { month: 'Feb', score: 84 },
      { month: 'Mar', score: 83 },
      { month: 'Apr', score: 85 },
      { month: 'May', score: 87 },
      { month: 'Jun', score: 85 }
    ],
    sentimentBreakdown: {
      positive: 850,
      neutral: 300,
      negative: 100
    },
    themes: [
      {
        theme: 'Customer Service',
        count: 450,
        sentiment: 'positive',
        details: 'Customers frequently praise the responsive and helpful support team.'
      },
      {
        theme: 'Product Quality',
        count: 380,
        sentiment: 'positive',
        details: 'High satisfaction with product durability and performance.'
      },
      {
        theme: 'Pricing',
        count: 200,
        sentiment: 'neutral',
        details: 'Mixed feedback about pricing, with some finding it competitive and others expensive.'
      }
    ] as Theme[],
    reviews: [
      {
        id: '1',
        source: 'trustpilot',
        rating: 5,
        text: 'Exceptional customer service! The team went above and beyond to help me.',
        sentiment: 'positive',
        date: '2024-01-15',
        author: 'John D.',
        helpful: 24,
        verified: true,
        sourceUrl: '#',
        location: 'New York, USA'
      },
      {
        id: '2',
        source: 'google',
        rating: 4,
        text: 'Great product overall, though slightly pricey. Would recommend!',
        sentiment: 'positive',
        date: '2024-01-14',
        author: 'Sarah M.',
        helpful: 18,
        verified: true,
        sourceUrl: '#',
        location: 'London, UK'
      },
      {
        id: '3',
        source: 'yelp',
        rating: 3,
        text: 'Product works as expected, but customer service could be improved.',
        sentiment: 'neutral',
        date: '2024-01-13',
        author: 'Mike R.',
        helpful: 12,
        verified: false,
        sourceUrl: '#',
        location: 'Toronto, Canada'
      }
    ] as Review[]
  };

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
            Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful insights to understand your customer reviews
          </p>
        </motion.div>

        <div className="grid gap-16">
          {/* Trust Score Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trust Score Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get a comprehensive trust rating based on multiple factors across different platforms.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <TrustScore
                score={sampleData.trustScore}
                totalReviews={sampleData.totalReviews}
                platformData={sampleData.platformData}
                timelineData={sampleData.timelineData}
              />
            </div>
          </motion.section>

          {/* Sentiment Analysis Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sentiment Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Understand the emotional tone of your reviews with our advanced sentiment analysis.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <SentimentChart data={sampleData.sentimentBreakdown} />
            </div>
          </motion.section>

          {/* Theme Detection Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Theme Detection
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Automatically identify common themes and topics from your reviews.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <ThemesList themes={sampleData.themes} />
            </div>
          </motion.section>

          {/* Review Management Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Review Management
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              View and analyze reviews from multiple platforms in one place.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <ReviewList reviews={sampleData.reviews} />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}