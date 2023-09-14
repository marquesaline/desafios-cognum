import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import employeeRoutes from './routes/employee.routes';
import './models/db';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default { app, server };
