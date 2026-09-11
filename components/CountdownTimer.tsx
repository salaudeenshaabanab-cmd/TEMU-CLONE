'use client'
import { useState, useEffect } from 'react'
export default function CountdownTimer({ endTime }: { endTime: string }) {
const [time, setTime] = useState({ h: '00', m: '00', s: '00' })
useEffect(() => {
const timer = setInterval(() => {
const diff = new Date(endTime).getTime() - Date.now()
if (diff > 0) {
setTime({
h: String(Math.floor(diff / 3600000)).padStart(2, '0'),
m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
})
}
}, 1000)
return () => clearInterval(timer)
}, [endTime])
return (
<span className="text-red-600 font-mono font-bold">
{time.h}:{time.m}:{time.s}
</span>
)
}
