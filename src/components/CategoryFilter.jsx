function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const options = ['All events', ...categories]

  return (
    <nav className="category-filter" aria-label="Filter events by category">
      {options.map((category) => {
        const isSelected = category === selectedCategory

        return (
          <button
            className={isSelected ? 'category-filter__button is-selected' : 'category-filter__button'}
            key={category}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onCategoryChange(category)}
          >
            {category}
            {isSelected && <span className="visually-hidden"> (selected)</span>}
          </button>
        )
      })}
    </nav>
  )
}

export default CategoryFilter
