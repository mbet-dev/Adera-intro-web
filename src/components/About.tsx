import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DeliveryGuyVideo from '../../assets/DeliveryGuywithaParcel.mp4';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t('about_tag')}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('about_title_1')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {" "}{t('about_title_2')}{" "}
              </span>
              {t('about_title_3')}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about_subtitle')}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about_point_1_title')}</h3>
                  <p className="text-gray-600">
                    {t('about_point_1_desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about_point_2_title')}</h3>
                  <p className="text-gray-600">
                    {t('about_point_2_desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-emerald-100 rounded-lg">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about_point_3_title')}</h3>
                  <p className="text-gray-600">
                    {t('about_point_3_desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                {t('about_cta_1')}
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300">
                {t('about_cta_2')}
              </button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-3xl shadow-2xl w-full max-w-md"
              style={{
                transform: 'rotate(3deg)',
                transition: 'transform 0.5s',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(3deg)'}
            >
              <source src={DeliveryGuyVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;