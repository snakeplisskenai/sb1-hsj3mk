import natural from 'natural';

const tokenizer = new natural.WordTokenizer();
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

// Mock review data for demonstration
const mockReviews = {
  'amazon': [
    { text: 'Great product, fast delivery! Really happy with my purchase.', rating: 5 },
    { text: 'Good value for money but delivery was a bit slow.', rating: 4 },
    { text: 'Product quality is excellent. Would buy again.', rating: 5 },
    { text: 'Average product, nothing special.', rating: 3 },
    { text: 'Disappointed with the quality. Not as advertised.', rating: 2 }
  ],
  'default': [
    { text: 'Excellent service and quality', rating: 5 },
    { text: 'Good experience overall', rating: 4 },
    { text: 'Average service', rating: 3 }
  ]
};

export async function analyzeWebsite(url) {
  try {
    // Extract domain from URL
    let domain = url.toLowerCase();
    domain = domain.replace(/^https?:\/\//, '');
    domain = domain.split('/')[0];
    
    // Get base domain (e.g., amazon from amazon.co.uk)
    const baseDomain = domain.split('.').find(part => 
      mockReviews[part] !== undefined
    ) || 'default';

    // Use mock reviews for the domain or default reviews
    const reviews = (mockReviews[baseDomain] || mockReviews.default).map((review, index) => ({
      id: String(index + 1),
      text: review.text,
      date: new Date().toISOString(),
      source: 'website',
      author: `User${index + 1}`,
      location: 'United Kingdom',
      rating: review.rating,
      helpful: Math.floor(Math.random() * 50),
      verified: Math.random() > 0.3
    }));

    // Analyze sentiment for each review
    const analyzedReviews = reviews.map(review => {
      const tokens = tokenizer.tokenize(review.text);
      const sentiment = analyzer.getSentiment(tokens);
      return {
        ...review,
        sentiment: sentiment > 0 ? 'positive' : sentiment < 0 ? 'negative' : 'neutral'
      };
    });

    // Calculate statistics
    const sentimentBreakdown = {
      positive: analyzedReviews.filter(r => r.sentiment === 'positive').length,
      neutral: analyzedReviews.filter(r => r.sentiment === 'neutral').length,
      negative: analyzedReviews.filter(r => r.sentiment === 'negative').length
    };

    const totalReviews = analyzedReviews.length;
    const averageRating = analyzedReviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;
    const trustScore = Math.round((averageRating / 5) * 100);

    // Extract common themes
    const themes = extractThemes(analyzedReviews);

    // Generate mock timeline data
    const timelineData = generateTimelineData(trustScore);

    return {
      trustScore,
      totalReviews,
      sentimentBreakdown,
      reviews: analyzedReviews,
      themes,
      platformData: {
        website: Math.floor(totalReviews * 0.4),
        trustpilot: Math.floor(totalReviews * 0.3),
        yelp: Math.floor(totalReviews * 0.2),
        google: Math.floor(totalReviews * 0.1)
      },
      timelineData
    };
  } catch (error) {
    console.error('Analysis error:', error);
    throw new Error('Failed to analyze website');
  }
}

function extractThemes(reviews) {
  const commonWords = new Set(['the', 'and', 'but', 'for', 'with', 'was', 'very']);
  const words = reviews.flatMap(review => 
    tokenizer.tokenize(review.text.toLowerCase())
      .filter(word => !commonWords.has(word))
  );

  const wordFreq = {};
  words.forEach(word => {
    if (word.length > 3) {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    }
  });

  return Object.entries(wordFreq)
    .filter(([_, count]) => count > 1)
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, 5)
    .map(([theme, count]) => ({
      theme: theme.charAt(0).toUpperCase() + theme.slice(1),
      count,
      sentiment: analyzeSentimentForTheme(theme, reviews),
      details: generateThemeDetails(theme, count, reviews)
    }));
}

function analyzeSentimentForTheme(theme, reviews) {
  const relevantReviews = reviews.filter(review => 
    review.text.toLowerCase().includes(theme)
  );
  
  const sentimentSum = relevantReviews.reduce((sum, review) => {
    return sum + (review.sentiment === 'positive' ? 1 : review.sentiment === 'negative' ? -1 : 0);
  }, 0);

  return sentimentSum > 0 ? 'positive' : sentimentSum < 0 ? 'negative' : 'neutral';
}

function generateThemeDetails(theme, count, reviews) {
  const sentiment = analyzeSentimentForTheme(theme, reviews);
  const sentimentText = sentiment === 'positive' ? 'positively' : 
                       sentiment === 'negative' ? 'negatively' : 'neutrally';
  
  return `This theme appears ${count} times and is mentioned ${sentimentText} in reviews.`;
}

function generateTimelineData(currentScore) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const variance = 5; // Score variance between months
  
  return months.map((month, index) => {
    // Generate slightly different scores for previous months
    const score = Math.max(0, Math.min(100, 
      currentScore + (Math.random() * variance * 2 - variance) - (months.length - index)
    ));
    
    return {
      month,
      score: Math.round(score)
    };
  });
}