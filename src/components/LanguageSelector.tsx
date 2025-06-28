import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

type LanguageCode = 'en' | 'am' | 'om' | 'ti' | 'so';

interface Language {
  code: LanguageCode;
  name: string;
}

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'am', name: 'Amharic' },
    { code: 'om', name: 'Oromiffa' },
    { code: 'ti', name: 'Tigrigna' },
    { code: 'so', name: 'Somalii' },
  ];

  const selectedLanguage = languages.find(l => l.code === language);

  const handleLanguageChange = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="language-selector" ref={wrapperRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="language-selector-button">
        <Globe className="h-5 w-5" />
        <span className="mx-2">{selectedLanguage?.name}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`language-option ${language === lang.code ? 'selected' : ''}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;