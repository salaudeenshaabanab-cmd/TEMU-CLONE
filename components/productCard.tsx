'use client'

import CountdownTimer from './CountdownTimer'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  stock: number
  flashSale?: boolean
  flashEnd?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
      <div className="relative aspect-square bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full hover:scale-105 transition"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">
            -{discount}%
          </span>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="text-sm text-gray-800 line-clamp-2 h-10 mb-2">{product.name}</h3>
        
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-orange-600">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
        
        {product.flashSale && product.flashEnd && (
          <div className="mt-2 flex items-center gap-2 text-xs bg-red-50 p-1 rounded">
            <span className="text-red-500">⚡</span>
            <CountdownTimer endTime={product.flashEnd} />
          </div>
        )}
        
        <div className="mt-2 text-xs">
          {product.stock < 10 ? (
            <span className="text-red-500 font-medium">Only {product.stock} left!</span>
          ) : (
            <span className="text-gray-500">{product.stock} sold</span>
          )}
        </div>
      </div>
    </div>
  )
}
