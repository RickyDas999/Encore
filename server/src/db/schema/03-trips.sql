CREATE TABLE trips (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id integer NOT NULL,
  title text NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
