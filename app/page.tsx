'use client'

import { useLang } from './LangContext'
import { translations } from '../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

const reviews = [
  { name: "Sarah M.", country: "🇺🇸 USA", rating: 5, text: "Amazing experience! My skin glowed for weeks after the hydration course." },
  { name: "Yuki T.", country: "🇯🇵 Japan", rating: 5, text: "最高の経験でした！スタッフがとても親切で、肌が見違えるほど綺麗になりました。" },
  { name: "Li Wei", country: "🇨🇳 China", rating: 5, text: "非常棒的体验！皮肤变得非常光滑，强烈推荐给所有人。" },
  { name: "Nipa S.", country: "🇹🇭 Thailand", rating: 5, text: "ประสบการณ์ที่ยอดเยี่ยม! ผิวหน้าดูดีขึ้นมากหลังจากทำคอร์ส" },
]

export default function Home() {
  const { lang, setLang } = useLang()
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-pink-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">{t.brand}</h1>
          <div className="flex items-center gap-2 md:gap-4">
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/courses" className="hover:text-pink-500">{t.courses}</a>
              <a href="/shops" className="hover:text-pink-500">{t.shops}</a>
              <a href="/diagnosis" className="hover:text-pink-500">{t.diagnosis}</a>
              <a href="/blog" className="hover:text-pink-500">{t.blog}</a>
            </nav>
            <div className="flex gap-1">
              {Object.keys(flags).map((l) => (
                <button key={l} onClick={() => setLang(l as any)}
                  className={`text-xs px-2 py-1 rounded-full border transition-all ${lang === l ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-200 hover:border-pink-500'}`}>
                  {flags[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          {t.hero1}<br />
          <span className="text-pink-500">{t.hero2}</span>
        </h2>
        <p className="text-base md:text-xl text-gray-500 mb-10">{t.sub}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/diagnosis" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">{t.btn1}</a>
          <a href="/courses" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50">{t.btn2}</a>
        </div>
      </section>

      {/* 비포/애프터 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Before & After</h3>
          <p className="text-center text-gray-500 mb-10">Real results from our K-Beauty treatments</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { before: "Dry & Dull", after: "Hydrated & Glowing", treatment: "Hydration Boost Course", emoji: "💧" },
              { before: "Oily & Congested", after: "Clear & Balanced", treatment: "Oil Control Course", emoji: "✨" },
              { before: "Uneven Tone", after: "Bright & Radiant", treatment: "Brightening Course", emoji: "🌟" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-pink-100">
                <div className="grid grid-cols-2">
                  <div className="bg-gray-100 p-6 text-center">
                    <p className="text-xs text-gray-400 mb-2">BEFORE</p>
                    <div className="text-4xl mb-2">😔</div>
                    <p className="text-sm font-medium text-gray-600">{item.before}</p>
                  </div>
                  <div className="bg-pink-50 p-6 text-center">
                    <p className="text-xs text-pink-400 mb-2">AFTER</p>
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <p className="text-sm font-medium text-pink-600">{item.after}</p>
                  </div>
                </div>
                <div className="bg-white px-4 py-3 text-center">
                  <p className="text-xs text-gray-500">{item.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 영상 섹션 */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">K-Beauty in Action</h3>
        <p className="text-center text-gray-500 mb-10">Watch real K-Beauty experiences in Seoul</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/4MLuwvPvvu4"
              title="K-Beauty Experience"
              allowFullScreen
            />
            <div className="bg-white p-4">
              <p className="font-semibold text-gray-800">Korean Skincare Routine in Seoul</p>
              <p className="text-sm text-gray-500">Experience authentic K-Beauty treatments</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/DBMoWV-ShRQ"
              title="K-Beauty Shop Tour"
              allowFullScreen
            />
            <div className="bg-white p-4">
              <p className="font-semibold text-gray-800">Best Beauty Shops in Myeongdong</p>
              <p className="text-sm text-gray-500">Shop tour of Seoul's top beauty districts</p>
            </div>
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Customer Reviews</h3>
          <p className="text-center text-gray-500 mb-10">What international visitors say about us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-pink-50 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 광고 배너 섹션 */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Partner Beauty Shops</h3>
        <p className="text-center text-gray-500 mb-10">Exclusive deals from our trusted partners</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl p-8 text-white">
            <p className="text-xs uppercase tracking-wide mb-2">AD · Myeongdong</p>
            <h4 className="text-2xl font-bold mb-2">Glow Studio</h4>
            <p className="text-pink-100 mb-4">Get 20% OFF your first hydration facial!</p>
            <a href="/booking" className="bg-white text-pink-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-50 inline-block">
              Book Now
            </a>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl p-8 text-white">
            <p className="text-xs uppercase tracking-wide mb-2">AD · Gangnam</p>
            <h4 className="text-2xl font-bold mb-2">K-Glow Clinic</h4>
            <p className="text-purple-100 mb-4">Free skin consultation with every treatment!</p>
            <a href="/booking" className="bg-white text-purple-500 px-6 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 inline-block">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/diagnosis" className="bg-pink-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">{t.f1title}</h3>
              <p className="text-gray-500">{t.f1desc}</p>
            </a>
            <a href="/courses" className="bg-pink-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">{t.f2title}</h3>
              <p className="text-gray-500">{t.f2desc}</p>
            </a>
            <a href="/shops" className="bg-pink-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">{t.f3title}</h3>
              <p className="text-gray-500">{t.f3desc}</p>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}