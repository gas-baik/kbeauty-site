'use client'

import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'
import { supabase } from '../../lib/supabase'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

type Course = {
  id: string
  title: string
  skin_type: string
  duration_days: number
  price: number
  description: string
}

export default function Courses() {
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await supabase.from('courses').select('*')
      if (data) setCourses(data)
    }
    fetchCourses()
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.coursesTitle}</h2>
        <p className="text-gray-500 mb-10">{t.coursesSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
              <span className="bg-pink-100 text-pink-500 text-sm px-3 py-1 rounded-full">
                {course.skin_type}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">{course.duration_days} days</div>
                <div className="text-lg font-bold text-pink-500">₩{course.price.toLocaleString()}</div>
              </div>
              <a href="/booking" className="mt-4 block text-center bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600">
                {t.bookNow}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}