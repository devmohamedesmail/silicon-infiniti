'use client';

import React from 'react';
import { Cpu, Globe, Smartphone, Cloud, Shield, Zap, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    const services = [
        {
            icon: Globe,
            title: t('about.services.web.title'),
            description: t('about.services.web.description'),
        },
        {
            icon: Smartphone,
            title: t('about.services.mobile.title'),
            description: t('about.services.mobile.description'),
        },
        {
            icon: Cloud,
            title: t('about.services.cloud.title'),
            description: t('about.services.cloud.description'),
        },
        {
            icon: Cpu,
            title: t('about.services.ai.title'),
            description: t('about.services.ai.description'),
        },
        {
            icon: Shield,
            title: t('about.services.security.title'),
            description: t('about.services.security.description'),
        },
        {
            icon: Zap,
            title: t('about.services.performance.title'),
            description: t('about.services.performance.description'),
        },
    ];

    const features = [
        {
            icon: Users,
            title: t('about.features.team.title'),
            description: t('about.features.team.description'),
        },
        {
            icon: Award,
            title: t('about.features.quality.title'),
            description: t('about.features.quality.description'),
        },
        {
            icon: Zap,
            title: t('about.features.agile.title'),
            description: t('about.features.agile.description'),
        },
    ];

    return (
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <div className="inline-block px-4 py-2 rounded-full glass mb-4">
                        <span className="text-sm text-primary font-semibold">{t('about.badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {t('about.title1')}
                        <span className="block gradient-text">{t('about.title2')}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                        {t('about.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover-lift group fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative mb-4">
                                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/70">{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="text-center fade-in"
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 glow-primary">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-foreground/70">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
