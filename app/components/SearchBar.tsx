"use client"

import type React from "react"

interface SearchBarProps {
  onSearch: (term: string) => void
  searchTerm: string
}

export default function SearchBar({ onSearch, searchTerm }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  const clearSearch = () => {
    onSearch("")
  }

  return (
    <div className="mb-6">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search cats by name or tags..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none transition-colors"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
