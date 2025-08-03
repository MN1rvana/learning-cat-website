function CatCard({ cat }) {
  const getAgeGroup = (age) => {
    if (age <= 2) return "Young"
    if (age <= 5) return "Adult"
    return "Senior"
  }

  const getPersonalityEmoji = (personality) => {
    const emojiMap = {
      playful: "🎾",
      calm: "😌",
      curious: "🤔",
      lazy: "😴",
    }
    return emojiMap[personality] || "😸"
  }

  const getColorEmoji = (color) => {
    const colorMap = {
      orange: "🧡",
      black: "🖤",
      white: "🤍",
      gray: "🩶",
    }
    return colorMap[color] || "💙"
  }

  return (
    <div className="cat-card">
      <div className="cat-image-container">
        <img
          src={cat.photoUrl || "/placeholder.svg"}
          alt={`${cat.name} the cat`}
          className="cat-image"
          loading="lazy"
        />
      </div>

      <div className="cat-info">
        <h3 className="cat-name">{cat.name}</h3>

        <div className="cat-details">
          <div className="detail-item">
            <span className="detail-icon">🎂</span>
            <span>
              {cat.age} years old ({getAgeGroup(cat.age)})
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-icon">{getColorEmoji(cat.color)}</span>
            <span className="capitalize">{cat.color}</span>
          </div>

          <div className="detail-item">
            <span className="detail-icon">{getPersonalityEmoji(cat.personality)}</span>
            <span className="capitalize">{cat.personality}</span>
          </div>
        </div>

        {cat.tags && cat.tags.length > 0 && (
          <div className="cat-tags">
            {cat.tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CatCard
