'use client'

import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

export default function Shops() {
  const { lang, setLang } = useLang()
  const t = translations[lang]

  const shops = [
    {
      id: 1,
      name: "Glow Studio Myeongdong",
      location: "Myeongdong, Seoul",
      specialty: ["Hydration Facial", "Sheet Mask Therapy", "LED Treatment"],
      languages: ["English", "日本語", "中文"],
      price_range: "₩50,000 ~ ₩150,000",
      description: { en: "Premium skincare studio in the heart of Myeongdong.", ko: "명동 한복판의 프리미엄 스킨케어 스튜디오.", ja: "明洞の中心にあるプレミアムスキンケアスタジオ。", zh: "位于明洞中心的高端护肤工作室。", th: "สตูดิโอสกินแคร์พรีเมียมในใจกลางเมียงดง" },
      emoji: "💆"
    },
    {
      id: 2,
      name: "K-Glow Clinic Gangnam",
      location: "Gangnam, Seoul",
      specialty: ["Pore Care", "Oil Control", "Acne Treatment"],
      languages: ["English", "中文"],
      price_range: "₩80,000 ~ ₩200,000",
      description: { en: "Professional skin clinic in Gangnam offering advanced oil control treatments.", ko: "강남의 전문 피부과로 고급 유분 조절 트리트먼트를 제공합니다.", ja: "江南にある専門スキンクリニック。高度な皮脂コントロール治療を提供。", zh: "位于江南的专业皮肤诊所，提供先进的控油护理。", th: "คลินิกผิวหนังมืออาชีพในกังนัมที่มีการรักษาควบคุมความมันขั้นสูง" },
      emoji: "✨"
    },
    {
      id: 3,
      name: "Pure Beauty Hongdae",
      location: "Hongdae, Seoul",
      specialty: ["Anti-aging", "Brightening", "Vitamin C Therapy"],
      languages: ["English", "ภาษาไทย", "Tiếng Việt"],
      price_range: "₩60,000 ~ ₩180,000",
      description: { en: "Trendy beauty shop in Hongdae popular with international visitors.", ko: "외국인 방문객들에게 인기 있는 홍대의 트렌디한 뷰티샵.", ja: "外国人観光客に人気の弘大のトレンディなビューティーショップ。", zh: "位于弘大的时尚美容店，深受国际游客欢迎。", th: "ร้านความงามที่ทันสมัยในฮงแดที่ได้รับความนิยมจากนักท่องเที่ยวต่างชาติ" },
      emoji: "🌸"
    },
    {
      id: 4,
      name: "Seoul Skin Lab Insadong",
      location: "Insadong, Seoul",
      specialty: ["Traditional Korean Beauty", "Herbal Treatment", "Sensitive Skin Care"],
      languages: ["English", "日本語"],
      price_range: "₩70,000 ~ ₩160,000",
      description: { en: "Unique blend of traditional Korean beauty secrets and modern skincare.", ko: "전통 한국 미용 비법과 현대 스킨케어의 독특한 조합.", ja: "伝統的な韓国美容の秘訣と現代スキンケアのユニークな融合。", zh: "传统韩国美容秘诀与现代护肤的独特融合。", th: "การผสมผสานที่ไม่เหมือนใครของความลับความงามแบบเกาหลีดั้งเดิมและสกินแคร์สมัยใหม่" },
      emoji: "🏮"
    }
  ]

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
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{shop.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{shop.name}</h3>
                  <p className="text-gray-400 text-sm">📍 {shop.location}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">{shop.description[lang]}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {shop.specialty.map((s, i) => (
                    <span key={i} className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {shop.languages.map((l, i) => (
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