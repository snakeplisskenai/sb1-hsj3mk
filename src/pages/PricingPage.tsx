import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 reviews/month',
        'Basic sentiment analysis',
        'Email support',
        'API access'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'For growing businesses',
      features: [
        'Up to 10,000 reviews/month',
        'Advanced sentiment analysis',
        'Priority support',
        'Custom reporting',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited reviews',
        'Custom integrations',
        'Dedicated support',
        'Custom features',
        'API access'
      ]
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
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that's right for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}