import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  firstName: string;
  lastName: string;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  dateOfBirth: Date;
  email: string;
}

const EmployeeSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  dateOfBirth: { type: Date },
  email: { type: String },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
