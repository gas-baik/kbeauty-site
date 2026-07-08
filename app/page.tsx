'use client'

import { useLang } from './LangContext'
import { translations } from '../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

export default function Home() {
  const { lang, setLang } = useLang()
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-pink-50">
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
                <button
                  key={l}
                  onClick={() => setLang(l as any)}
                  className={`text-xs px-2 py-1 rounded-full border transition-all ${lang === l ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-200 hover:border-pink-500'}`}
                >
                  {flags[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          {t.hero1}<br />
          <span className="text-pink-500">{t.hero2}</span>
        </h2>
        <p className="text-base md:text-xl text-gray-500 mb-10">{t.sub}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/diagnosis" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">
            {t.btn1}
          </a>
          <a href="/courses" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50">
            {t.btn2}
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/diagnosis" className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2">{t.f1title}</h3>
            <p className="text-gray-500">{t.f1desc}</p>
          </a>
          <a href="/courses" className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">{t.f2title}</h3>
            <p className="text-gray-500">{t.f2desc}</p>
          </a>
          <a href="/shops" className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">{t.f3title}</h3>
            <p className="text-gray-500">{t.f3desc}</p>
          </a>
        </div>
      </section>
    </main>
  )
}