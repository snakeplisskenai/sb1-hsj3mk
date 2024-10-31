import express from 'express';
import cors from 'cors';
import { analyzeWebsite } from './analyzer.js';

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Basic URL validation
    const urlPattern = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    const urlWithProtocolPattern = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
    
    if (!urlPattern.test(url) && !urlWithProtocolPattern.test(url)) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    const analysis = await analyzeWebsite(url);
    res.json(analysis);
  } catch (error) {
    console.error('Analysis error:', error);
    const errorMessage = error.message || 'Failed to analyze website';
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});