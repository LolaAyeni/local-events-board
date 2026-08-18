import { useRef, useState } from 'react'
import './App.css'
import CategoryFilter from './components/CategoryFilter.jsx'
import EventDetails from './components/EventDetails.jsx'
import EventList from './components/EventList.jsx'
import EventForm from './components/EventForm.jsx'
import events from './data/events.js'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All events')
  const [localEvents, setLocalEvents] = useState(events)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const detailsTriggerRef = useRef(null)
  const categories = [...new Set(localEvents.map((event) => event.category))]
  const visibleEvents =
    selectedCategory === 'All events'
      ? localEvents
      : localEvents.filter((event) => event.category === selectedCategory)

  function handleSubmitEvent(event) {
    setLocalEvents((current) => [...current, { ...event, id: `${Date.now()}-${Math.random().toString(36).slice(2)}` }])
  }

  function handleViewDetails(event, triggerElement) {
    detailsTriggerRef.current = triggerElement
    setSelectedEvent(event)
  }

  function handleCloseDetails() {
    const triggerElement = detailsTriggerRef.current

    setSelectedEvent(null)
    detailsTriggerRef.current = null
    requestAnimationFrame(() => triggerElement?.focus())
  }

  function handleCategoryChange(category) {
    if (
      selectedEvent &&
      category !== 'All events' &&
      selectedEvent.category !== category
    ) {
      setSelectedEvent(null)
      detailsTriggerRef.current = null
    }

    setSelectedCategory(category)
  }

  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">What is happening nearby</p>
        <h1>Local Events Board</h1>
        <p>Discover events and activities happening in your community.</p>
      </header>

      <section className="events" aria-labelledby="events-heading">
        <div className="section-heading">
          <h2 id="events-heading">Upcoming events</h2>
          <p>
            {visibleEvents.length} {visibleEvents.length === 1 ? 'event' : 'events'} to explore
          </p>
        </div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {selectedEvent && (
          <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
        )}
        {visibleEvents.length > 0 ? (
          <EventList events={visibleEvents} onViewDetails={handleViewDetails} />
        ) : (
          <p className="empty-state">No events match this category yet.</p>
        )}
      </section>
      <EventForm categories={categories} onSubmit={handleSubmitEvent} />
    </main>
  )
}

export default App
