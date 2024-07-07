import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import predictionRoutes from './src/routes/prediction.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/predict', predictionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
