import React from 'react';
import {
  MapPin,
  Shield,
  Smartphone,
  CreditCard,
  MessageCircle,
  QrCode,
  Clock,
  Globe,
  Target
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('feature_1_title'),
      description: t('feature_1_desc'),
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: t('feature_2_title'),
      description: t('feature_2_desc'),
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: CreditCard,
      title: t('feature_3_title'),
      description: t('feature_3_desc'),
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Smartphone,
      title: t('feature_4_title'),
      description: t('feature_4_desc'),
      color: "from-orange-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: t('feature_5_title'),
      description: t('feature_5_desc'),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: t('feature_6_title'),
      description: t('feature_6_desc'),
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: QrCode,
      title: t('feature_7_title'),
      description: t('feature_7_desc'),
      color: "from-teal-500 to-blue-600"
    },
    {
      icon: Clock,
      title: t('feature_8_title'),
      description: t('feature_8_desc'),
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('features_tag')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('features_title_1')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {" "}{t('features_title_2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('features_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="h-5 w-5 mr-2" />
            {t('feature_9_title')}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('stats_1_value')}</div>
              <div className="text-emerald-100">{t('stats_1_label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('stats_2_value')}</div>
              <div className="text-emerald-100">{t('stats_2_label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">{t('stats_3_value')}</div>
              <div className="text-emerald-100">{t('stats_3_label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;