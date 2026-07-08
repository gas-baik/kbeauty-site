'use client'

import { useState } from 'react'
import { useLang } from '../LangContext'
import { translations } from '../../lib/translations'

const flags: Record<string, string> = {
  en: '🇺🇸', ko: '🇰🇷', ja: '🇯🇵', zh: '🇨🇳', th: '🇹🇭'
}

const questions = {
  en: [
    { question: "How does your skin feel after washing?", options: ["Tight and dry", "Normal and comfortable", "Oily all over", "Dry on cheeks, oily on T-zone"] },
    { question: "How often do you get breakouts?", options: ["Rarely", "Sometimes", "Often", "Very often"] },
    { question: "How does your skin look by midday?", options: ["Still dry", "Normal", "Shiny all over", "Shiny only on T-zone"] },
    { question: "How sensitive is your skin?", options: ["Very sensitive", "Somewhat sensitive", "Not sensitive", "Unsure"] },
    { question: "What is your main skin concern?", options: ["Dryness", "Acne", "Anti-aging", "Brightening"] }
  ],
  ko: [
    { question: "세안 후 피부가 어떤가요?", options: ["당기고 건조함", "보통이고 편안함", "전체적으로 번들거림", "볼은 건조하고 T존은 번들거림"] },
    { question: "트러블이 얼마나 자주 생기나요?", options: ["거의 없음", "가끔", "자주", "매우 자주"] },
    { question: "낮이 되면 피부가 어떻게 보이나요?", options: ["여전히 건조함", "보통", "전체적으로 번들거림", "T존만 번들거림"] },
    { question: "피부가 얼마나 민감한가요?", options: ["매우 민감", "약간 민감", "민감하지 않음", "모르겠음"] },
    { question: "주요 피부 고민은 무엇인가요?", options: ["건조함", "여드름", "안티에이징", "미백"] }
  ],
  ja: [
    { question: "洗顔後の肌の感触は？", options: ["つっぱりと乾燥", "普通で快適", "全体的にべたつく", "頬は乾燥、Tゾーンはべたつく"] },
    { question: "ニキビはどのくらい出ますか？", options: ["ほとんどない", "たまに", "よく出る", "非常によく出る"] },
    { question: "昼になると肌はどう見えますか？", options: ["まだ乾燥している", "普通", "全体的にテカる", "Tゾーンのみテカる"] },
    { question: "肌はどのくらい敏感ですか？", options: ["非常に敏感", "やや敏感", "敏感でない", "わからない"] },
    { question: "主な肌の悩みは何ですか？", options: ["乾燥", "ニキビ", "エイジングケア", "美白"] }
  ],
  zh: [
    { question: "洗脸后皮肤感觉如何？", options: ["紧绷干燥", "正常舒适", "全脸出油", "两颊干燥，T区出油"] },
    { question: "您多久长一次痘痘？", options: ["很少", "偶尔", "经常", "非常频繁"] },
    { question: "到了中午皮肤看起来怎么样？", options: ["仍然干燥", "正常", "全脸发亮", "只有T区发亮"] },
    { question: "您的皮肤有多敏感？", options: ["非常敏感", "有点敏感", "不敏感", "不确定"] },
    { question: "您主要的皮肤问题是什么？", options: ["干燥", "痘痘", "抗衰老", "美白"] }
  ],
  th: [
    { question: "ผิวรู้สึกอย่างไรหลังล้างหน้า?", options: ["ตึงและแห้ง", "ปกติและสบาย", "มันทั้งหน้า", "แก้มแห้ง โซน T มัน"] },
    { question: "คุณเป็นสิวบ่อยแค่ไหน?", options: ["แทบไม่เป็น", "บางครั้ง", "บ่อย", "บ่อยมาก"] },
    { question: "ผิวหน้าดูเป็นอย่างไรตอนเที่ยง?", options: ["ยังแห้งอยู่", "ปกติ", "มันทั้งหน้า", "มันเฉพาะโซน T"] },
    { question: "ผิวของคุณแพ้ง่ายแค่ไหน?", options: ["แพ้ง่ายมาก", "แพ้ง่ายบ้าง", "ไม่แพ้ง่าย", "ไม่แน่ใจ"] },
    { question: "ปัญหาผิวหลักของคุณคืออะไร?", options: ["ผิวแห้ง", "สิว", "ต้านริ้วรอย", "ผิวกระจ่างใส"] }
  ]
}

