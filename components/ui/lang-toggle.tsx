import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LangToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // Update document direction for RTL support
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };
    return (
        <div>
            <button onClick={toggleLanguage} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:glow-primary transition-all duration-300 hover:scale-105">
                {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
        </div>
    )
}
