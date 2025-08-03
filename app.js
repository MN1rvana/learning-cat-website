"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AddCatPage from "./pages/AddCatPage"
import AboutPage from "./pages/AboutPage"
import "./App.css"

// Dummy cat data
export const initialCats = [
  {
    id: 1,
    name: "Whiskers",
    age: 3,
    color: "orange",
    personality: "playful",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Whiskers",
    tags: ["fluffy", "energetic"],
  },
  {
    id: 2,
    name: "Luna",
    age: 2,
    color: "black",
    personality: "calm",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Luna",
    tags: ["sleepy", "gentle"],
  },
  {
    id: 3,
    name: "Mittens",
    age: 5,
    color: "white",
    personality: "curious",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Mittens",
    tags: ["adventurous", "smart"],
  },
  {
    id: 4,
    name: "Shadow",
    age: 1,
    color: "gray",
    personality: "playful",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Shadow",
    tags: ["kitten", "mischievous"],
  },
  {
    id: 5,
    name: "Ginger",
    age: 4,
    color: "orange",
    personality: "lazy",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Ginger",
    tags: ["sleepy", "cuddly"],
  },
  {
    id: 6,
    name: "Smokey",
    age: 6,
    color: "gray",
    personality: "calm",
    photoUrl: "/placeholder.svg?height=200&width=200&text=Smokey",
    tags: ["wise", "gentle"],
  },
]

function App() {
  const [cats, setCats] = useState(initialCats)

  const addCat = (newCat) => {
    const catWithId = {
      ...newCat,
      id: Date.now(),
    }
    setCats((prevCats) => [...prevCats, catWithId])
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              🐱 Cat Collection
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/add-cat" className="nav-link">
                Add Cat
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage cats={cats} />} />
            <Route path="/add-cat" element={<AddCatPage onAddCat={addCat} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>🐾 Made with love for cat enthusiasts 🐾</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
