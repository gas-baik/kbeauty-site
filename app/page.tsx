export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">K-Beauty Korea</h1>
          <nav className="flex gap-6 text-sm">
            <a href="/courses" className="hover:text-pink-500">Courses</a>
            <a href="/shops" className="hover:text-pink-500">Shops</a>
            <a href="/diagnosis" className="hover:text-pink-500">Skin Diagnosis</a>
            <a href="/blog" className="hover:text-pink-500">Blog</a>
          </nav>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Discover Your Perfect K-Beauty Experience
        </h2>
        <p className="text-xl text-gray-500 mb-10">
          Find the best Korean beauty treatments tailored just for you.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/diagnosis" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">
            Get Skin Diagnosis
          </a>
          <a href="/courses" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50">
            Browse Courses
          </a>
        </div>
      </section>
    </main>
  )
}