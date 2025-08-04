"use client"

import { useState } from "react"
import Homepage from "./components/Homepage"
import AddCatPage from "./components/AddCatPage"
import AboutPage from "./components/AboutPage"
import Navigation from "./components/Navigation"

// Dummy cat data
const initialCats = [
  {
    id: 1,
    name: "Simba",
    age: 3,
    color: "orange",
    personality: "playful",
    photoUrl: "simba.jpg",
    tags: ["fluffy", "energetic"],
  },
  {
    id: 2,
    name: "Olivia",
    age: 3,
    color: "brown",
    personality: "calm",
    photoUrl: "olivka.jpg",
    tags: ["sleepy", "gentle"],
  },
]

export default function CatCollectionApp() {
  const [cats, setCats] = useState(initialCats)
  const [currentPage, setCurrentPage] = useState("home")

  const addCat = (newCat: any) => {
    const catWithId = {
      ...newCat,
      id: Date.now(),
    }
    setCats((prevCats) => [...prevCats, catWithId])
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage cats={cats} />
      case "add-cat":
        return <AddCatPage onAddCat={addCat} />
      case "about":
        return <AboutPage />
      default:
        return <Homepage cats={cats} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 py-8 mb-40">{renderCurrentPage()}</main>

      <footer className="bg-gray-800 text-white text-center py-3 mt-12 w-full fixed bottom-0">
        <p>🐾 Made with love for cat enthusiasts 🐾</p>
      </footer>
    </div>
  )
}
