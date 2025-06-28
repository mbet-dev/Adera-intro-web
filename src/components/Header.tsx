import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav_home') },
    { href: '#features', label: t('nav_features') },
    { href: '#about', label: t('nav_about') },
    { href: '#contact', label: t('nav_contact') }
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || isMenuOpen
      ? 'bg-gray-900/80 backdrop-blur-lg shadow-2xl shadow-emerald-500/10'
      : 'bg-transparent'
  }`;

  const linkClasses = `font-bold text-base transition-colors duration-300 hover:text-emerald-400 ${
    isScrolled || isMenuOpen ? 'text-white' : 'text-white'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
              <Package className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Adera©
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={linkClasses}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a href="#contact">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                {t('header_get_notified')}
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-white font-bold hover:text-emerald-400 transition-colors duration-300 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact">
                <button className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg">
                  {t('header_get_notified')}
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;