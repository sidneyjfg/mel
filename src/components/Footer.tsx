import { Hexagon, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Hexagon className="h-10 w-10 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold">Vitta melis</span>
            </div>
            <p className="text-amber-100 mb-6 leading-relaxed">
              Tradição familiar na produção de mel artesanal há mais de 30 anos. 
              Qualidade, pureza e sabor únicos direto da natureza para sua mesa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Benefícios do Mel
                </a>
              </li>
              <li>
                <a href="#process" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Nosso Processo
                </a>
              </li>
              <li>
                <a href="#products" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Nossos Produtos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel Silvestre
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel de Laranjeira
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel de Eucalipto
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel Multifloral
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel Orgânico
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-100 hover:text-yellow-400 transition-colors">
                  Mel Cristalizado
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-amber-100">(41) 9 9999-9999</p>
                  <p className="text-amber-100">(41) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-amber-100">contato@meldourado.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-amber-100">Estrada Rural, Km 15</p>
                  <p className="text-amber-100">Zona Rural - Interior, PR</p>
                  <p className="text-amber-100">CEP: 12345-678</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-amber-800 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Horário de Atendimento</h4>
              <p className="text-amber-100 text-sm">Seg-Sex: 8h às 18h</p>
              <p className="text-amber-100 text-sm">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Vitta melis. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-amber-200 hover:text-yellow-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-amber-200 hover:text-yellow-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-amber-200 hover:text-yellow-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-amber-300 text-sm">
              Feito com ❤️ para promover o mel artesanal brasileiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;