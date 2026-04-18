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

app.get("/users/:id/favorites", async(req, res) => {
  const { rows } = await pool.query("SELECT events.* FROM favorites JOIN events ON favorites.event_id = events.id WHERE favorites.user_id = $1", [req.params.id]);
  res.json(rows);
});

app.get("/users/:id/trips", async(req, res) => {
  const { rows } = await pool.query("SELECT trips.* FROM trips WHERE trips.user_id = $1", [req.params.id]);
  res.json(rows);
})

app.get("/trips/:id/", async(req, res) => {
  const { rows } = await pool.query("SELECT trips.title AS trip_title, events.* FROM trip_events JOIN events ON trip_events.event_id = events.id JOIN trips ON trip_events.trip_id=trips.id WHERE trip_events.trip_id = $1", [req.params.id])
  res.json(rows);
})

export default app;
