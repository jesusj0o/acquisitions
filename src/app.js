import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hi from acquisitions.');
});

export default app;
