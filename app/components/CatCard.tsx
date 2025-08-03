interface Cat {
  id: number;
  name: string;
  age: number;
  color: string;
  personality: string;
  photoUrl: string;
  tags: string[];
}

interface CatCardProps {
  cat: Cat;
  onRemove: () => void;
}

export default function CatCard({ cat, onRemove}: CatCardProps) {


  const getAgeGroup = (age: number) => {
    if (age <= 2) return "Young";
    if (age <= 5) return "Adult";
    return "Senior";
  };

  const getPersonalityEmoji = (personality: string) => {
    const emojiMap: { [key: string]: string } = {
      playful: "🎾",
      calm: "😌",
      curious: "🤔",
      lazy: "😴",
    };
    return emojiMap[personality] || "😸";
  };

  const getColorEmoji = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: "🧡",
      black: "🖤",
      white: "🤍",
      gray: "🩶",
    };
    return colorMap[color] || "💙";
  };

  

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform"
    >
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 absolute z-1000 right-px"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={onRemove}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      <div className="h-65 overflow-hidden">
        <img
          src={cat.photoUrl || "/placeholder.svg"}
          alt={`${cat.name} the cat`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{cat.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🎂</span>
            <span className="text-gray-600">
              {cat.age} years old ({getAgeGroup(cat.age)})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg">{getColorEmoji(cat.color)}</span>
            <span className="text-gray-600 capitalize">{cat.color}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg">
              {getPersonalityEmoji(cat.personality)}
            </span>
            <span className="text-gray-600 capitalize">{cat.personality}</span>
          </div>
        </div>

        {cat.tags && cat.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {cat.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
