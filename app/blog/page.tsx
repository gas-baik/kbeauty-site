'use client'

import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

export default function Blog() {
  const { lang, setLang } = useLang()
  const t = translations[lang]

  const posts = [
    {
      id: 1,
      title: { en: "Top 5 K-Beauty Treatments You Must Try in Seoul", ko: "서울에서 꼭 받아야 할 K-뷰티 트리트먼트 TOP 5", ja: "ソウルで絶対試すべきK-ビューティートリートメントTOP5", zh: "首尔必体验的5大K-美容护理", th: "5 การรักษา K-Beauty ที่ต้องลองในโซล" },
      description: { en: "Discover the most popular Korean beauty treatments that international visitors love.", ko: "외국인 방문객들이 사랑하는 가장 인기 있는 한국 뷰티 트리트먼트를 알아보세요.", ja: "外国人観光客に人気の韓国美容トリートメントをご紹介します。", zh: "探索国际游客最喜爱的韩国美容护理。", th: "ค้นพบการรักษาความงามเกาหลีที่ได้รับความนิยมมากที่สุดในหมู่นักท่องเที่ยวต่างชาติ" },
      skin_type_tag: { en: "All Skin Types", ko: "모든 피부", ja: "全肌質", zh: "所有肤质", th: "ทุกสภาพผิว" },
      date: "2024-12-01", emoji: "✨", read_time: "5 min"
    },
    {
      id: 2,
      title: { en: "The Ultimate Guide to Korean Skincare for Dry Skin", ko: "건성 피부를 위한 한국 스킨케어 완벽 가이드", ja: "乾燥肌のための韓国スキンケア完全ガイド", zh: "干性肌肤韩国护肤终极指南", th: "คู่มือสกินแคร์เกาหลีสำหรับผิวแห้งฉบับสมบูรณ์" },
      description: { en: "Learn how Korean beauty experts treat dehydrated skin with their unique layering technique.", ko: "한국 뷰티 전문가들이 독특한 레이어링 기법으로 건조한 피부를 어떻게 케어하는지 알아보세요.", ja: "韓国美容専門家がユニークなレイヤリング技術で乾燥肌をケアする方法を学びましょう。", zh: "了解韩国美容专家如何用独特的分层技术护理缺水肌肤。", th: "เรียนรู้วิธีที่ผู้เชี่ยวชาญด้านความงามเกาหลีดูแลผิวขาดน้ำด้วยเทคนิคการเลเยอร์ที่เป็นเอกลักษณ์" },
      skin_type_tag: { en: "Dry Skin", ko: "건성 피부", ja: "乾燥肌", zh: "干性肌肤", th: "ผิวแห้ง" },
      date: "2024-12-05", emoji: "💧", read_time: "7 min"
    },
    {
      id: 3,
      title: { en: "How to Get Glass Skin: A Step-by-Step Korean Beauty Routine", ko: "유리 피부 만들기: 단계별 한국 뷰티 루틴", ja: "ガラス肌の作り方：ステップバイステップの韓国美容ルーティン", zh: "如何获得玻璃肌：韩国美容步骤指南", th: "วิธีได้ผิวแก้ว: ขั้นตอนการดูแลความงามแบบเกาหลี" },
      description: { en: "Here's how Seoul's top beauty experts achieve that coveted luminous look.", ko: "서울 최고의 뷰티 전문가들이 그 빛나는 룩을 어떻게 만드는지 알아보세요.", ja: "ソウルのトップ美容専門家がどのように輝くルックを実現するかをご紹介します。", zh: "了解首尔顶级美容专家如何实现令人羡慕的光泽感。", th: "นี่คือวิธีที่ผู้เชี่ยวชาญด้านความงามชั้นนำของโซลบรรลุลุคที่สว่างเป็นที่ต้องการ" },
      skin_type_tag: { en: "All Skin Types", ko: "모든 피부", ja: "全肌質", zh: "所有肤质", th: "ทุกสภาพผิว" },
      date: "2024-12-10", emoji: "🪞", read_time: "6 min"
    },
    {
      id: 4,
      title: { en: "Best Beauty Districts in Seoul for International Tourists", ko: "외국인 관광객을 위한 서울 최고의 뷰티 지역", ja: "外国人観光客向けソウルのベストビューティーエリア", zh: "国际游客最佳首尔美容区指南", th: "ย่านความงามที่ดีที่สุดในโซลสำหรับนักท่องเที่ยวต่างชาติ" },
      description: { en: "Explore Seoul's top beauty destinations from Myeongdong to Gangnam.", ko: "명동부터 강남까지 서울의 최고 뷰티 명소를 탐험해보세요.", ja: "明洞から江南まで、ソウルのトップビューティースポットを探索しましょう。", zh: "从明洞到江南，探索首尔顶级美容目的地。", th: "สำรวจจุดหมายปลายทางด้านความงามชั้นนำของโซลตั้งแต่เมียงดงถึงกังนัม" },
      skin_type_tag: { en: "Travel Guide", ko: "여행 가이드", ja: "旅行ガイド", zh: "旅游指南", th: "คู่มือท่องเที่ยว" },
      date: "2024-12-15", emoji: "📍", read_time: "8 min"
    },
    {
      id: 5,
      title: { en: "K-Beauty Ingredients You Need to Know", ko: "꼭 알아야 할 K-뷰티 성분", ja: "知っておくべきK-ビューティー成分", zh: "你需要了解的K-美容成分", th: "ส่วนผสม K-Beauty ที่คุณต้องรู้จัก" },
      description: { en: "Discover the powerful Korean skincare ingredients taking the world by storm.", ko: "세계를 강타하고 있는 강력한 한국 스킨케어 성분을 알아보세요.", ja: "世界を席巻している強力な韓国スキンケア成分をご紹介します。", zh: "探索席卷全球的强效韩国护肤成分。", th: "ค้นพบส่วนผสมสกินแคร์เกาหลีที่ทรงพลังที่กำลังสร้างกระแสไปทั่วโลก" },
      skin_type_tag: { en: "All Skin Types", ko: "모든 피부", ja: "全肌質", zh: "所有肤质", th: "ทุกสภาพผิว" },
      date: "2024-12-20", emoji: "🌿", read_time: "6 min"
    },
    {
      id: 6,
      title: { en: "Oily Skin? Here's What Korean Beauty Experts Recommend", ko: "지성 피부? 한국 뷰티 전문가들의 추천", ja: "脂性肌？韓国美容専門家のおすすめ", zh: "油性肌肤？韩国美容专家的建议", th: "ผิวมัน? นี่คือสิ่งที่ผู้เชี่ยวชาญด้านความงามเกาหลีแนะนำ" },
      description: { en: "Discover the best oil-control treatments available in Seoul.", ko: "서울에서 이용 가능한 최고의 유분 조절 트리트먼트를 알아보세요.", ja: "ソウルで利用できる最高の皮脂コントロール治療をご紹介します。", zh: "探索首尔最佳控油护理方案。", th: "ค้นพบการรักษาควบคุมความมันที่ดีที่สุดในโซล" },
      skin_type_tag: { en: "Oily Skin", ko: "지성 피부", ja: "脂性肌", zh: "油性肌肤", th: "ผิวมัน" },
      date: "2024-12-25", emoji: "🍃", read_time: "5 min"
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.blogTitle}</h2>
        <p className="text-gray-500 mb-10">{t.blogSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{post.emoji}</div>
              <span className="bg-pink-100 text-pink-500 text-xs px-3 py-1 rounded-full">
                {post.skin_type_tag[lang]}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mt-3 mb-2">{post.title[lang]}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.description[lang]}</p>
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