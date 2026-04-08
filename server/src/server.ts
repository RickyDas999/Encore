import "dotenv/config";
import app from "./app.js";
import pool from "./db/pool.js";

const port = Number(process.env.PORT ?? 3001);

async function startServer() {
  await pool.query("SELECT 1");
  console.log("Database connected");

  app.listen(port, () => {
    console.log(`Encore server listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
