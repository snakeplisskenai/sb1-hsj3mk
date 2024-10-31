import { motion } from 'framer-motion';
import { ChartBarIcon, ChatBubbleBottomCenterTextIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function LandingHero() {
  const scrollToAnalyze = () => {
    const element = document.getElementById('analyze-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const platforms = [
    { name: 'TrustPilot', icon: '⭐', color: 'from-green-400 to-green-600' },
    { name: 'Yelp', icon: '📱', color: 'from-red-400 to-red-600' },
    { name: 'Reddit', icon: '💬', color: 'from-orange-400 to-orange-600' },
    { name: 'Google Reviews', icon: '🔍', color: 'from-blue-400 to-blue-600' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-purple-300 to-purple-400 dark:from-purple-900 dark:to-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-300 to-yellow-400 dark:from-yellow-900 dark:to-yellow-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-300 to-pink-400 dark:from-pink-900 dark:to-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={item} className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="block">Analyze Website Reviews</span>
              <span className="block mt-2 text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Instantly
              </span>
            </h1>
            
            <motion.p variants={item} className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Get comprehensive insights from TrustPilot, Yelp, Google Reviews, and Reddit – all in one place
            </motion.p>

            <motion.div variants={item} className="flex justify-center gap-4">
              <button
                onClick={scrollToAnalyze}
                className="group relative px-8 py-3 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-70 transition-opacity duration-200 blur-lg"></span>
                <span className="relative flex items-center gap-2">
                  Start Analyzing
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <a
                href="#how-it-works"
                className="relative px-8 py-3 text-lg font-semibold transition-all duration-300 ease-out bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                Learn More
              </a>
            </motion.div>

            {/* Enhanced Platform Logos */}
            <motion.div variants={item} className="mt-16">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-8">
                Trusted Review Sources
              </p>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto">
                {platforms.map((platform) => (
                  <motion.div
                    key={platform.name}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative flex flex-col items-center gap-3 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50">
                      <span className="text-4xl filter drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {platform.icon}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {platform.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 bg-white dark:bg-gray-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything you need to analyze reviews
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Powerful features to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ChartBarIcon,
                title: 'Real-Time Analysis',
                description: 'Get instant insights with our advanced AI analysis',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                icon: ChatBubbleBottomCenterTextIcon,
                title: 'Sentiment Analysis',
                description: 'Understand customer sentiment across all platforms',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Trust Score',
                description: 'Comprehensive trust rating based on multiple factors',
                gradient: 'from-green-600 to-teal-600'
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative h-full px-8 py-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg inline-block transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}