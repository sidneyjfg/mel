import React from 'react';
import { Flower2, Home, Droplets, Package } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Flower2,
      title: 'Coleta do Néctar',
      description: 'Nossas abelhas coletam o néctar das flores silvestres em áreas preservadas, longe de poluição.',
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: Home,
      title: 'Produção na Colmeia',
      description: 'O néctar é transformado em mel pelas abelhas através de um processo natural de desidratação.',
      image: 'https://images.pexels.com/photos/6035259/pexels-photo-6035259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: Droplets,
      title: 'Extração Cuidadosa',
      description: 'Extraímos o mel de forma artesanal, respeitando as abelhas e preservando a qualidade do produto.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      icon: Package,
      title: 'Envase e Qualidade',
      description: 'O mel é filtrado delicadamente e envasado mantendo todas suas propriedades naturais intactas.',
      image: 'https://images.pexels.com/photos/5946043/pexels-photo-5946043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Nosso Processo Artesanal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe cada etapa da produção do nosso mel, desde a colmeia até sua mesa, 
            sempre respeitando a natureza e mantendo a qualidade superior.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-amber-500 text-white rounded-full p-4 mr-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Etapa {index + 1}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {step.description}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <div className="w-8 h-1 bg-amber-200 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Resultado: Mel 100% Puro e Natural
            </h3>
            <p className="text-gray-600 mb-6">
              Todo esse cuidado resulta em um mel de qualidade excepcional, 
              rico em sabor e propriedades nutricionais únicas.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
              Conheça Nossos Produtos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;