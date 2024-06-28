declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | "local" | "staging";
    PORT: string;
    SESSION_SECRET_KEY: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    JWT_KEY: string;
  }
}
