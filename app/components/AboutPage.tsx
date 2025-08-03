export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
          🐾 About Cat Collection
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Cat Community!</h2>
            <p className="text-gray-600 leading-relaxed">
              Cat Collection is a fun and interactive way to showcase and manage information about your beloved feline
              companions. Whether you're a cat owner, cat lover, or just enjoy cute cat photos, this is the perfect
              place for you!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 What You Can Do</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>📋</span>
                <span>Browse through our collection of adorable cats</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🔍</span>
                <span>Search for cats by name or tags</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🎨</span>
                <span>Filter cats by color, personality, and age</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>➕</span>
                <span>Add your own cats to the collection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>Enjoy a responsive design on any device</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ Built With React</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This website is built using React with functional components and hooks, making it a great example for
              learning modern React development patterns. It demonstrates:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
              <li>• React Hooks (useState, useEffect)</li>
              <li>• Component composition</li>
              <li>• Form handling and validation</li>
              <li>• Search and filtering functionality</li>
              <li>• Modal components</li>
              <li>• Responsive design with Tailwind CSS</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">😸 Fun Cat Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-800 mb-2">🧠 Smart Cookies</h3>
                <p className="text-gray-600 text-sm">
                  Cats have excellent memories and can remember things for up to 10 years!
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500">
                <h3 className="font-bold text-gray-800 mb-2">💤 Sleep Champions</h3>
                <p className="text-gray-600 text-sm">Cats sleep 12-16 hours a day - that's 70% of their lives!</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-800 mb-2">🎵 Purr Power</h3>
                <p className="text-gray-600 text-sm">
                  A cat's purr vibrates at a frequency that can help heal bones and reduce pain.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have suggestions or want to share your cat stories? We'd love to hear from you!
            </p>
            <div className="space-y-2 text-gray-600">
              <p>📧 Email: hello@catcollection.com</p>
              <p>🐦 Twitter: @CatCollection</p>
              <p>📸 Instagram: @CatCollectionApp</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
