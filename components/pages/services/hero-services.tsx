import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    Cloud, Sparkles, Code,

} from 'lucide-react';
export default function HeroServices() {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/30 float" style={{ animationDelay: '0s' }} />
                <Code className="absolute top-1/3 right-1/3 w-8 h-8 text-primary/20 float" style={{ animationDelay: '1s' }} />
                <Cloud className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/25 float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground/80">
                            {t('servicesPage.badge')}
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 fade-in">
                        <span className="block mb-2">{t('servicesPage.title1')}</span>
                        <span className="gradient-text">{t('servicesPage.title2')}</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
                        {t('servicesPage.subtitle')}
                    </p>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
