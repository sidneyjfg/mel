import { useEffect, useState } from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import FloatingBees from './FloatingBees';
import HoneyDrip from './HoneyDrip';
import HoneycombPattern from './HoneycombPattern';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Bees */}
      <FloatingBees />
      
      {/* Honeycomb Pattern */}
      <HoneycombPattern className="opacity-20" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2962136/pexels-photo-2962136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Colmeia com abelhas"
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-transparent animate-pulse"></div>
        
        {/* Honey Drip Effect */}
        <HoneyDrip />
        
        {/* Floating Honey Bubbles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute honey-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className={`lg:flex-1 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4 animate-bounce">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5 text-yellow-400 fill-current animate-pulse" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              <span className="text-white/90 ml-2 text-sm flex items-center">
                <Sparkles className="h-4 w-4 mr-1 animate-spin" />
                Mel 100% Puro e Natural
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="inline-block animate-slide-in-left">Mel Puro</span>
              <span className="block text-yellow-400 animate-slide-in-right sticky-honey" style={{ animationDelay: '0.3s' }}>
                Direto da Colmeia
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              Descobra o sabor autêntico do mel artesanal, produzido com carinho e tradição familiar há mais de 30 anos.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <button className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Conheça Nossos Produtos</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Honey drip effect on button */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-honey-flow"></div>
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Sobre Nossa História</span>
              </button>
            </div>
          </div>
          
          <div className={`lg:flex-1 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/5946035/pexels-photo-5946035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pote de Vitta melis"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-110 group-hover:shadow-amber-500/25"
              />
              <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                100% Natural
              </div>
              
              {/* Honey dripping from jar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-honey-flow"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Bee Theme */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-70 shadow-lg shadow-yellow-400/50 relative">
          <div className="absolute -top-1 -left-1 w-2 h-1 bg-white/60 rounded-full animate-wing-flap"></div>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-amber-300 rounded-full opacity-70 shadow-lg shadow-amber-300/50"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-5 h-5 bg-yellow-500 rounded-full opacity-70 shadow-lg shadow-yellow-500/50"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;