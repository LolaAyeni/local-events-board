import { useState } from 'react'
import './App.css'
import CategoryFilter from './components/CategoryFilter.jsx'
import EventList from './components/EventList.jsx'
import events from './data/events.js'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All events')
  const categories = [...new Set(events.map((event) => event.category))]
  const visibleEvents =
    selectedCategory === 'All events'
      ? events
      : events.filter((event) => event.category === selectedCategory)

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
          onCategoryChange={setSelectedCategory}
        />
        {visibleEvents.length > 0 ? (
          <EventList events={visibleEvents} />
        ) : (
          <p className="empty-state">No events match this category yet.</p>
        )}
      </section>
    </main>
  )
}

export default App
