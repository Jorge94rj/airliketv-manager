import mongoose from 'mongoose';

const MONGODB_URI = process.env.DB_URI || '';
const MONGODB_DB = process.env.DB_NAME || '';

if (!MONGODB_URI) {
  throw new Error('Not MONGODB_URI variable found in .env file');
}

if (!MONGODB_DB) {
  throw new Error('Not MONGODB_DB variable found in .env file');
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
}

const connectDB = async() => {
  try {
    await mongoose.connect(MONGODB_URI, options)
  } catch (error) {
    process.exit(1)
  }
}

export default connectDB
