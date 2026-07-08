export default function Shops() {
  const shops = [
    {
      id: 1,
      name: "Glow Studio Myeongdong",
      location: "Myeongdong, Seoul",
      specialty: ["Hydration Facial", "Sheet Mask Therapy", "LED Treatment"],
      languages: ["English", "Japanese", "Chinese"],
      price_range: "₩50,000 ~ ₩150,000",
      description: "Premium skincare studio in the heart of Myeongdong. Specializing in hydration and brightening treatments.",
      emoji: "💆"
    },
    {
      id: 2,
      name: "K-Glow Clinic Gangnam",
      location: "Gangnam, Seoul",
      specialty: ["Pore Care", "Oil Control", "Acne Treatment"],
      languages: ["English", "Chinese"],
      price_range: "₩80,000 ~ ₩200,000",
      description: "Professional skin clinic in Gangnam offering advanced oil control and pore minimizing treatments.",
      emoji: "✨"
    },
    {
      id: 3,
      name: "Pure Beauty Hongdae",
      location: "Hongdae, Seoul",
      specialty: ["Anti-aging", "Brightening", "Vitamin C Therapy"],
      languages: ["English", "Thai", "Vietnamese"],
      price_range: "₩60,000 ~ ₩180,000",
      description: "Trendy beauty shop in Hongdae popular with international visitors. Specializing in brightening and anti-aging.",
      emoji: "🌸"
    },
    {
      id: 4,
      name: "Seoul Skin Lab Insadong",
      location: "Insadong, Seoul",
      specialty: ["Traditional Korean Beauty", "Herbal Treatment", "Sensitive Skin Care"],
      languages: ["English", "Japanese"],
      price_range: "₩70,000 ~ ₩160,000",
      description: "Unique blend of traditional Korean beauty secrets and modern skincare techniques.",
      emoji: "🏮"
    }
  ]

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-pink-500">K-Beauty Seoul</a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partner Shops</h2>
        <p className="text-gray-500 mb-10">Verified beauty shops and clinics across Seoul</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{shop.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
                  <p className="text-gray-400 text-sm">📍 {shop.location}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">{shop.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {shop.specialty.map((s, i) => (
                    <span key={i} className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Languages:</p>
                <div className="flex flex-wrap gap-2">
                  {shop.languages.map((l, i) => (
                    <span key={i} className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">{l}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-pink-500 font-semibold text-sm">{shop.price_range}</span>
                <a href="/booking" className="bg-pink-500 text-white px-5 py-2 rounded-xl text-sm hover:bg-pink-600">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}