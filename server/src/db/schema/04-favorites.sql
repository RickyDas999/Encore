CREATE TABLE favorites (
  event_id integer NOT NULL,
  user_id integer NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (event_id, user_id)
);
