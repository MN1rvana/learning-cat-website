"use client"

import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import FilterButtons from "./FilterButtons"
import CatCard from "./CatCard"

interface Cat {
  id: number
  name: string
  age: number
  color: string
  personality: string
  photoUrl: string
  tags: string[]
}

interface HomepageProps {
  cats: Cat[]
}

export default function Homepage({ cats }: HomepageProps) {
  const [allCats, setAllCats] = useState<Cat[]>(cats);
  const [filteredCats, setFilteredCats] = useState(cats)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    color: "all",
    personality: "all",
    age: "all",
  })

 useEffect(() => {
  let filtered = allCats;

  if (searchTerm) {
    filtered = filtered.filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }

  if (activeFilters.color !== "all") {
    filtered = filtered.filter((cat) => cat.color === activeFilters.color);
  }
  if (activeFilters.personality !== "all") {
    filtered = filtered.filter((cat) => cat.personality === activeFilters.personality);
  }
  if (activeFilters.age !== "all") {
    if (activeFilters.age === "young") {
      filtered = filtered.filter((cat) => cat.age <= 2);
    } else if (activeFilters.age === "adult") {
      filtered = filtered.filter((cat) => cat.age > 2 && cat.age <= 5);
    } else if (activeFilters.age === "senior") {
      filtered = filtered.filter((cat) => cat.age > 5);
    }
  }

  setFilteredCats(filtered);
}, [allCats, searchTerm, activeFilters]);


  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setActiveFilters({
      color: "all",
      personality: "all",
      age: "all",
    })
  }
  const handleRemoveCat = (id: number) => {
  setAllCats((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
          🐱 Cat Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Show your best feline friends to the world now!</p>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
        <FilterButtons
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearAllFilters}
        />
      </div>

      {/* Results Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Cats ({filteredCats.length})</h2>
          {(searchTerm || Object.values(activeFilters).some((filter) => filter !== "all")) && (
            <button
              onClick={clearAllFilters}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {filteredCats.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <p className="text-2xl text-gray-500 mb-4">😿 No cats found matching your criteria</p>
            <button
              onClick={clearAllFilters}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Show All Cats
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCats.map((cat) => (
              <CatCard key={cat.id} cat={cat} onRemove={() => handleRemoveCat(cat.id)}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
