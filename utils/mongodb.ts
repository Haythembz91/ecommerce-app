
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI 

let client: MongoClient | null = null;
let db: Db | null = null;

async function connectDB(): Promise<{ client: MongoClient; db: Db }> {
  if (!client) {
    try {
      client = new MongoClient(uri);
      await client.connect();
      db = client.db('sample_mflix');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  return { client, db };
}

export async function getDb(): Promise<Db> {
  if (!db) {
    await connectDB();
  }
  return db!;
}

export async function closeDB(): Promise<void> {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log('Disconnected from MongoDB');
  }
}