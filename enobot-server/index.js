import express from 'express';
import dotenv from 'dotenv';
import predictionRoutes from './src/routes/prediction.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/predict', predictionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
