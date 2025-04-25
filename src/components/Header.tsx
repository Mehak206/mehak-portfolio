import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-purple-600 font-bold text-2xl relative group">
          <span className="relative z-10">Mehak</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-700 hover:text-purple-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 w-64 bg-white/90 backdrop-blur-sm shadow-lg`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button
              className="text-slate-700 hover:text-purple-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-purple-600 font-medium transition-colors p-2 relative group"
                onClick={closeMenu}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;