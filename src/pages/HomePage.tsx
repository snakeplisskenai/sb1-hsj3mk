import LandingHero from '../components/LandingHero';
import SearchBar from '../components/SearchBar';
import TrustScore from '../components/TrustScore';
import SentimentChart from '../components/SentimentChart';
import ReviewList from '../components/ReviewList';
import ThemesList from '../components/ThemesList';
import { useAnalysis } from '../hooks/useAnalysis';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

interface HomePageProps {
  onAnalysis?: () => void;
}

export default function HomePage({ onAnalysis }: HomePageProps) {
  const { analyzeWebsite, loading, error, result } = useAnalysis();

  const handleSearch = async (url: string) => {
    await analyzeWebsite(url);
    onAnalysis?.();
  };

  return (
    <main className="pt-16">
      <LandingHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchBar onSearch={handleSearch} loading={loading} error={error} />

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 flex justify-center"
            >
              <LoadingSpinner />
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 space-y-12"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <TrustScore
                    score={result.trustScore}
                    totalReviews={result.totalReviews}
                    platformData={result.platformData}
                    timelineData={result.timelineData}
                  />
                </div>
                <div>
                  <SentimentChart data={result.sentimentBreakdown} />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <ThemesList themes={result.themes} />
                </div>
                <div>
                  <ReviewList reviews={result.reviews} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}