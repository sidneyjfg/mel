import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Truck, Star, Sparkles } from 'lucide-react';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: 'Mel Silvestre',
      description: 'Mel puro extraído de flores silvestres da região. Sabor suave e aroma delicado.',
      price: 'R$ 25,00',
      originalPrice: 'R$ 30,00',
      image: 'https://images.pexels.com/photos/5946040/pexels-photo-5946040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Mais Vendido',
      badgeColor: 'bg-green-500',
      glowColor: 'shadow-green-400/50'
    },
    {
      name: 'Mel de Laranjeira',
      description: 'Mel premium com aroma cítrico característico das flores de laranja.',
      price: 'R$ 32,00',
      originalPrice: 'R$ 38,00',
      image: 'https://images.pexels.com/photos/5946045/pexels-photo-5946045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      glowColor: 'shadow-purple-400/50'
    },
    {
      name: 'Mel de Eucalipto',
      description: 'Mel medicinal com propriedades terapêuticas para problemas respiratórios.',
      price: 'R$ 28,00',
      originalPrice: 'R$ 35,00',
      image: 'https://images.pexels.com/photos/5946047/pexels-photo-5946047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Medicinal',
      badgeColor: 'bg-blue-500',
      glowColor: 'shadow-blue-400/50'
    },
    {
      name: 'Mel Multifloral',
      description: 'Blend especial de diversos tipos de flores. Rico em sabores e nutrientes.',
      price: 'R$ 30,00',
      originalPrice: 'R$ 36,00',
      image: 'https://images.pexels.com/photos/5946035/pexels-photo-5946035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Especial',
      badgeColor: 'bg-amber-500',
      glowColor: 'shadow-amber-400/50'
    },
    {
      name: 'Mel Orgânico',
      description: 'Certificado orgânico, produzido em áreas livres de agrotóxicos.',
      price: 'R$ 40,00',
      originalPrice: 'R$ 48,00',
      image: 'https://images.pexels.com/photos/5946043/pexels-photo-5946043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Orgânico',
      badgeColor: 'bg-green-600',
      glowColor: 'shadow-green-400/50'
    },
    {
      name: 'Mel Cristalizado',
      description: 'Mel naturalmente cristalizado, perfeito para acompanhar pães e bolos.',
      price: 'R$ 26,00',
      originalPrice: 'R$ 32,00',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Artesanal',
      badgeColor: 'bg-amber-600',
      glowColor: 'shadow-amber-400/50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProducts(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const products = sectionRef.current?.querySelectorAll('.product-card');
    products?.forEach(product => observer.observe(product));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 animate-fade-in-up">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Descubra nossa seleção de méis artesanais, cada um com características únicas 
            e propriedades especiais para diferentes gostos e necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              data-index={index}
              className={`product-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden border border-amber-100 relative ${
                visibleProducts.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              } ${hoveredProduct === index ? product.glowColor : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1`}>
                    <Sparkles className="h-3 w-3" />
                    <span>{product.badge}</span>
                  </span>
                </div>

                {/* Hover Particles */}
                {hoveredProduct === index && (
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float opacity-70"
                        style={{
                          left: `${10 + i * 10}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <ShoppingCart className="h-5 w-5 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Comprar Agora</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Animated Background Waves */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-2000"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left relative z-10">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start">
                <Truck className="h-8 w-8 mr-3 animate-bounce" />
                Frete Grátis para Todo Brasil
              </h3>
              <p className="text-white/90 text-lg">
                Compras acima de R$ 100,00 • Entrega em até 7 dias úteis
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-yellow-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Ver Condições</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;