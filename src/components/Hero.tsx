import React from 'react';
import { ArrowRight, MapPin, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, text: t('hero_feature_1') },
    { icon: Smartphone, text: t('hero_feature_2') },
    { icon: MapPin, text: t('hero_feature_3') }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Content Side */}
          <div className="space-y-8 z-10 relative">
            <div className="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3">
              <MapPin className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-emerald-100 text-sm font-medium">{t('hero_delivering_across')}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {t('hero_title_1')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
                  {t('hero_title_2')}
                </span>
                <span className="text-white">{t('hero_title_3')}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                {t('hero_subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  {t('hero_cta_1')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
              <a href="https://youtu.be/rCSGwifG7v0?si=dymN-q7hhFNjGloQ" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-emerald-400/50 text-emerald-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 backdrop-blur-sm">
                  {t('hero_cta_2')}
                </button>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/15 transition-all duration-300"
                >
                  <feature.icon className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spline Animation Side */}
          <div className="relative h-[600px] lg:h-[700px] w-full">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-emerald-500/20 bg-gray-800/50">
              <iframe 
                src="https://my.spline.design/deliveringthehappinessanimted-aEFdkE6ZHjoQiLsEnG4fLeFY/" 
                width="100%" 
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Adera Delivery Animation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-30 animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/70 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero;