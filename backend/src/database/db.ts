import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
};

const dbConnection = mongoose.connection;

dbConnection.on('error', (error) => {
  console.log(error);
});

dbConnection.once('connected', () => {
  console.log('Database connected');
});

export default connectDB;
export { dbConnection };
