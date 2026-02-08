'use client';

import React from 'react';
import { Code, Smartphone, Cloud, Brain, Shield, Zap, Sparkles, CheckCircle2, ArrowRight, Layers, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import LanguageSwitcher from '@/components/ui/language-switcher';

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

    const services = [
        {
            icon: Code,
            key: 'web',
            gradient: 'from-cyan-500 to-blue-500',
            features: ['responsive', 'performance', 'seo', 'security']
        },
        {
            icon: Smartphone,
            key: 'mobile',
            gradient: 'from-purple-500 to-pink-500',
            features: ['native', 'crossPlatform', 'ui', 'offline']
        },
        {
            icon: Cloud,
            key: 'cloud',
            gradient: 'from-green-500 to-teal-500',
            features: ['scalable', 'migration', 'devops', 'monitoring']
        },
        {
            icon: Brain,
            key: 'ai',
            gradient: 'from-orange-500 to-red-500',
            features: ['ml', 'nlp', 'automation', 'insights']
        },
        {
            icon: Shield,
            key: 'security',
            gradient: 'from-blue-500 to-indigo-500',
            features: ['penetration', 'compliance', 'encryption', 'monitoring']
        },
        {
            icon: Zap,
            key: 'performance',
            gradient: 'from-yellow-500 to-orange-500',
            features: ['optimization', 'caching', 'cdn', 'database']
        }
    ];

    const process = [
        { icon: Users, key: 'discovery' },
        { icon: Layers, key: 'planning' },
        { icon: Code, key: 'development' },
        { icon: TrendingUp, key: 'launch' }
    ];

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

                {/* Services Grid */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16 fade-in">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    {t('servicesPage.services.title')}
                                </h2>
                                <p className="text-lg text-foreground/70">
                                    {t('servicesPage.services.subtitle')}
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <div
                                        key={service.key}
                                        className="group glass rounded-xl overflow-hidden hover-lift fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Service Icon Header */}
                                        <div className={`h-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden flex items-center justify-center`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                            <service.icon className="w-16 h-16 text-white relative z-10" />
                                        </div>

                                        {/* Service Info */}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                                {t(`servicesPage.services.items.${service.key}.title`)}
                                            </h3>
                                            <p className="text-foreground/70 mb-6">
                                                {t(`servicesPage.services.items.${service.key}.description`)}
                                            </p>

                                            {/* Features List */}
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                                        {t(`servicesPage.services.items.${service.key}.features.${feature}`)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 relative bg-primary/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16 fade-in">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                                    {t('servicesPage.process.title')}
                                </h2>
                                <p className="text-lg text-foreground/70">
                                    {t('servicesPage.process.subtitle')}
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {process.map((step, index) => (
                                    <div
                                        key={step.key}
                                        className="relative fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="glass rounded-xl p-6 text-center hover-lift">
                                            {/* Step Number */}
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>

                                            {/* Icon */}
                                            <div className="p-4 rounded-lg bg-primary/10 w-fit mx-auto mb-4 mt-2">
                                                <step.icon className="w-8 h-8 text-primary" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold mb-2">
                                                {t(`servicesPage.process.steps.${step.key}.title`)}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-foreground/70">
                                                {t(`servicesPage.process.steps.${step.key}.description`)}
                                            </p>
                                        </div>

                                        {/* Arrow (not on last item) */}
                                        {index < process.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                                                <ArrowRight className="w-6 h-6 text-primary/30" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

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

                <Footer />
                <LanguageSwitcher />
            </div>
        </>
    );
}
