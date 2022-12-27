import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
};

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.once('connected', () => {
  console.log('Database connected');
});

export default connectDB;
