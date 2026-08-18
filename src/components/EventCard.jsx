function EventCard({ event, isEditable, onEditEvent, onViewDetails }) {
  return (
    <article className="event-card">
      <span className="event-card__category">{event.category}</span>
      <h3>{event.title}</h3>

      <dl className="event-card__details">
        <div>
          <dt>Date</dt>
          <dd>{event.date}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>

      <p>{event.description}</p>
      <div className="event-card__actions">
        <button
          className="event-card__button"
          type="button"
          aria-label={`View details for ${event.title}`}
          onClick={(clickEvent) => onViewDetails(event, clickEvent.currentTarget)}
        >
          View details
        </button>
        {isEditable && (
          <button
            className="event-card__button"
            type="button"
            aria-label={`Edit ${event.title}`}
            onClick={() => onEditEvent(event)}
          >
            Edit
          </button>
        )}
      </div>
    </article>
  )
}

export default EventCard
