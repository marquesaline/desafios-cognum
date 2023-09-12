import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employee.routes';
import './database/db';

const app = express();

app.use(bodyParser.json());
app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
