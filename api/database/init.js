import pool from "./connection.js";

async function db() {
  try {
    const databaseName = await pool.query("SELECT current_database()");
    const now = await pool.query("SELECT NOW()");
    const timeNow = now.rows[0].now;
    const dbName = databaseName.rows[0].current_database;
    console.log(`Connected to database at ${dbName} at ${timeNow}`);
  } catch (error) {
    console.log("Fail to connect to database");
  }
}

export default db;
