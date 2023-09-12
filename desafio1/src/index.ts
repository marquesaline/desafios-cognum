import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, Cognum!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