const results = {
  dry: { en: "Dry", ko: "건성", ja: "乾燥肌", zh: "干性", th: "ผิวแห้ง" },
  oily: { en: "Oily", ko: "지성", ja: "脂性肌", zh: "油性", th: "ผิวมัน" },
  combination: { en: "Combination", ko: "복합성", ja: "混合肌", zh: "混合性", th: "ผิวผสม" }
}

const resultDesc = {
  dry: { en: "Your skin needs extra hydration. We recommend hydrating facials and moisture-rich treatments.", ko: "피부에 수분이 필요합니다. 수분 페이셜과 보습 트리트먼트를 추천드립니다.", ja: "肌に潤いが必要です。保湿フェイシャルと保湿トリートメントをおすすめします。", zh: "您的皮肤需要额外补水。我们推荐补水面部护理和富含保湿成分的护理。", th: "ผิวของคุณต้องการความชุ่มชื้นเพิ่มเติม เราแนะนำการทำหน้าเพื่อเพิ่มความชุ่มชื้น" },
  oily: { en: "Your skin produces excess oil. We recommend oil-control facials and pore-cleansing treatments.", ko: "피부에서 과도한 유분이 분비됩니다. 유분 조절 페이셜과 모공 클렌징 트리트먼트를 추천드립니다.", ja: "肌が過剰な皮脂を分泌しています。皮脂コントロールフェイシャルと毛穴クレンジングをおすすめします。", zh: "您的皮肤分泌过多油脂。我们推荐控油面部护理和毛孔清洁护理。", th: "ผิวของคุณผลิตน้ำมันมากเกินไป เราแนะนำการทำหน้าควบคุมความมันและการทำความสะอาดรูขุมขน" },
  combination: { en: "Your skin has both dry and oily areas. We recommend balancing treatments for combination skin.", ko: "피부에 건성과 지성 부위가 모두 있습니다. 복합성 피부를 위한 밸런싱 트리트먼트를 추천드립니다.", ja: "肌に乾燥部分と脂性部分の両方があります。混合肌のためのバランシングトリートメントをおすすめします。", zh: "您的皮肤既有干燥区域又有油性区域。我们推荐针对混合性肌肤的平衡护理。", th: "ผิวของคุณมีทั้งบริเวณแห้งและมัน เราแนะนำการรักษาสมดุลสำหรับผิวผสม" }
}

export default function Diagnosis() {
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState('')

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index]
    if (current < questions[lang].length - 1) {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    } else {
      const dryCount = newAnswers.filter(a => a === 0).length
      const oilyCount = newAnswers.filter(a => a === 2).length
      if (dryCount >= 2) setResult('dry')
      else if (oilyCount >= 2) setResult('oily')
      else setResult('combination')
    }
  }

  const reset = () => { setCurrent(0); setAnswers([]); setResult('') }

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-500">{t.brand}</a>
          <div className="flex gap-1">
            {Object.keys(flags).map((l) => (
              <button key={l} onClick={() => { setLang(l as any); reset() }}
                className={`text-xs px-2 py-1 rounded-full border transition-all ${lang === l ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-200 hover:border-pink-500'}`}>
                {flags[l]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {result === '' ? (
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="text-sm text-pink-400 mb-4">{current + 1} / {questions[lang].length}</div>
            <div className="w-full bg-pink-100 rounded-full h-2 mb-8">
              <div className="bg-pink-500 h-2 rounded-full transition-all" style={{width: `${((current + 1) / questions[lang].length) * 100}%`}}></div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">{questions[lang][current].question}</h2>
            <div className="flex flex-col gap-3">
              {questions[lang][current].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)}
                  className="text-left px-5 py-4 border-2 border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all text-sm md:text-base">
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm text-center">
            <div className="text-6xl mb-6">
              {result === 'dry' ? '💧' : result === 'oily' ? '✨' : '⚖️'}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              <span className="text-pink-500">{results[result as keyof typeof results][lang]}</span>
            </h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base">
              {resultDesc[result as keyof typeof resultDesc][lang]}
            </p>
            <a href="/courses" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 inline-block">
              {t.btn2}
            </a>
          </div>
        )}
      </div>
    </main>
  )
}