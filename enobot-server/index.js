import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRouter from './routes/contact.js';

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
