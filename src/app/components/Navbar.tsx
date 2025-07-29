'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata', // Udaipur (IST)
      }

      const timeStr = new Intl.DateTimeFormat('en-IN', options).format(date)
      setTime(timeStr)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  const [isToggled, setIsToggled] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 font-serif text-black">
      {/* Left - Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Work</a>
        <a href="#" className="hover:underline">About</a>
      </div>

      {/* Center - Live Clock */}
      <div className="text-lg">
        Udaipur, IN {time} <span className="text-sm">(IST)</span>
      </div>

      {/* Right - Toggle & CTA */}
      <div className="flex items-center space-x-4">
        {/* Toggle */}
        <button
          onClick={() => setIsToggled(!isToggled)}
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
            isToggled ? 'bg-black' : 'bg-white border'
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isToggled ? 'translate-x-6' : ''
            }`}
          />
        </button>

        {/* CTA Button */}
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2 rounded-md">
          Get in Touch
        </button>
      </div>
    </nav>
  )
}
