import mongoose, { Mongoose } from 'mongoose';

let clientPromise: Promise<Mongoose>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

let cached = (global as any)._mongooseConnect = (global as any)._mongooseConnect || { client: null, promise: null };

async function connectDB() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI!, opts);
  }

  try {
    cached.client = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
}

export default connectDB;
