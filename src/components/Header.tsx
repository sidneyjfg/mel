import { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { href: '#home', label: 'Início' },
    { href: '#benefits', label: 'Benefícios' },
    { href: '#process', label: 'Processo' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Hexagon className="h-8 w-8 text-amber-600 fill-current" />
            <h2 className="font-cute text-4xl text-amber-900">🐝 Vitta melis</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="relative md:hidden animate-mel origin-top mt-2 rounded-b-xl overflow-hidden bg-amber-100 shadow-lg z-40">
            {/* Topo escorrendo */}
            <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
              <svg
                viewBox="0 0 1440 150"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-[80px]"
              >
                <path
                  fill="#facc15"
                  d="M0,64 C180,80 360,0 540,32 C720,64 900,160 1080,96 C1260,32 1380,0 1440,16 L1440,0 L0,0 Z"
                />
              </svg>
            </div>

            {/* Gotas animadas */}
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 z-20 flex space-x-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-4 rounded-full bg-amber-400 animate-drip"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '1.5s',
                    animationIterationCount: 'infinite',
                  }}
                />
              ))}
            </div>

            {/* Links */}
            <div className="pt-20 pb-4 px-4 space-y-1 relative z-30">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
