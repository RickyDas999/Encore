CREATE TABLE trip_events (
  trip_id integer NOT NULL,
  event_id integer NOT NULL,
  FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  PRIMARY KEY (trip_id, event_id)
);
