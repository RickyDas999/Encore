import type { EventItem } from "../types/EventItem";

function EventCard({ event }: { event: EventItem }) {
    return (
        <div className = "event-card">
            <div className='event-header'>
                <h2 className='event-title'>{event.title}</h2>
                <span className='event-price'>${event.price}</span>
            </div>
            <div className='event-bottom'>
                <p className = "event-city">{event.city}</p>
                <span className='event-date'> {new Date(event.event_date).toLocaleDateString()}</span>
            </div>
        </div>
    );}

export default EventCard;