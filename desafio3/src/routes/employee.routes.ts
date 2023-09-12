import { Router } from 'express';
import EmployeeController from '../controllers/employee.controller';

const router = Router();

router.post('/employees', EmployeeController.create);
router.get('/employees', EmployeeController.findAll);
router.get('/employees/:id', EmployeeController.findById);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

router.get('/populate', EmployeeController.populateEmployees);

export default router;
