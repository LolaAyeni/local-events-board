import { useEffect, useRef } from 'react'

function EventDetails({ event, onClose }) {
  const headingRef = useRef(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [event.id])

  return (
    <section className="event-details" aria-labelledby="event-details-heading">
      <div className="event-details__header">
        <div>
          <span className="event-card__category">{event.category}</span>
          <h2 id="event-details-heading" ref={headingRef} tabIndex="-1">
            {event.title}
          </h2>
        </div>
        <button
          className="event-details__close"
          type="button"
          aria-label={`Close details for ${event.title}`}
          onClick={onClose}
        >
          Close details
        </button>
      </div>

      <dl className="event-details__meta">
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
    </section>
  )
}

export default EventDetails
