"use client"

function FilterButtons({ activeFilters, onFilterChange, onClearFilters }) {
  const colorOptions = [
    { value: "all", label: "All Colors" },
    { value: "orange", label: "🧡 Orange" },
    { value: "black", label: "🖤 Black" },
    { value: "white", label: "🤍 White" },
    { value: "gray", label: "🩶 Gray" },
  ]

  const personalityOptions = [
    { value: "all", label: "All Personalities" },
    { value: "playful", label: "🎾 Playful" },
    { value: "calm", label: "😌 Calm" },
    { value: "curious", label: "🤔 Curious" },
    { value: "lazy", label: "😴 Lazy" },
  ]

  const ageOptions = [
    { value: "all", label: "All Ages" },
    { value: "young", label: "🐱 Young (0-2)" },
    { value: "adult", label: "🐈 Adult (3-5)" },
    { value: "senior", label: "🐈‍⬛ Senior (6+)" },
  ]

  return (
    <div className="filter-buttons">
      <div className="filter-group">
        <label className="filter-label">Color:</label>
        <select
          value={activeFilters.color}
          onChange={(e) => onFilterChange("color", e.target.value)}
          className="filter-select"
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Personality:</label>
        <select
          value={activeFilters.personality}
          onChange={(e) => onFilterChange("personality", e.target.value)}
          className="filter-select"
        >
          {personalityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Age:</label>
        <select
          value={activeFilters.age}
          onChange={(e) => onFilterChange("age", e.target.value)}
          className="filter-select"
        >
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {Object.values(activeFilters).some((filter) => filter !== "all") && (
        <button onClick={onClearFilters} className="clear-filters-btn">
          Clear Filters
        </button>
      )}
    </div>
  )
}

export default FilterButtons
