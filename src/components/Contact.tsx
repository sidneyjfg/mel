import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Retornaremos em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer conhecer melhor nossos produtos? 
            Entre em contato conosco! Estamos prontos para atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="bg-amber-100 rounded-full p-3">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Telefone</h4>
                  <p className="text-gray-600">(11) 9 8765-4321</p>
                  <p className="text-gray-600">(11) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="bg-amber-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">E-mail</h4>
                  <p className="text-gray-600">contato@meldourado.com.br</p>
                  <p className="text-gray-600">vendas@meldourado.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="bg-amber-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">Estrada Rural, Km 15</p>
                  <p className="text-gray-600">Zona Rural - Interior, SP</p>
                  <p className="text-gray-600">CEP: 12345-678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                <div className="bg-amber-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">
                WhatsApp Business
              </h4>
              <p className="text-white/90 mb-4">
                Fale conosco pelo WhatsApp para atendimento rápido e personalizado!
              </p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors transform hover:scale-105 shadow-lg">
                Chamar no WhatsApp
              </button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-amber-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="(11) 9 9999-9999"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                  placeholder="Conte-nos como podemos ajudá-lo..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            Nossa Localização
          </h3>
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-amber-100">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-amber-900 mb-2">
                  Apiário Mel Dourado
                </h4>
                <p className="text-gray-600">
                  Localizado na zona rural, em meio à natureza preservada
                </p>
                <button className="mt-4 bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
                  Ver no Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;