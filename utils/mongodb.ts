import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI is missing');

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
  global._mongoClientPromise.then(async (connectedClient)=>{
        const db = connectedClient.db('ecommerce');
        try{
            await db.collection('users').createIndex({username:1},{unique:true})
            await db.collection('users').createIndex({email_address:1},{unique:true})
            console.log('Index created')
        }catch(e){
          const error = e as Error
          console.error(error.message)
        }
  })
}
clientPromise = global._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  return client.db('ecommerce');
}
