import express from 'express';
import { saveMessage } from '../services/contactService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    await saveMessage({ name, email, message });
    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

export default router;
