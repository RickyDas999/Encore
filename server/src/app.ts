import cors from "cors";
import express from "express";
import pool from "./db/pool.js";


const app = express();
app.use(cors());
app.use(express.json());


app.get("/events", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM events");
  res.json(rows);
});

export default app;

