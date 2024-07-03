import express from 'express';
import { getPrediction } from '../services/openaiService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { type, variety, region } = req.body;

    if (!type || !variety || !region) {
        return res.status(400).json({ error: 'Please provide type, variety, and region.' });
    }

    try {
        const prediction = await getPrediction(type, variety, region);
        res.json({ prediction });
    } catch (error) {
        console.error('Error in prediction route:', error.message);
        res.status(500).json({ error: 'Failed to get prediction' });
    }
});

export default router;
