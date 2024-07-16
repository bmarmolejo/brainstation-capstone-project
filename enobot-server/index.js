import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import predictionRoutes from './src/routes/prediction.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api/predict', predictionRoutes);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const [result] = await db.query('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
