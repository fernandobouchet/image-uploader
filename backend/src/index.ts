import 'dotenv/config';
import express from 'express';
import connectDB from './database/db';
import imageRoute from './routes/imageRoute';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use('/', imageRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
