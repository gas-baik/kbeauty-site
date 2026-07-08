'use client'

import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'
import { supabase } from '../../lib/supabase'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

const emojis = ['💆', '✨', '🌸', '🏮']

type Shop = {
  id: string
  name: string
  location: string
  specialty: string[]
  languages: string[]
  price_range: string
}

export default function Shops() {
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    const fetchShops = async () => {
      const { data } = await supabase.from('shops').select('*')
      if (data) setShops(data)
    }
    fetchShops()
  }, [])

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-500">{t.brand}</a>
          <div className="flex items-center gap-2">
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.shopsTitle}</h2>
        <p className="text-gray-500 mb-10">{t.shopsSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shops.map((shop, index) => (
            <div key={shop.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{emojis[index % emojis.length]}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
                  <p className="text-gray-400 text-sm">📍 {shop.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {shop.specialty?.map((s, i) => (
                    <span key={i} className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {shop.languages?.map((l, i) => (
                    <span key={i} className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">{l}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-pink-500 font-semibold text-sm">{shop.price_range}</span>
                <a href="/booking" className="bg-pink-500 text-white px-5 py-2 rounded-xl text-sm hover:bg-pink-600">
                  {t.bookNow}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}