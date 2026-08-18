import { useState } from 'react'

const initialValues = {
  title: '',
  category: '',
  date: '',
  time: '',
  location: '',
  description: '',
}

function EventForm({ categories, onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSuccessMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim() ? '' : 'This field is required.']),
    )

    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    onSubmit({ ...values })
    setValues(initialValues)
    setSuccessMessage('Event submitted successfully.')
  }

  const fields = [
    ['title', 'Title', 'text'],
    ['date', 'Date', 'text'],
    ['time', 'Time', 'time'],
    ['location', 'Location', 'text'],
  ]

  return (
    <section className="event-form-section" aria-labelledby="submit-event-heading">
      <div className="section-heading">
        <h2 id="submit-event-heading">Submit an event</h2>
        <p>Share something happening in your community.</p>
      </div>
      <form className="event-form" onSubmit={handleSubmit} noValidate>
        {fields.map(([name, label, type]) => (
          <div className="event-form__field" key={name}>
            <label htmlFor={`event-${name}`}>{label}</label>
            <input id={`event-${name}`} name={name} type={type} value={values[name]} onChange={handleChange} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `event-${name}-error` : undefined} />
            {errors[name] && <p className="event-form__error" id={`event-${name}-error`}>{errors[name]}</p>}
          </div>
        ))}
        <div className="event-form__field">
          <label htmlFor="event-category">Category</label>
          <select id="event-category" name="category" value={values.category} onChange={handleChange} aria-invalid={Boolean(errors.category)}>
            <option value="">Select a category</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
          {errors.category && <p className="event-form__error">{errors.category}</p>}
        </div>
        <div className="event-form__field event-form__field--wide">
          <label htmlFor="event-description">Description</label>
          <textarea id="event-description" name="description" rows="4" value={values.description} onChange={handleChange} aria-invalid={Boolean(errors.description)} />
          {errors.description && <p className="event-form__error">{errors.description}</p>}
        </div>
        <button className="event-form__submit" type="submit">Submit event</button>
        {successMessage && <p className="event-form__success" role="status">{successMessage}</p>}
      </form>
    </section>
  )
}

export default EventForm
