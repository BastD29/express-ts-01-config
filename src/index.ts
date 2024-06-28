import config from "./config";
import express, { Request, Response } from "express";
import { connectToDatabase } from "./db";

const { port, nodeEnv } = config;

const app = express();

app.use(express.json());

connectToDatabase().catch((error) => {
  console.error("Database connection failed", error);
  process.exit(1);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} in ${nodeEnv} mode`
  );
});
