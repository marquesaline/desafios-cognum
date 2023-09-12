// src/controllers/EmployeeController.ts

import { Request, Response } from 'express';
import Employee, { IEmployee } from '../models/employee.model';
import RandomUserService from '../services/randomUserService';

class EmployeeController {
  public async create(req: Request, res: Response) {
    try {
      const newEmployeeData: IEmployee = req.body;
      const newEmployee = await Employee.create(newEmployeeData);
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create employee' });
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const employees = await Employee.find();
      res.json(employees);

    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch employees' });
    }
  }

  public async findById(req: Request, res: Response) {
    const employeeId = req.params.id;
    try {
      const employee = await Employee.findById(employeeId);

      if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json(employee);
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch employee' });
    }
  }

  public async update(req: Request, res: Response) {
    const employeeId = req.params.id;
    const updatedEmployeeData: IEmployee = req.body;

    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        updatedEmployeeData,
        { new: true }
      );

      if (!updatedEmployee) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json(updatedEmployee);
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to update employee' });
    }
  }

  public async delete(req: Request, res: Response) {
    const employeeId = req.params.id;

    try {
      const deletedEmployee = await Employee.findByIdAndRemove(employeeId);

      if (!deletedEmployee) {
        res.status(404).json({ error: 'Employee not found' });
      } else {
        res.json({ message: 'Employee deleted successfully' });
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to delete employee' });
    }
  }

  public async populateEmployees(req: Request, res: Response) {
    try {
      const randomUsers = await RandomUserService.fetchRandomUsers(10);

      const employees: IEmployee[] = randomUsers.map((user: any) => ({
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        address: {
          street: user.location.street.name,
          city: user.location.city,
          state: user.location.state,
          country: user.location.country,
          postalCode: user.location.postcode,
        },
        dateOfBirth: new Date(user.dob.date),
        email: user.email,
      }));

      const insertedEmployees = await Employee.insertMany(employees);

      res.status(201).json(insertedEmployees);
    } catch (error) {
      res.status(500).json({ error: 'Failed to populate employees' });
    }
  }
}

export default new EmployeeController();


