import express from 'express';
import { getPrediction } from '../services/openaiService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { type, variety, region } = req.body;

  if (!type && (!variety || !variety.length) && !region) {
    return res.status(400).json({ error: 'At least one of type, variety, or region is required' });
  }

  try {
    const prediction = await getPrediction(type, variety, region);
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get prediction' });
  }
});

export default router;
