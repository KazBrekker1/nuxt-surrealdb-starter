import { Surreal } from "surrealdb.js";

const db = new Surreal();

const connectDB = async () => {
  const config = {
    url: import.meta.env.VITE_SURREALDB_URL!,
    namespace: import.meta.env.VITE_SURREALDB_NS!,
    database: import.meta.env.VITE_SURREALDB_DB!,
  };

  await db.connect(`${config.url}/rpc`, {
    namespace: config.namespace,
    database: config.database,
  });
  await db.wait();
  console.log("Connected to database");
};

const disconnectDB = async () => {
  await db.close();
  console.log("Disconnected from database");
};

export { db, disconnectDB, connectDB };