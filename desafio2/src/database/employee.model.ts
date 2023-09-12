import mongoose, { Schema, Document } from 'mongoose';

export interface Employee extends Document {
  name: string;
  role: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

export default mongoose.model<Employee>('Employee', EmployeeSchema);
