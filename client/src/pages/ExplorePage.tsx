import {useState, useEffect} from 'react';
import  EventCard from '../components/EventCard'
import type { EventItem } from "../types/EventItem";



function ExplorePage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://localhost:3001/events");
        if (!res.ok) throw new Error(`Error status: ${res.status}`);
        const data = await res.json();
        setEvents(data);
      }
      catch (error) {
        setError(error instanceof Error ? error.message : 'Something went wrong');
      }
      finally {
        setLoading(false)
      }
    }
    fetchEvents();
  }, [])

  return (
    <main>
      <section>
        <h1>Encore</h1>
        <h2>Discover events worth the trip.</h2>

        {isLoading && <p>Loading events... </p>}
        {error && <p>{error}</p>}

        <div className='wrap'>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExplorePage;

