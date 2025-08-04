"use client"

interface FilterButtonsProps {
  activeFilters: {
    color: string
    personality: string
    age: string
  }
  onFilterChange: (filterType: string, value: string) => void
  onClearFilters: () => void
}

export default function FilterButtons({ activeFilters, onFilterChange, onClearFilters }: FilterButtonsProps) {
  const colorOptions = [
    { value: "all", label: "Colors" },
    { value: "orange", label: "🧡 Orange" },
    { value: "black", label: "🖤 Black" },
    { value: "white", label: "🤍 White" },
    { value: "gray", label: "🩶 Gray" },
    { value: "brown", label: "🤎 Brown" },
  ]

  const personalityOptions = [
    { value: "all", label: "Personalities" },
    { value: "playful", label: "🎾 Playful" },
    { value: "calm", label: "😌 Calm" },
    { value: "curious", label: "🤔 Curious" },
    { value: "lazy", label: "😴 Lazy" },
  ]

  const ageOptions = [
    { value: "all", label: "Ages" },
    { value: "young", label: "🐱 Young (0-2)" },
    { value: "adult", label: "🐈 Adult (3-5)" },
    { value: "senior", label: "🐈‍⬛ Senior (6+)" },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-start items-center">
      <div className="flex items-center space-x-2">
        <label className="font-medium text-gray-700">Color:</label>
        <select
          value={activeFilters.color}
          onChange={(e) => onFilterChange("color", e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label className="font-medium text-gray-700">Personality:</label>
        <select
          value={activeFilters.personality}
          onChange={(e) => onFilterChange("personality", e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
        >
          {personalityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label className="font-medium text-gray-700">Age:</label>
        <select
          value={activeFilters.age}
          onChange={(e) => onFilterChange("age", e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
        >
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {Object.values(activeFilters).some((filter) => filter !== "all") && (
        <button
          onClick={onClearFilters}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}
