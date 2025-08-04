"use client"

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", emoji: "🏠" },
    { id: "add-cat", label: "Add Cat", emoji: "➕" },
    { id: "about", label: "About", emoji: "ℹ️" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
          >
            🐱 
          </button>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
