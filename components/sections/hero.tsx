'use client';

import React from 'react';
import { ArrowRight, Sparkles, Zap, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/30 float" style={{ animationDelay: '0s' }} />
                <Zap className="absolute top-1/3 right-1/3 w-8 h-8 text-primary/20 float" style={{ animationDelay: '1s' }} />
                <Code className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/25 float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground/80">
                            {t('hero.badge')}
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in">
                        <span className="block mb-2">{t('hero.title1')}</span>
                        <span className="gradient-text">{t('hero.title2')}</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
                        {t('hero.subtitle')}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in" style={{ animationDelay: '0.4s' }}>
                        <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105 flex items-center gap-2">
                            {t('hero.cta1')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="px-8 py-4 glass rounded-lg font-semibold text-lg hover:border-primary/30 transition-all duration-300 hover:scale-105">
                            {t('hero.cta2')}
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in" style={{ animationDelay: '0.6s' }}>
                        {[
                            { number: '500+', label: t('hero.stats.projects') },
                            { number: '98%', label: t('hero.stats.satisfaction') },
                            { number: '50+', label: t('hero.stats.team') },
                            { number: '10+', label: t('hero.stats.experience') },
                        ].map((stat, index) => (
                            <div key={index} className="glass rounded-lg p-6 hover-lift">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-foreground/60">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
