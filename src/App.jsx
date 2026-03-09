import { useState, useEffect } from 'react'

// Data
const lookbook = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    hotspots: [
      { x: 40, y: 30, name: "Blazer Vintage", price: "$189" },
      { x: 55, y: 65, name: "Pantalón Wide", price: "$95" }
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    hotspots: [
      { x: 50, y: 25, name: "Top Seda", price: "$75" }
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    hotspots: [
      { x: 45, y: 35, name: "Vestido Midi", price: "$145" },
      { x: 60, y: 70, name: "Botines Cuero", price: "$220" }
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
    hotspots: [
      { x: 50, y: 40, name: "Abrigo Lana", price: "$280" }
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    hotspots: [
      { x: 35, y: 30, name: "Camisa Unisex", price: "$65" },
      { x: 50, y: 60, name: "Jeans Vintage", price: "$110" }
    ]
  }
]

const categories = [
  { id: 1, name: "Novedades", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", size: "large" },
  { id: 2, name: "Básicos", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80", size: "small" },
  { id: 3, name: "Accesorios", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80", size: "small" },
  { id: 4, name: "Outdoor", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80", size: "medium" }
]

const products = [
  {
    id: 1,
    name: "Blazer Structured",
    price: "$195",
    image1: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    image2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 2,
    name: "Silk Midi Dress",
    price: "$165",
    image1: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
    image2: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
    sizes: ["S", "M", "L"]
  },
  {
    id: 3,
    name: "Wool Overcoat",
    price: "$320",
    image1: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80",
    image2: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 4,
    name: "Vintage Jeans",
    price: "$125",
    image1: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    image2: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80",
    sizes: ["26", "28", "30", "32"]
  }
]

const socialPhotos = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80"
]

const manifestoWords = [
  "MODA", "CON", "PROPÓSITO", "=", "ESTILO", "CON", "ALMA"
]

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [cartOpen, setCartOpen] = useState(false)
  const [activeSizes, setActiveSizes] = useState({})
  const [activeLook, setActiveLook] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const addToCart = () => {
    setCartCount(prev => prev + 1)
    setCartOpen(true)
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Floating Cart */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setCartOpen(!cartOpen)}
          className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transition-transform duration-500 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl">Tu Bolsa</h2>
            <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <p>Tu bolsa está vacía</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-semibold mt-4 hover:bg-gray-800 transition-colors">
            CHECKOUT
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-wider">VINTAGE COLLECTIVE</a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest">
            <a href="#lookbook" className="hover-underline">LOOKBOOK</a>
            <a href="#shop" className="hover-underline">SHOP</a>
            <a href="#about" className="hover-underline">MANIFIESTO</a>
            <button onClick={() => setCartOpen(true)} className="relative">
              <span className="hover-underline">BAG</span>
              {cartCount > 0 && <span className="ml-1">({cartCount})</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Campaign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 animate-fadeUp">
            VINTAGE<br/>COLLECTIVE
          </h1>
          <p className="text-white/80 text-lg tracking-[0.3em] mb-8 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            CURATED VINTAGE • SUSTAINABLE FASHION
          </p>
          <a 
            href="#lookbook"
            className="inline-block border border-white text-white px-8 py-4 text-sm tracking-widest hover-underline animate-fadeUp"
            style={{ animationDelay: '0.4s' }}
          >
            EXPLORAR COLECCIÓN
          </a>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 tracking-[0.3em] text-sm mb-4">LOOKBOOK</p>
            <h2 className="font-serif text-5xl md:text-6xl">Shop the Look</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8">
            {lookbook.map((look) => (
              <div 
                key={look.id}
                className="flex-shrink-0 w-[400px] group relative overflow-hidden"
                onMouseEnter={() => setActiveLook(look.id)}
                onMouseLeave={() => setActiveLook(null)}
              >
                <img 
                  src={look.image} 
                  alt={`Look ${look.id}`}
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Hotspots */}
                {activeLook === look.id && look.hotspots.map((hotspot, i) => (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 bg-white rounded-full cursor-pointer animate-pulse-soft"
                    style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                  >
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 glass p-4 rounded-lg whitespace-nowrap animate-scaleIn">
                      <p className="font-semibold text-sm">{hotspot.name}</p>
                      <p className="text-gray-500 text-sm">{hotspot.price}</p>
                      <button 
                        onClick={addToCart}
                        className="mt-2 text-xs bg-black text-white px-3 py-1"
                      >
                        AÑADIR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Bento */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 tracking-[0.3em] text-sm mb-4">CATEGORIES</p>
            <h2 className="font-serif text-5xl md:text-6xl">Descubre</h2>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            {categories.map((cat, i) => (
              <div 
                key={cat.id}
                className={`relative group overflow-hidden ${cat.size === 'large' ? 'col-span-2 row-span-2' : cat.size === 'medium' ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}`}
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {cat.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="shop" className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gray-400 tracking-[0.3em] text-sm mb-4">FEATURED</p>
            <h2 className="font-serif text-5xl md:text-6xl">Piezas Destacadas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.image1} 
                    alt={product.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <img 
                    src={product.image2} 
                    alt={`${product.name} worn`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Size selector on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2 justify-center">
                      {product.sizes.map((size) => (
                        <button 
                          key={size}
                          onClick={() => setActiveSizes({...activeSizes, [product.id]: size})}
                          className={`w-10 h-10 border text-sm transition-colors ${activeSizes[product.id] === size ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-gray-500 text-sm">Vintage Edition</p>
                  </div>
                  <span className="font-semibold">{product.price}</span>
                </div>
                <button 
                  onClick={addToCart}
                  className="w-full mt-4 bg-black text-white py-3 text-sm tracking-widest hover:bg-gray-800 transition-colors"
                >
                  AÑADIR A LA BOLSA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="about" className="py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 tracking-[0.3em] text-sm mb-12">NUESTRO MANIFIESTO</p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
              {manifestoWords.map((word, i) => (
                <span key={i} className="inline-block mr-4 animate-fadeUp" style={{ animationDelay: `${i * 0.1}s` }}>
                  {word}
                </span>
              ))}
            </h2>
            <p className="mt-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Cada pieza cuenta una historia. Cada adquisición es un acto de sostenibilidad. 
              Creemos en la moda consciente, en el estilo atemporal y en reducir nuestro impacto 
              en el planeta sin sacrificar la elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-20 bg-stone-100 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...socialPhotos, ...socialPhotos].map((photo, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] h-[400px] mx-2 relative group overflow-hidden">
              <img 
                src={photo} 
                alt={`Social ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-6 py-3 text-sm tracking-widest">
                  COMPRAR ESTE LOOK
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-4xl mb-6">VINTAGE<br/>COLLECTIVE</h3>
              <p className="text-gray-500">Curated vintage fashion since 2020</p>
            </div>
            <div>
              <h4 className="text-sm tracking-widest mb-6">ENLACES</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover-underline">Shipping</a></li>
                <li><a href="#" className="hover-underline">Returns</a></li>
                <li><a href="#" className="hover-underline">Size Guide</a></li>
                <li><a href="#" className="hover-underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-widest mb-6">NEWSLETTER</h4>
              <p className="text-gray-500 mb-4">Acceso anticipado a colecciones</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Suscrito!') }} className="flex border-b border-black pb-2">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="flex-1 outline-none bg-transparent"
                />
                <button type="submit" className="text-sm tracking-widest">SUSCRIBIRSE</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-16 pt-8 flex justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Vintage Collective</p>
            <div className="flex gap-6">
              <a href="#" className="hover-underline">Instagram</a>
              <a href="#" className="hover-underline">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
