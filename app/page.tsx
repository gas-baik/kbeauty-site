export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">K-Beauty Seoul</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/courses" className="hover:text-pink-500">Courses</a>
            <a href="/shops" className="hover:text-pink-500">Shops</a>
            <a href="/diagnosis" className="hover:text-pink-500">Skin Diagnosis</a>
            <a href="/blog" className="hover:text-pink-500">Blog</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Discover Your Perfect<br />
          <span className="text-pink-500">K-Beauty Experience</span>
        </h2>
        <p className="text-base md:text-xl text-gray-500 mb-10">
          Find the best Korean beauty treatments,<br />
          skincare courses, and beauty shops tailored just for you.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/diagnosis" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">
            Get Skin Diagnosis
          </a>
          <a href="/courses" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50">
            Browse Courses
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">AI Skin Diagnosis</h3>
            <p className="text-gray-500">Get personalized recommendations based on your skin type</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">Curated Courses</h3>
            <p className="text-gray-500">Hand-picked K-Beauty experiences for every skin concern</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Trusted Shops</h3>
            <p className="text-gray-500">Verified beauty shops and clinics across Korea</p>
          </div>
        </div>
      </section>
    </main>
  )
}