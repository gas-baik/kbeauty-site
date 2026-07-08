'use client'

import { useEffect, useState } from 'react'
import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'
import { supabase } from '../../lib/supabase'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

const emojis = ['✨', '💧', '🪞', '📍', '🌿', '🍃']

type BlogPost = {
  id: string
  title: string
  content: string
  skin_type_tag: string
  published_at: string
}

export default function Blog() {
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('blog_posts').select('*')
      if (data) setPosts(data)
    }
    fetchPosts()
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.blogTitle}</h2>
        <p className="text-gray-500 mb-10">{t.blogSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{emojis[index % emojis.length]}</div>
              <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">
                {post.skin_type_tag}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-3 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">
                  {new Date(post.published_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}