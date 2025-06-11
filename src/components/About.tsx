import React from 'react';
import { Users, Clock, Leaf, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Anos de Tradição', value: '30+' },
    { icon: Users, label: 'Famílias Atendidas', value: '5000+' },
    { icon: Leaf, label: 'Colmeias Ativas', value: '200+' },
    { icon: Award, label: 'Prêmios Recebidos', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          <div className="lg:flex-1 mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="../images/mel-buzz-coreano-1.jpeg" // Ex: imagem enviada
                alt="Pote de mel fofo"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="../images/mel-buzz-coreano-2.jpeg" // Ex: imagem enviada
                alt="Pote de mel fofo"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="lg:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              🐝 Nossa História Doce
            </h2>


            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há mais de três décadas, nossa família dedica-se à arte da apicultura com paixão e respeito pela natureza.
              O que começou como um hobby do avô José transformou-se em uma tradição familiar que hoje abastece
              milhares de lares com o mel mais puro e saboroso da região.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Localizada em áreas preservadas do interior, nossa produção segue métodos tradicionais combinados
              com técnicas modernas de qualidade, garantindo que cada pote de mel mantenha todas as propriedades
              naturais e o sabor único que só a natureza pode oferecer.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border border-amber-100">
                  <stat.icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-amber-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Nosso Compromisso
              </h3>
              <p className="text-gray-700">
                Produzir mel de alta qualidade respeitando o meio ambiente,
                cuidando das abelhas e preservando a tradição familiar para as futuras gerações.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Família Dourado - Tradição em Cada Gota
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Do nosso apiário para sua mesa, levamos não apenas mel, mas também carinho,
                tradição e o melhor que a natureza pode oferecer.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center space-x-3 bg-amber-50 px-6 py-3 rounded-full">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-amber-900">100% Natural</span>
              </div>
              <div className="flex items-center space-x-3 bg-amber-50 px-6 py-3 rounded-full">
                <Award className="h-6 w-6 text-blue-500" />
                <span className="font-semibold text-amber-900">Certificado</span>
              </div>
              <div className="flex items-center space-x-3 bg-amber-50 px-6 py-3 rounded-full">
                <Users className="h-6 w-6 text-purple-500" />
                <span className="font-semibold text-amber-900">Familiar</span>
              </div>
              <div className="flex items-center space-x-3 bg-amber-50 px-6 py-3 rounded-full">
                <Clock className="h-6 w-6 text-orange-500" />
                <span className="font-semibold text-amber-900">Tradição</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;