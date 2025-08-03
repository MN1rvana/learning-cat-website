"use client"

import type React from "react"

import { useState } from "react"

interface CatFormData {
  name: string
  age: string
  color: string
  personality: string
  photoUrl: string
  tags: string
}

interface CatFormProps {
  onSubmit: (cat: {
    name: string
    age: number
    color: string
    personality: string
    photoUrl: string
    tags: string[]
  }) => void
}

export default function CatForm({ onSubmit }: CatFormProps) {
  const [formData, setFormData] = useState<CatFormData>({
    name: "",
    age: "",
    color: "",
    personality: "",
    photoUrl: "",
    tags: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (Number(formData.age) < 0 || Number(formData.age) > 30) {
      newErrors.age = "Age must be between 0 and 30"
    }

    if (!formData.color) {
      newErrors.color = "Color is required"
    }

    if (!formData.personality) {
      newErrors.personality = "Personality is required"
    }

    if (!formData.photoUrl.trim()) {
      newErrors.photoUrl = "Photo URL is required"
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Process tags
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)

    const catData = {
      ...formData,
      age: Number(formData.age),
      tags: tagsArray,
    }

    onSubmit(catData)

    // Reset form
    setFormData({
      name: "",
      age: "",
      color: "",
      personality: "",
      photoUrl: "",
      tags: "",
    })
    setErrors({})
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Cat Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
            }`}
            placeholder="e.g., Whiskers"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
            Age (years) *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.age ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
            }`}
            placeholder="e.g., 3"
            min="0"
            max="30"
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
            Color *
          </label>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.color ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
            }`}
          >
            <option value="">Select a color</option>
            <option value="orange">🧡 Orange</option>
            <option value="black">🖤 Black</option>
            <option value="white">🤍 White</option>
            <option value="gray">🩶 Gray</option>
          </select>
          {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color}</p>}
        </div>

        <div>
          <label htmlFor="personality" className="block text-sm font-medium text-gray-700 mb-2">
            Personality *
          </label>
          <select
            id="personality"
            name="personality"
            value={formData.personality}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.personality ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
            }`}
          >
            <option value="">Select personality</option>
            <option value="playful">🎾 Playful</option>
            <option value="calm">😌 Calm</option>
            <option value="curious">🤔 Curious</option>
            <option value="lazy">😴 Lazy</option>
          </select>
          {errors.personality && <p className="text-red-500 text-sm mt-1">{errors.personality}</p>}
        </div>

        <div>
          <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Photo URL *
          </label>
          <input
            type="url"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.photoUrl ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-orange-500"
            }`}
            placeholder="https://example.com/cat-photo.jpg"
          />
          {errors.photoUrl && <p className="text-red-500 text-sm mt-1">{errors.photoUrl}</p>}
          <p className="text-gray-500 text-sm mt-1">
            Tip: You can use placeholder URLs like "/placeholder.svg?height=200&width=200&text=YourCatName"
          </p>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Tags (optional)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
            placeholder="e.g., fluffy, energetic, indoor (separate with commas)"
          />
          <p className="text-gray-500 text-sm mt-1">Add tags separated by commas to help others find your cat</p>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          🐱 Add My Cat
        </button>
      </form>
    </div>
  )
}
