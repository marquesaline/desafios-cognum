import { Request, Response } from 'express';
import EmployeeModel from '../database/employee.model';

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const { name, role } = req.body;
    const employee = new EmployeeModel({ name, role });
    const result = await employee.save();
    res.status(201).json({ success: true, message: 'Employee created successfully.', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to create Employee.' });
  }
};

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json({ success: true, message: 'Employees listed successfully.', data: employees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to list Employees.' });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await EmployeeModel.findById(id);

    if (!employee) {
      res.status(404).json({ success: false, message: 'Employee not found.' });
      return;
    }

    res.status(200).json({ success: true, message: 'Employee retrieved successfully.', data: employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to retrieve Employee.' });
  }
};


export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, role } = req.body;
    const result = await EmployeeModel.findByIdAndUpdate(id, { name, role }, { new: true });

    if (!result) {
      res.status(404).json({ success: false, message: 'Employee not found.' });
      return;
    }

    res.status(200).json({ success: true, message: 'Employee updated successfully.', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update Employee.' });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await EmployeeModel.findByIdAndDelete(id);

    if (!result) {
      res.status(404).json({ success: false, message: 'Employee not found.' });
      return;
    }

    res.status(200).json({ success: true, message: 'Employee deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete Employee.' });
  }
};
