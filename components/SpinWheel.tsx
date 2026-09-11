'use client'
import { useState } from 'react'
const prizes = ['5% OFF', '10% OFF', 'FREE SHIP', '15% OFF', 'TRY AGAIN', '20% OFF']
export default function SpinWheel() {
const [spinning, setSpinning] = useState(false)
const [result, setResult] = useState<string | null>(null)
const spin = () => {
if (spinning) return
setSpinning(true)
setResult(null)
const randomPrize = prizes[Math.floor(Math.random() * prizes.length)]

setTimeout(() => {
  setSpinning(false)
  setResult(randomPrize)
}, 2000)

}
if (result) {
return (
<div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-xl border-2 border-orange-500 max-w-[200px]">
<p className="font-bold text-orange-600 text-center">{result}</p>
<button
onClick={() => setResult(null)}
className="text-xs text-gray-500 mt-2 w-full text-center hover:text-gray-700"
>
Close
</button>
</div>
)
}
return (
<button 
onClick={spin}
disabled={spinning}
className="fixed bottom-4 right-4 z-50 w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold shadow-lg hover:scale-105 transition disabled:opacity-50 text-sm animate-bounce"
>
{spinning ? '...' : 'SPIN TO WIN'}
</button>
)
}
