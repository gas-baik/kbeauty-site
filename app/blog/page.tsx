export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Top 5 K-Beauty Treatments You Must Try in Seoul",
      description: "From hydrating facials to glass skin routines, discover the most popular Korean beauty treatments that international visitors love.",
      skin_type_tag: "All Skin Types",
      date: "2024-12-01",
      emoji: "✨",
      read_time: "5 min read"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Korean Skincare for Dry Skin",
      description: "Struggling with dry skin? Learn how Korean beauty experts treat dehydrated skin with their unique layering technique.",
      skin_type_tag: "Dry Skin",
      date: "2024-12-05",
      emoji: "💧",
      read_time: "7 min read"
    },
    {
      id: 3,
      title: "How to Get Glass Skin: A Step-by-Step Korean Beauty Routine",
      description: "The glass skin trend took the world by storm. Here's how Seoul's top beauty experts achieve that coveted luminous look.",
      skin_type_tag: "All Skin Types",
      date: "2024-12-10",
      emoji: "🪞",
      read_time: "6 min read"
    },
    {
      id: 4,
      title: "Best Beauty Districts in Seoul for International Tourists",
      description: "From Myeongdong to Gangnam, explore Seoul's top beauty destinations and what makes each area unique.",
      skin_type_tag: "Travel Guide",
      date: "2024-12-15",
      emoji: "📍",
      read_time: "8 min read"
    },
    {
      id: 5,
      title: "K-Beauty Ingredients You Need to Know",
      description: "Snail mucin, centella asiatica, and fermented ingredients — discover the powerful Korean skincare ingredients taking the world by storm.",
      skin_type_tag: "All Skin Types",
      date: "2024-12-20",
      emoji: "🌿",
      read_time: "6 min read"
    },
    {
      id: 6,
      title: "Oily Skin? Here's What Korean Beauty Experts Recommend",
      description: "Korean skincare has revolutionized the way we treat oily skin. Discover the best oil-control treatments available in Seoul.",
      skin_type_tag: "Oily Skin",
      date: "2024-12-25",
      emoji: "🍃",
      read_time: "5 min read"
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">K-Beauty Blog</h2>
        <p className="text-gray-500 mb-10">Tips, guides and insights about Korean beauty</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{post.emoji}</div>
              <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">
                {post.skin_type_tag}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-3 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">{post.read_time}</span>
                <span className="text-gray-400 text-xs">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}