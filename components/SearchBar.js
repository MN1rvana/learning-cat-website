"use client"

function SearchBar({ onSearch, searchTerm }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value)
  }

  const clearSearch = () => {
    onSearch("")
  }

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="🔍 Search cats by name or tags..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="clear-search-btn" aria-label="Clear search">
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
