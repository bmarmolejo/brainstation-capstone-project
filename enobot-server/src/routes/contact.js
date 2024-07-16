// routes/contact.js
import express from 'express';
import supabase from '../database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }]);

    if (error) throw error;

    res.status(200).json({ message: 'Message received', data });
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

export default router;
