import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const products = [
  { title: 'Secretario Victoriano', desc: 'Mueble de caoba, siglo XIX.', price: '$1,200', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', badge: 'Nuevo' },
  { title: 'Reloj de Pared', desc: 'Francia, circa 1880.', price: '$450', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=400' },
  { title: 'Paisaje del Siglo XIX', desc: 'Oleo sobre lienzo.', price: '$890', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
  { title: 'Broche Edwardiano', desc: 'Plata y amatista.', price: '$320', img: 'https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?w=400', badge: 'Rare' },
]

const categories = [
  { icon: 'fa-chair', title: 'Muebles', desc: 'Siglos XVIII-XIX' },
  { icon: 'fa-gem', title: 'Joyas', desc: 'Vintage & Art Deco' },
  { icon: 'fa-paint-brush', title: 'Arte', desc: 'Pinturas & grabados' },
  { icon: 'fa-clock', title: 'Relojes', desc: 'De bolsillo & pared' },
]

function App() {
  const heroRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 })
    gsap.fromTo('.hero-image img', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
    gsap.fromTo('.product-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: productsRef.current, start: 'top 80%' } })
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0a1d]">
      <header className="fixed top-0 left-0 right-0 bg-[#0c0a1d]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white no-underline">Vintage <span className="bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] bg-clip-text text-transparent">Collective</span></a>
          <nav className="flex items-center gap-6">
            <a href="#tienda" className="text-white no-underline font-medium hover:text-[#a78bfa] transition">Catálogo</a>
            <a href="#contacto" className="bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-[#0c0a1d] px-6 py-2 rounded font-semibold no-underline hover:opacity-90 transition">Ver Todo</a>
          </nav>
        </div>
      </header>

      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-[radial-gradient(ellipse_at_30%_20%,rgba(167,139,250,0.12)_0%,transparent_50%)]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">Piezas Únicas<br /><span className="bg-gradient-to-r from-[#a78bfa] to-[#f0abfc] bg-clip-text text-transparent">con Historia</span></h1>
            <p className="text-lg text-gray-400 mb-8">Descubre nuestra colección de antigüedades.</p>
            <a href="#tienda" className="inline-block bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] text-[#0c0a1d] px-8 py-3 rounded font-bold no-underline hover:opacity-90 transition">Explorar</a>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" alt="Antigüedades" className="w-full max-w-lg rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-[#a78bfa]/50 transition">
                <div className="w-14 h-14 mx-auto mb-3 bg-[#a78bfa]/20 rounded-full flex items-center justify-center text-[#a78bfa] text-xl"><i className={`fas fa-${c.icon}`}></i></div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-xs text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={productsRef} id="tienda" className="py-24 bg-gradient-to-b from-[#a78bfa]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Últimas <span className="text-[#a78bfa]">Incorporaciones</span></h2>
          <p className="text-gray-400 text-center mb-12">Nuevas piezas agregadas a nuestra colección</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="product-card bg-white/10 border border-white/10 rounded-xl overflow-hidden hover:border-[#a78bfa]/50 transition">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover" loading="lazy" />
                  {p.badge && <span className="absolute top-3 right-3 bg-[#a78bfa] text-[#0c0a1d] px-3 py-1 rounded text-xs font-bold">{p.badge}</span>}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
                  <div className="text-xl font-bold text-[#a78bfa]">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#2e1065] to-[#1e1b4b] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Buscas algo <span className="text-[#a78bfa]">especial?</span></h2>
          <p className="text-gray-400 mb-8">Contáctanos para piezas específicas</p>
          <a href="#" className="inline-block bg-[#a78bfa] text-[#0c0a1d] px-8 py-4 rounded-full font-bold hover:bg-[#8b5cf6] transition">Contactar</a>
        </div>
      </section>

      <footer className="bg-[#05040d] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div><a href="#" className="text-2xl font-bold text-white no-underline">Vintage <span className="text-[#a78bfa]">Collective</span></a><p className="text-gray-500 text-sm mt-4">Tu destino para antigüedades únicas.</p></div>
            <div><h4 className="font-semibold mb-4">Categorías</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Muebles</li><li>Joyas</li><li>Arte</li></ul></div>
            <div><h4 className="font-semibold mb-4">Empresa</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Nosotros</li><li>Contacto</li></ul></div>
            <div><h4 className="font-semibold mb-4">Contacto</h4><ul className="space-y-2 text-gray-500 text-sm"><li><i className="fas fa-map-marker-alt mr-2"></i>Guayaquil</li><li><i className="fas fa-phone mr-2"></i>+593 99 999 9999</li></ul></div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">© 2026 Vintage Collective. Todos los derechos reservados.</div>
        </div>
      </footer>

      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
    </div>
  )
}
export default App
