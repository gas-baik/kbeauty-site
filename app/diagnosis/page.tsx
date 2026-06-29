'use client'

import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "How does your skin feel after washing?",
    options: ["Tight and dry", "Normal and comfortable", "Oily all over", "Dry on cheeks, oily on T-zone"]
  },
  {
    id: 2,
    question: "How often do you get breakouts?",
    options: ["Rarely", "Sometimes", "Often", "Very often"]
  },
  {
    id: 3,
    question: "How does your skin look by midday?",
    options: ["Still dry", "Normal", "Shiny all over", "Shiny only on T-zone"]
  },
  {
    id: 4,
    question: "How sensitive is your skin?",
    options: ["Very sensitive", "Somewhat sensitive", "Not sensitive", "Unsure"]
  },
  {
    id: 5,
    question: "What is your main skin concern?",
    options: ["Dryness", "Acne", "Anti-aging", "Brightening"]
  }
]

export default function Diagnosis() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState('')

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index]
    if (current < questions.length - 1) {
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

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-pink-500">K-Beauty Korea</a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-16">
        {result === '' ? (
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="text-sm text-pink-400 mb-4">Question {current + 1} / {questions.length}</div>
            <div className="w-full bg-pink-100 rounded-full h-2 mb-8">
              <div className="bg-pink-500 h-2 rounded-full transition-all" style={{width: `${((current + 1) / questions.length) * 100}%`}}></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{questions[current].question}</h2>
            <div className="flex flex-col gap-4">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="text-left px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
            <div className="text-6xl mb-6">
              {result === 'dry' ? '💧' : result === 'oily' ? '✨' : '⚖️'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your skin type is{' '}
              <span className="text-pink-500">
                {result === 'dry' ? 'Dry' : result === 'oily' ? 'Oily' : 'Combination'}
              </span>
            </h2>
            <p className="text-gray-500 mb-8">
              {result === 'dry' && 'Your skin needs extra hydration. We recommend hydrating facials and moisture-rich treatments.'}
              {result === 'oily' && 'Your skin produces excess oil. We recommend oil-control facials and pore-cleansing treatments.'}
              {result === 'combination' && 'Your skin has both dry and oily areas. We recommend balancing treatments for combination skin.'}
            </p>
            <a href="/courses" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">
              View Recommended Courses
            </a>
          </div>
        )}
      </div>
    </main>
  )
}