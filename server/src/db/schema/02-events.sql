CREATE TABLE events (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  category text NOT NULL,
  venue text NOT NULL,
  city text NOT NULL,
  event_date date NOT NULL,
  price numeric NOT NULL
);
