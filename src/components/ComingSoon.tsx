import React, { useState, useEffect } from 'react';
import { Bell, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to launch (example: 45 days from now)
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 116);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const countdownUnits = {
    days: t('countdown_days'),
    hours: t('countdown_hours'),
    minutes: t('countdown_minutes'),
    seconds: t('countdown_seconds'),
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
          <Bell className="h-4 w-4 text-emerald-400 mr-2" />
          <span className="text-white text-sm">{t('coming_soon_tag')}</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t('coming_soon_title_1')}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            {" "}{t('coming_soon_title_2')}{" "}
          </span>
          {t('coming_soon_title_3')}
        </h2>

        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('coming_soon_subtitle')}
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-md mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="text-emerald-300 text-sm capitalize">{countdownUnits[unit as keyof typeof countdownUnits]}</div>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div className="max-w-md mx-auto">
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('coming_soon_form_placeholder')}
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {t('coming_soon_form_button')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 flex items-center justify-center">
              <Mail className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-white font-semibold">{t('coming_soon_form_success')}</span>
            </div>
          )}
        </div>

        <p className="text-gray-300 text-sm mt-4">
          {t('coming_soon_waitlist_info')}
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;