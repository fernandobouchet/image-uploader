import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello express with typescript!');
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
