import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connectDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('successfully connected to MongoDB!');
    return client.db('employees'); // Return the database instance
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
}
export default connectDB;