import express from 'express';
import db from '../database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(200).json({ success: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
