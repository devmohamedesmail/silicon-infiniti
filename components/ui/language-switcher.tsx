'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        // Update document direction for RTL support
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:glow-primary transition-all duration-300 hover:scale-110 group"
            aria-label="Toggle language"
        >
            <Languages className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-2 -right-2 px-2 py-1 bg-secondary text-xs rounded-full border border-primary/20">
                {i18n.language === 'en' ? 'AR' : 'EN'}
            </span>
        </button>
    );
}
