'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Booking() {
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
    await supabase.from('bookings').insert({
      name,
      email,
      date,
      status: 'pending'
    })
    setDone(true)
  }

  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-pink-500">K-Beauty Korea</a>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 py-16">
        {done ? (
          <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">Thank you {name}! We will contact you at {email} shortly.</p>
            <a href="/" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600">
              Back to Home
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Book a Course</h2>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none"
                >
                  <option value="">Choose a course</option>
                  <option value="Hydration Boost Course">Hydration Boost Course</option>
                  <option value="Oil Control Course">Oil Control Course</option>
                  <option value="Balancing Course">Balancing Course</option>
                  <option value="Brightening Course">Brightening Course</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-pink-500 outline-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-pink-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}