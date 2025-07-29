'use client'

import { useEffect, useState } from 'react'


export default function LiveClock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateClock = () => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata', // Udaipur uses IST
      }

      const timeStr = new Intl.DateTimeFormat('en-IN', options).format(date)
      setTime(timeStr)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-xl font-serif text-black">
      Udaipur, IN {time} <span className="text-sm">(IST)</span>
    </div>
  )
}
