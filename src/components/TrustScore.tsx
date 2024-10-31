import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import type { PlatformData, TimelineData } from '../types';

interface TrustScoreProps {
  score: number;
  totalReviews: number;
  platformData: PlatformData;
  timelineData: TimelineData[];
}

export default function TrustScore({ score, totalReviews, platformData, timelineData }: TrustScoreProps) {
  const getColor = (score: number) => {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#eab308';
    return '#ef4444';
  };

  const platformIcons: { [key: string]: string } = {
    trustpilot: '🌟',
    yelp: '📱',
    reddit: '💬',
    google: '🔍',
    website: '🌐'
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-900 dark:text-white font-medium">{`${payload[0].payload.month}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
        <div className="relative">
          <div className="flex items-center gap-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-32 h-32"
            >
              <CircularProgressbar
                value={score}
                text={`${score}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: getColor(score),
                  textColor: getColor(score),
                  trailColor: '#d1d5db',
                  pathTransition: 'stroke-dashoffset 1s ease-in-out',
                })}
              />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trust Score
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {Object.entries(platformData).map(([platform, count], index) => (
          <motion.div
            key={platform}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
                {platformIcons[platform] || '📊'}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white capitalize group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {platform}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {count.toLocaleString()} reviews
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Score Timeline
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                domain={[60, 100]} 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}