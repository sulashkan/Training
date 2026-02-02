import mongoose from "mongoose";

// getting mongodb uri from .env.local file
const MONGODB_URI = process.env.MONGODB_URI as string;

// checking if mongodb uri exist or not
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// create an global instance of connection because in nextjs we need to create connection every time when we call an api. The is the default nature of nextjs. Here we are creating global instance so we can reuse it when we need.
declare global {
  // eslint-disable-next-line no-var
  var mongooseConn:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

// storing the mongooseConn details
let cached = global.mongooseConn;

// checking weather cached instance is empty or not? If not then creating a new one for connection
if (!cached) {
  cached = global.mongooseConn = {
    conn: null,
    promise: null,
  };
}

// function to connect the database
export async function connectDB() {
  // checking wether connection exist or not if yes then return it
  if (cached!.conn) {
    return cached!.conn;
  }

  // checking 
  if (!cached!.promise) {
    cached!.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}
