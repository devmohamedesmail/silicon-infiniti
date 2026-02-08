'use client';

import React from 'react';
import { Sparkles, Target, Eye, Lightbulb, Award, Users, Heart, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import LanguageSwitcher from '@/components/ui/language-switcher';

export default function About() {
    const { t } = useTranslation();

    const values = [
        { icon: Lightbulb, key: 'innovation' },
        { icon: Award, key: 'excellence' },
        { icon: Users, key: 'collaboration' },
        { icon: CheckCircle2, key: 'integrity' },
        { icon: Heart, key: 'customer' },
        { icon: TrendingUp, key: 'growth' }
    ];

    const stats = [
        { number: '10+', key: 'years' },
        { number: '500+', key: 'projects' },
        { number: '200+', key: 'clients' },
        { number: '50+', key: 'team' },
        { number: '25+', key: 'countries' },
        { number: '98%', key: 'satisfaction' }
    ];

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/30 float" style={{ animationDelay: '0s' }} />
                    <Target className="absolute top-1/3 right-1/3 w-8 h-8 text-primary/20 float" style={{ animationDelay: '1s' }} />
                    <Eye className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/25 float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground/80">
                                {t('aboutPage.badge')}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 fade-in">
                            <span className="block mb-2">{t('aboutPage.title1')}</span>
                            <span className="gradient-text">{t('aboutPage.title2')}</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
                            {t('aboutPage.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Story Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="glass rounded-2xl p-8 md:p-12 hover-lift fade-in">
                            <h2 className="text-4xl font-bold mb-6 gradient-text">
                                {t('aboutPage.story.title')}
                            </h2>
                            <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                                {t('aboutPage.story.description')}
                            </p>

                            {/* Mission & Vision */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Mission */}
                                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-lg bg-primary/10">
                                            <Target className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{t('aboutPage.story.mission.title')}</h3>
                                    </div>
                                    <p className="text-foreground/70">
                                        {t('aboutPage.story.mission.description')}
                                    </p>
                                </div>

                                {/* Vision */}
                                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-lg bg-primary/10">
                                            <Eye className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{t('aboutPage.story.vision.title')}</h3>
                                    </div>
                                    <p className="text-foreground/70">
                                        {t('aboutPage.story.vision.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                {t('aboutPage.values.title')}
                            </h2>
                            <p className="text-lg text-foreground/70">
                                {t('aboutPage.values.subtitle')}
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={value.key}
                                    className="glass rounded-xl p-6 hover-lift fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">
                                        {t(`aboutPage.values.items.${value.key}.title`)}
                                    </h3>
                                    <p className="text-foreground/70">
                                        {t(`aboutPage.values.items.${value.key}.description`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16 fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                {t('aboutPage.stats.title')}
                            </h2>
                            <p className="text-lg text-foreground/70">
                                {t('aboutPage.stats.subtitle')}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.key}
                                    className="glass rounded-xl p-6 text-center hover-lift fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-foreground/60">
                                        {t(`aboutPage.stats.${stat.key}`)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass rounded-2xl p-8 md:p-12 text-center hover-lift fade-in">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                                {t('aboutPage.cta.title')}
                            </h2>
                            <p className="text-lg text-foreground/70 mb-8">
                                {t('aboutPage.cta.description')}
                            </p>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                            >
                                {t('aboutPage.cta.button')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <LanguageSwitcher />
        </div>
    );
}
