export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Hydration Boost Course",
      skin_type: "Dry",
      duration_days: 3,
      price: 150000,
      description: "Intensive hydration treatment for dry skin. Includes facial, sheet mask, and moisturizing therapy."
    },
    {
      id: 2,
      title: "Oil Control Course",
      skin_type: "Oily",
      duration_days: 2,
      price: 120000,
      description: "Deep cleansing and pore care for oily skin. Includes exfoliation, clay mask, and sebum control treatment."
    },
    {
      id: 3,
      title: "Balancing Course",
      skin_type: "Combination",
      duration_days: 3,
      price: 130000,
      description: "Balancing treatment for combination skin. Customized care for both dry and oily areas."
    },
    {
      id: 4,
      title: "Brightening Course",
      skin_type: "All",
      duration_days: 4,
      price: 200000,
      description: "Achieve glass skin with our brightening course. Includes vitamin C treatment and LED therapy."
    }
  ]

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-pink-500">K-Beauty Korea</a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">K-Beauty Courses</h2>
        <p className="text-gray-500 mb-10">Find the perfect beauty course for your skin type</p>

        <div className="grid grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
              <span className="bg-pink-100 text-pink-500 text-sm px-3 py-1 rounded-full">
                {course.skin_type} Skin
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">{course.duration_days} days</div>
                <div className="text-lg font-bold text-pink-500">
                  ₩{course.price.toLocaleString()}
                </div>
              </div>
              <a href="/booking" className="mt-4 block text-center bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}