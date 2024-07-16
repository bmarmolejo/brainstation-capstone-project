import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import predictionRoutes from './src/routes/prediction.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', 
  'https://enobot.netlify.app',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/predict', predictionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
