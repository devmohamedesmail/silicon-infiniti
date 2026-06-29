'use client';

import React from 'react';
import {
    Cloud, Brain, Shield, Zap, Sparkles, CheckCircle2, ArrowRight, Layers, Users, TrendingUp, Code,
    Smartphone,
    ShoppingCart,
    Briefcase,
    Palette,
    Wrench
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/ui/layout';
import HeroServices from '@/components/pages/services/hero-services';
import ServicesSection from '@/components/pages/services/services-section';
import ProcessSection from '@/components/pages/services/process-section';

export default function ServicesPage() {
    const { t } = useTranslation();

    // JSON-LD structured data for Services
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Silicon Infiniti Services",
        description: "Comprehensive software development services",
        itemListElement: [
            {
                "@type": "Service",
                name: "Web Development",
                description: "Custom web applications with modern technologies",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
            {
                "@type": "Service",
                name: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
            {
                "@type": "Service",
                name: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
            {
                "@type": "Service",
                name: "AI & Machine Learning",
                description: "Intelligent solutions powered by AI and ML",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
            {
                "@type": "Service",
                name: "Cybersecurity",
                description: "Comprehensive security solutions and audits",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
            {
                "@type": "Service",
                name: "Performance Optimization",
                description: "Speed and efficiency improvements for applications",
                provider: {
                    "@type": "Organization",
                    name: "Silicon Infiniti",
                },
            },
        ],
    };

  
   

    const benefits = [
        { key: 'expertise' },
        { key: 'quality' },
        { key: 'support' },
        { key: 'delivery' }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(servicesSchema),
                }}
            />
            <Layout>
              
                <HeroServices />
                <ServicesSection />

                {/* Process Section */}
             <ProcessSection />

                {/* Why Choose Us Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16 fade-in">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    {t('servicesPage.benefits.title')}
                                </h2>
                                <p className="text-lg text-foreground/70">
                                    {t('servicesPage.benefits.subtitle')}
                                </p>
                            </div>

                            {/* Benefits Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={benefit.key}
                                        className="glass rounded-xl p-8 hover-lift fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">
                                                    {t(`servicesPage.benefits.items.${benefit.key}.title`)}
                                                </h3>
                                                <p className="text-foreground/70">
                                                    {t(`servicesPage.benefits.items.${benefit.key}.description`)}
                                                </p>
                                            </div>
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
                                    {t('servicesPage.cta.title')}
                                </h2>
                                <p className="text-lg text-foreground/70 mb-8">
                                    {t('servicesPage.cta.description')}
                                </p>
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                                >
                                    {t('servicesPage.cta.button')}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
}
