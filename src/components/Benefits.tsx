import { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Zap, Leaf, Brain, Sun } from 'lucide-react';
import HoneycombPattern from './HoneycombPattern';

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Heart,
      title: 'Saúde Cardiovascular',
      description: 'Rico em antioxidantes que protegem o coração e melhoram a circulação sanguínea.',
      color: 'text-red-500',
      bgGradient: 'from-red-100 to-pink-100',
      shadowColor: 'shadow-red-200'
    },
    {
      icon: Shield,
      title: 'Fortalece Imunidade',
      description: 'Propriedades antibacterianas e antivirais naturais que fortalecem o sistema imunológico.',
      color: 'text-blue-500',
      bgGradient: 'from-blue-100 to-cyan-100',
      shadowColor: 'shadow-blue-200'
    },
    {
      icon: Zap,
      title: 'Energia Natural',
      description: 'Fonte natural de energia que proporciona vigor e vitalidade para o dia a dia.',
      color: 'text-yellow-500',
      bgGradient: 'from-yellow-100 to-amber-100',
      shadowColor: 'shadow-yellow-200'
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Livre de conservantes e aditivos químicos, mantendo todas as propriedades naturais.',
      color: 'text-green-500',
      bgGradient: 'from-green-100 to-emerald-100',
      shadowColor: 'shadow-green-200'
    },
    {
      icon: Brain,
      title: 'Melhora Cognição',
      description: 'Nutrientes essenciais que auxiliam na concentração e função cerebral.',
      color: 'text-purple-500',
      bgGradient: 'from-purple-100 to-violet-100',
      shadowColor: 'shadow-purple-200'
    },
    {
      icon: Sun,
      title: 'Pele Radiante',
      description: 'Propriedades hidratantes e regenerativas que promovem uma pele saudável.',
      color: 'text-orange-500',
      bgGradient: 'from-orange-100 to-yellow-100',
      shadowColor: 'shadow-orange-200'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.benefit-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Honeycomb Background */}
      <HoneycombPattern className="opacity-5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Honey Drops */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-honey-flow"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s',
            }}
          >
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 animate-fade-in-up relative">
            Benefícios do Mel Puro
            {/* Honey drip under title */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Descubra os incríveis benefícios que o mel natural pode proporcionar para sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-amber-100 relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Honey drip on card hover */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-honey-flow"></div>
              
              {/* Animated Icon Container */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <benefit.icon className={`h-8 w-8 ${benefit.color} group-hover:animate-pulse`} />
                
                {/* Icon Glow Effect */}
                <div className={`absolute inset-0 rounded-full ${benefit.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-amber-900 mb-4 text-center group-hover:text-amber-800 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="relative z-10 text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {benefit.description}
              </p>

              {/* Floating Honey Particles on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
          </div>
          
          {/* Honey drips from top */}
          <div className="absolute top-0 left-1/4 w-2 h-6 bg-amber-300 rounded-full opacity-60 animate-honey-flow"></div>
          <div className="absolute top-0 right-1/4 w-1 h-4 bg-amber-300 rounded-full opacity-40 animate-honey-flow" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">
              Diferença do Mel Artesanal
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nosso mel é cuidadosamente extraído respeitando o ciclo natural das abelhas, 
              preservando todos os nutrientes e propriedades benéficas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;