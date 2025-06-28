import React from 'react';
import { Package, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_features'), href: '#features' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  const legalLinks = [
    { label: t('footer_legal_privacy'), href: '#' },
    { label: t('footer_legal_terms'), href: '#' },
  ];

  const services = [
    t('footer_service_1'),
    t('footer_service_2'),
    t('footer_service_3'),
    t('footer_service_4'),
    t('footer_service_5'),
    t('footer_service_6'),
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Adera</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_links_title')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_services_title')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer_contact_title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">{t('contact_info_1_value')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">{t('contact_info_3_value')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">{t('contact_info_4_value')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-400">{t('contact_info_2_value')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer_copyright').replace('2024', currentYear.toString())}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map(link => (
              <a key={link.label} href={link.href} className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                {link.label}
              </a>
            ))}
             <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
              {t('footer_cookie_policy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;