import EventCard from './EventCard.jsx'

function EventList({ events, onViewDetails }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onViewDetails={onViewDetails} />
      ))}
    </div>
  )
}

export default EventList
