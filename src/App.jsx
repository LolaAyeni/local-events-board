import './App.css'
import EventList from './components/EventList.jsx'
import events from './data/events.js'

function App() {
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
          <p>{events.length} events to explore</p>
        </div>
        <EventList events={events} />
      </section>
    </main>
  )
}

export default App
