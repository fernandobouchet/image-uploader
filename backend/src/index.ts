import 'dotenv/config';
import express from 'express';
import connectDB from './database/db';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
