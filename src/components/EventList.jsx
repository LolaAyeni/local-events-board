import EventCard from './EventCard.jsx'

function EventList({ events, onViewDetails, onEditEvent, sampleEventIds }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isEditable={!sampleEventIds.has(String(event.id))}
          onEditEvent={onEditEvent}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  )
}

export default EventList
