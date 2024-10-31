import { useState } from 'react';
import type { AnalysisResult } from '../types';

const API_URL = 'https://sb1-hsj3mk.onrender.com/api/analyze';

export function useAnalysis() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeWebsite = async (url: string) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze website');
      }

      setResult(data);
    } catch (err) {
      let errorMessage = 'An error occurred while analyzing the website';
      
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection and try again.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    analyzeWebsite,
    loading,
    error,
    result,
  };
}