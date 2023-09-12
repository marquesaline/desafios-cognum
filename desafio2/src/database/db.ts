import mongoose from 'mongoose';

const dbURI = 'mongodb://database:27017/employees';

mongoose.connect(dbURI);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
