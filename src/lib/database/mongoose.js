import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// If no MONGODB_URL is defined, throw an error
if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URL');
}

// Cache object for storing the connection and promise
let cached = global.mongoose;

if (!cached) {
  // Initialize the cache if it's not already set in the global object
  cached = global.mongoose = { conn: null, promise: null };
}


// Function to connect to the database
export const connectToDatabase = async () => {
  // If there is already a connection, return it
  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }


  // If there is no existing promise, create a new one to connect to the database
  if (!cached.promise) {
    const opts = {
      dbName: 'Connect_Waiting_List',
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Adjust this based on your needs
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      console.log('Db connected')
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
      cached.promise = null
      throw e
  }

  return cached.conn
};

