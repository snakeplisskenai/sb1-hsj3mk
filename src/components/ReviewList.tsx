import type { Review } from '../types';
import { format, parseISO } from 'date-fns';
import { CheckBadgeIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const [sortBy, setSortBy] = useState<'date' | 'helpful' | 'rating'>('date');
  const [filterBy, setFilterBy] = useState<Review['sentiment'] | 'all'>('all');

  const getSourceIcon = (source: Review['source']) => {
    switch (source) {
      case 'trustpilot':
        return '🌟';
      case 'yelp':
        return '📱';
      case 'reddit':
        return '💬';
      case 'google':
        return '🔍';
      default:
        return '⭐';
    }
  };

  const getSourceName = (source: Review['source']) => {
    switch (source) {
      case 'trustpilot':
        return 'Trustpilot';
      case 'yelp':
        return 'Yelp';
      case 'reddit':
        return 'Reddit';
      case 'google':
        return 'Google Reviews';
      default:
        return source;
    }
  };

  const getSentimentColor = (sentiment: Review['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-900/10';
      case 'negative':
        return 'border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-900/10';
      default:
        return 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-800/30';
    }
  };

  const sortedAndFilteredReviews = [...reviews]
    .filter(review => filterBy === 'all' || review.sentiment === filterBy)
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'helpful':
          return (b.helpful || 0) - (a.helpful || 0);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Recent Reviews
        </h3>
        <div className="flex flex-wrap gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rated</option>
          </select>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as typeof filterBy)}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Reviews</option>
            <option value="positive">Positive Only</option>
            <option value="neutral">Neutral Only</option>
            <option value="negative">Negative Only</option>
          </select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-4">
          {sortedAndFilteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg group ${getSentimentColor(
                review.sentiment
              )}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
                    {getSourceIcon(review.source)}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-white">{review.author}</span>
                      {review.verified && (
                        <CheckBadgeIcon className="h-5 w-5 text-blue-500" title="Verified review" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{getSourceName(review.source)}</span>
                      • <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {format(parseISO(review.date), 'MMM d, yyyy')}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg transition-colors duration-200 ${
                          i < review.rating ? 'text-yellow-400 group-hover:text-yellow-500' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <HandThumbUpIcon className="h-4 w-4" />
                    <span className="text-sm">{review.helpful}</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    review.sentiment === 'positive'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
                      : review.sentiment === 'negative'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                >
                  {review.sentiment}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}