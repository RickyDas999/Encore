INSERT INTO users (name) VALUES
  ('John Doe'),
  ('Andrew Garfield'),
  ('JJ Redick');

INSERT INTO events (title, category, venue, city, event_date, price) VALUES
  ('Lucki', 'Concert', 'Fiserv Forum', 'Milwaukee, WI', '2026-06-23', 200),
  ('Smino', 'Concert', 'The Salt Shed', 'Chicago, IL', '2026-07-12', 85),
  ('Bulls vs Celtics', 'Sports', 'United Center', 'Chicago, IL', '2026-11-03', 140);

INSERT INTO trips (user_id, title) VALUES
  (3, 'Chicago'),
  (1, 'Milwaukee Weekend');

INSERT INTO favorites (event_id, user_id) VALUES
  (1, 2),
  (2, 3),
  (3, 1);

INSERT INTO trip_events (trip_id, event_id) VALUES
  (1, 2),
  (1, 3),
  (2, 1);
