function EventCard({ event }) {
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
    </article>
  )
}

export default EventCard
