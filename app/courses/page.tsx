'use client'

import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

export default function Courses() {
  const { lang, setLang } = useLang()
  const t = translations[lang]

  const courses = [
    {
      id: 1,
      title: { en: "Hydration Boost Course", ko: "수분 부스팅 코스", ja: "保湿ブーストコース", zh: "补水焕肤课程", th: "คอร์สเพิ่มความชุ่มชื้น" },
      skin_type: { en: "Dry", ko: "건성", ja: "乾燥肌", zh: "干性", th: "ผิวแห้ง" },
      duration_days: 3,
      price: 150000,
      description: { en: "Intensive hydration treatment for dry skin. Includes facial, sheet mask, and moisturizing therapy.", ko: "건성 피부를 위한 집중 수분 트리트먼트. 페이셜, 시트마스크, 보습 테라피 포함.", ja: "乾燥肌のための集中保湿トリートメント。フェイシャル、シートマスク、保湿療法が含まれます。", zh: "针对干性肌肤的密集补水护理。包括面部护理、面膜和保湿疗法。", th: "การรักษาเพื่อเพิ่มความชุ่มชื้นสำหรับผิวแห้ง รวมถึงการทำหน้า แผ่นมาสก์ และการบำบัดด้วยความชุ่มชื้น" }
    },
    {
      id: 2,
      title: { en: "Oil Control Course", ko: "유분 조절 코스", ja: "オイルコントロールコース", zh: "控油净肤课程", th: "คอร์สควบคุมความมัน" },
      skin_type: { en: "Oily", ko: "지성", ja: "脂性肌", zh: "油性", th: "ผิวมัน" },
      duration_days: 2,
      price: 120000,
      description: { en: "Deep cleansing and pore care for oily skin. Includes exfoliation, clay mask, and sebum control treatment.", ko: "지성 피부를 위한 딥 클렌징과 모공 케어. 각질 제거, 클레이 마스크, 피지 조절 트리트먼트 포함.", ja: "脂性肌のためのディープクレンジングと毛穴ケア。角質除去、クレイマスク、皮脂コントロールが含まれます。", zh: "针对油性肌肤的深层清洁和毛孔护理。包括去角质、泥膜和控油护理。", th: "การทำความสะอาดเชิงลึกและดูแลรูขุมขนสำหรับผิวมัน รวมถึงการผลัดเซลล์ผิว มาสก์ดินเหนียว และการรักษาควบคุมซีบัม" }
    },
    {
      id: 3,
      title: { en: "Balancing Course", ko: "밸런싱 코스", ja: "バランシングコース", zh: "平衡调理课程", th: "คอร์สปรับสมดุลผิว" },
      skin_type: { en: "Combination", ko: "복합성", ja: "混合肌", zh: "混合性", th: "ผิวผสม" },
      duration_days: 3,
      price: 130000,
      description: { en: "Balancing treatment for combination skin. Customized care for both dry and oily areas.", ko: "복합성 피부를 위한 밸런싱 트리트먼트. 건성 부위와 지성 부위 맞춤 케어.", ja: "混合肌のためのバランシングトリートメント。乾燥部分と脂性部分のカスタマイズケア。", zh: "针对混合性肌肤的平衡护理。针对干燥和油性区域的定制护理。", th: "การรักษาสมดุลสำหรับผิวผสม การดูแลที่ปรับแต่งได้สำหรับทั้งบริเวณแห้งและมัน" }
    },
    {
      id: 4,
      title: { en: "Brightening Course", ko: "브라이트닝 코스", ja: "ブライトニングコース", zh: "美白亮肤课程", th: "คอร์สเพิ่มความสว่าง" },
      skin_type: { en: "All", ko: "모든 피부", ja: "全肌質", zh: "所有肤质", th: "ทุกสภาพผิว" },
      duration_days: 4,
      price: 200000,
      description: { en: "Achieve glass skin with our brightening course. Includes vitamin C treatment and LED therapy.", ko: "브라이트닝 코스로 유리 피부를 만들어보세요. 비타민 C 트리트먼트와 LED 테라피 포함.", ja: "ブライトニングコースでガラス肌を実現。ビタミンCトリートメントとLEDセラピーが含まれます。", zh: "通过我们的美白课程实现玻璃肌。包括维生素C护理和LED疗法。", th: "บรรลุผิวแก้วด้วยคอร์สเพิ่มความสว่างของเรา รวมถึงการรักษาด้วยวิตามินซีและ LED therapy" }
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t.coursesTitle}</h2>
        <p className="text-gray-500 mb-10">{t.coursesSub}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
              <span className="bg-pink-100 text-pink-500 text-sm px-3 py-1 rounded-full">
                {course.skin_type[lang]}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">{course.title[lang]}</h3>
              <p className="text-gray-500 text-sm mb-4">{course.description[lang]}</p>
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