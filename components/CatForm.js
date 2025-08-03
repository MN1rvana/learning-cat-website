"use client"

import { useState } from "react"

function CatForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    color: "",
    personality: "",
    photoUrl: "",
    tags: "",
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
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
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (formData.age < 0 || formData.age > 30) {
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
    } else if (!isValidUrl(formData.photoUrl)) {
      newErrors.photoUrl = "Please enter a valid URL"
    }

    return newErrors
  }

  const isValidUrl = (string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleSubmit = (e) => {
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
      age: Number.parseInt(formData.age),
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
    <div className="cat-form-container">
      <form onSubmit={handleSubmit} className="cat-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Cat Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="e.g., Whiskers"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age (years) *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`form-input ${errors.age ? "error" : ""}`}
            placeholder="e.g., 3"
            min="0"
            max="30"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="color" className="form-label">
            Color *
          </label>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className={`form-select ${errors.color ? "error" : ""}`}
          >
            <option value="">Select a color</option>
            <option value="orange">🧡 Orange</option>
            <option value="black">🖤 Black</option>
            <option value="white">🤍 White</option>
            <option value="gray">🩶 Gray</option>
          </select>
          {errors.color && <span className="error-message">{errors.color}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="personality" className="form-label">
            Personality *
          </label>
          <select
            id="personality"
            name="personality"
            value={formData.personality}
            onChange={handleInputChange}
            className={`form-select ${errors.personality ? "error" : ""}`}
          >
            <option value="">Select personality</option>
            <option value="playful">🎾 Playful</option>
            <option value="calm">😌 Calm</option>
            <option value="curious">🤔 Curious</option>
            <option value="lazy">😴 Lazy</option>
          </select>
          {errors.personality && <span className="error-message">{errors.personality}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="photoUrl" className="form-label">
            Photo URL *
          </label>
          <input
            type="url"
            id="photoUrl"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleInputChange}
            className={`form-input ${errors.photoUrl ? "error" : ""}`}
            placeholder="https://example.com/cat-photo.jpg"
          />
          {errors.photoUrl && <span className="error-message">{errors.photoUrl}</span>}
          <small className="form-help">
            Tip: You can use placeholder URLs like "/placeholder.svg?height=200&width=200"
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="tags" className="form-label">
            Tags (optional)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="form-input"
            placeholder="e.g., fluffy, energetic, indoor (separate with commas)"
          />
          <small className="form-help">Add tags separated by commas to help others find your cat</small>
        </div>

        <button type="submit" className="btn-primary form-submit">
          🐱 Add My Cat
        </button>
      </form>
    </div>
  )
}

export default CatForm
