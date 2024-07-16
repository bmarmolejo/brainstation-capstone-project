import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRouter from './routes/contact.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use('/api/contact', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
