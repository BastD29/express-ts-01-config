import { MongoClient, ServerApiVersion } from "mongodb";
import config from "./config";
const { mongoUri } = config;

const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
}

export { client, connectToDatabase };
