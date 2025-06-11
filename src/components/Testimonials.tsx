import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'O mel mais saboroso que já experimentei! Compro há 2 anos e a qualidade é sempre impecável. Minha família toda adora!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Produto de excelente qualidade! Uso para meus problemas respiratórios e sinto uma melhora significativa. Recomendo!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Mel puro e natural como prometido! O sabor é incomparável e a entrega foi super rápida. Já virei cliente fiel!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Salvador, BA',
      rating: 5,
      text: 'Comprei para toda família e todos adoraram! A diferença na qualidade é notável. Mel artesanal de verdade!',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Luciana Ferreira',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'Produto excepcional! Uso na minha confeitaria e os clientes sempre elogiam o sabor diferenciado dos doces.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name: 'Pedro Almeida',
      location: 'Fortaleza, CE',
      rating: 5,
      text: 'Mel de qualidade superior! A consistência é perfeita e o sabor é único. Entrega rápida e embalagem cuidadosa.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de famílias já provaram nosso mel e aprovaram a qualidade. 
            Veja alguns depoimentos de quem confia na nossa tradição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-white fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-white ml-4">4.9/5.0</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mais de 5.000 Clientes Satisfeitos
          </h3>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se à nossa família de clientes satisfeitos e descubra por que somos 
            referência em mel artesanal no Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors transform hover:scale-105 shadow-lg">
              Experimente Nosso Mel
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
              Ver Mais Avaliações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;