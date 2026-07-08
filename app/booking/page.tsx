'use client'

import { useState } from 'react'
import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'
import { supabase } from '../../lib/supabase'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

export default function Booking() {
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [course, setCourse] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    if (!name || !email || !date || !course) {
      alert('Please fill in all fields')
      return
    }
    await supabase.from('bookings').insert({ name, email, date, status: 'pending' })
    setDone(true)
  }

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-500">{t.brand}</a>
          <div className="flex gap-1">
            {Object.keys(flags).map((l) => (
              <button key={l} onClick={() => setLang(l as any)}
                className={`text-xs px-2 py-1 rounded-full border transition-all ${lang === l ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-200 hover:border-pink-500'}`}>
                {flags[l]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 py-12">
        {done ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t.bookDone}</h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base">{t.bookThanks}</p>
            <a href="/" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 inline-block">
              {t.backHome}
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">{t.bookTitle}</h2>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.bookName}</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none text-sm md:text-base"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.bookEmail}</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none text-sm md:text-base"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.bookCourse}</label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none text-sm md:text-base">
                  <option value="">--</option>
                  <option value="Hydration Boost Course">Hydration Boost Course</option>
                  <option value="Oil Control Course">Oil Control Course</option>
                  <option value="Balancing Course">Balancing Course</option>
                  <option value="Brightening Course">Brightening Course</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.bookDate}</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none text-sm md:text-base"/>
              </div>
              <button onClick={handleSubmit}
                className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-pink-600 w-full">
                {t.bookBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}