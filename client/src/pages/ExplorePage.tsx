import {useState, useEffect} from 'react';

type EventItem = {
  id: number;
  title: string;
  category: string;
  venue: string;
  city: string;
  event_date: string;
  price: string;
}

function ExplorePage() {

  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <main>
      <section>
        <p>Encore</p>
        <h1>Discover events worth the trip.</h1>
        <p>{events.length} events loaded... </p>

        {events.map(event => (
          <div key = {event.id}> 
            {event.title} - {event.city} - {new Date(event.event_date).toLocaleDateString()} - ${event.price}
          </div>
        )
        )}

      </section>
    </main>
  );
}

export default ExplorePage;

