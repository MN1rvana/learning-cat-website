"use client"

import { useState } from "react"
import CatForm from "./CatForm"
import Modal from "./Modal"

interface Cat {
  name: string
  age: number
  color: string
  personality: string
  photoUrl: string
  tags: string[]
}

interface AddCatPageProps {
  onAddCat: (cat: Cat) => void
}

export default function AddCatPage({ onAddCat }: AddCatPageProps) {
  const [showModal, setShowModal] = useState(false)
  const [submittedCat, setSubmittedCat] = useState<Cat | null>(null)

  const handleCatSubmit = (catData: Cat) => {
    onAddCat(catData)
    setSubmittedCat(catData)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSubmittedCat(null)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
          🐱 Add a New Cat
        </h1>
        <p className="text-xl text-gray-600">Tell us about your furry friend!</p>
      </div>

      <CatForm onSubmit={handleCatSubmit} />

      {showModal && (
        <Modal onClose={closeModal}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Cat Added Successfully!</h2>
            <p className="text-lg text-gray-600 mb-6">
              <strong>{submittedCat?.name}</strong> has been added to your collection!
            </p>
            <button
              onClick={closeModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Awesome!
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
