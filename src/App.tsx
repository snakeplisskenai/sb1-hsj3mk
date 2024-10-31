import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import APIPage from './pages/APIPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import DocumentationPage from './pages/DocumentationPage';
import GuidesPage from './pages/GuidesPage';
import SupportPage from './pages/SupportPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleReset = () => {
    setShowReset(false);
    // Add any reset logic here
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header 
        isDarkMode={isDarkMode} 
        onThemeToggle={handleThemeToggle}
        onReset={handleReset}
        showReset={showReset}
      />
      <Routes>
        <Route path="/" element={<HomePage onAnalysis={() => setShowReset(true)} />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/api" element={<APIPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}