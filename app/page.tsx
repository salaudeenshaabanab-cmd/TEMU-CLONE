import ProductCard from '@/components/ProductCard'
import SpinWheel from '@/components/SpinWheel'

const fakeProducts = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones with Noise Cancellation',
    price: 12.99,
    originalPrice: 45.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    stock: 5,
    flashSale: true,
    flashEnd: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    name: 'LED Strip Lights RGB 16.4ft with Remote Control',
    price: 8.49,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400',
    stock: 23,
    flashSale: true,
    flashEnd: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    name: 'Mini Portable Blender USB Rechargeable',
    price: 15.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400',
    stock: 3,
    flashSale: true,
    flashEnd: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    name: 'Magnetic Phone Mount for Car Dashboard',
    price: 6.99,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400',
    stock: 45,
    flashSale: true,
    flashEnd: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* FindAll Header - Temu Style */}
      <header className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-600">FindAll</h1>
          <input 
            type="search" 
            placeholder="Search deals..." 
            className="w-1/2 px-4 py-2 rounded-full bg-gray-100 text-sm"
          />
          <button className="relative text-2xl">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Flash Sale Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">⚡</span>
          <h2 className="text-xl font-bold text-gray-800">Flash Deals</h2>
          <span className="text-sm text-red-500 font-medium">Ends in 2h 45m</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {fakeProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <SpinWheel />
    </main>
  )
}
