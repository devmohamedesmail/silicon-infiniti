'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Code, Smartphone, Cloud, Brain, Lock, Zap, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import LanguageSwitcher from '@/components/ui/language-switcher';

export default function ProjectsPage() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    // JSON-LD structured data for Projects
    const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Silicon Infiniti Projects",
        description: "Portfolio of successful software development projects",
        numberOfItems: 9,
        itemListElement: [
            {
                "@type": "CreativeWork",
                name: "E-Commerce Platform",
                description: "Modern e-commerce platform with advanced features",
                category: "Web Development",
            },
            {
                "@type": "CreativeWork",
                name: "Healthcare Mobile App",
                description: "AI-powered health tracking application",
                category: "Mobile Development",
            },
            {
                "@type": "CreativeWork",
                name: "Business Analytics Dashboard",
                description: "Real-time analytics and reporting platform",
                category: "Web Development",
            },
        ],
    };

    const categories = [
        { id: 'all', label: t('projectsPage.filters.all'), icon: Filter },
        { id: 'web', label: t('projectsPage.filters.web'), icon: Code },
        { id: 'mobile', label: t('projectsPage.filters.mobile'), icon: Smartphone },
        { id: 'cloud', label: t('projectsPage.filters.cloud'), icon: Cloud },
        { id: 'ai', label: t('projectsPage.filters.ai'), icon: Brain },
    ];

    const projects = [
        {
            id: 1,
            title: t('projectsPage.projects.ecommerce.title'),
            description: t('projectsPage.projects.ecommerce.description'),
            category: 'web',
            categoryLabel: t('projectsPage.projects.ecommerce.category'),
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'from-cyan-500 to-blue-500',
            stats: {
                users: '50K+',
                rating: '4.8/5',
                performance: '99.9%'
            }
        },
        {
            id: 2,
            title: t('projectsPage.projects.healthcare.title'),
            description: t('projectsPage.projects.healthcare.description'),
            category: 'mobile',
            categoryLabel: t('projectsPage.projects.healthcare.category'),
            tags: ['React Native', 'Firebase', 'AI', 'HealthKit'],
            gradient: 'from-purple-500 to-pink-500',
            stats: {
                users: '100K+',
                rating: '4.9/5',
                performance: '99.8%'
            }
        },
        {
            id: 3,
            title: t('projectsPage.projects.analytics.title'),
            description: t('projectsPage.projects.analytics.description'),
            category: 'web',
            categoryLabel: t('projectsPage.projects.analytics.category'),
            tags: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
            gradient: 'from-green-500 to-teal-500',
            stats: {
                users: '25K+',
                rating: '4.7/5',
                performance: '99.5%'
            }
        },
        {
            id: 4,
            title: t('projectsPage.projects.chatbot.title'),
            description: t('projectsPage.projects.chatbot.description'),
            category: 'ai',
            categoryLabel: t('projectsPage.projects.chatbot.category'),
            tags: ['Python', 'TensorFlow', 'NLP', 'GPT'],
            gradient: 'from-orange-500 to-red-500',
            stats: {
                users: '75K+',
                rating: '4.8/5',
                performance: '99.7%'
            }
        },
        {
            id: 5,
            title: t('projectsPage.projects.cloud.title'),
            description: t('projectsPage.projects.cloud.description'),
            category: 'cloud',
            categoryLabel: t('projectsPage.projects.cloud.category'),
            tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
            gradient: 'from-blue-500 to-indigo-500',
            stats: {
                users: '200+',
                rating: '5.0/5',
                performance: '99.99%'
            }
        },
        {
            id: 6,
            title: t('projectsPage.projects.blockchain.title'),
            description: t('projectsPage.projects.blockchain.description'),
            category: 'web',
            categoryLabel: t('projectsPage.projects.blockchain.category'),
            tags: ['Solidity', 'Web3.js', 'Ethereum', 'MetaMask'],
            gradient: 'from-yellow-500 to-orange-500',
            stats: {
                users: '30K+',
                rating: '4.9/5',
                performance: '99.6%'
            }
        },
        {
            id: 7,
            title: t('projectsPage.projects.fintech.title'),
            description: t('projectsPage.projects.fintech.description'),
            category: 'mobile',
            categoryLabel: t('projectsPage.projects.fintech.category'),
            tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Plaid'],
            gradient: 'from-emerald-500 to-cyan-500',
            stats: {
                users: '150K+',
                rating: '4.8/5',
                performance: '99.9%'
            }
        },
        {
            id: 8,
            title: t('projectsPage.projects.iot.title'),
            description: t('projectsPage.projects.iot.description'),
            category: 'cloud',
            categoryLabel: t('projectsPage.projects.iot.category'),
            tags: ['IoT', 'MQTT', 'Azure', 'React'],
            gradient: 'from-violet-500 to-purple-500',
            stats: {
                users: '10K+',
                rating: '4.7/5',
                performance: '99.4%'
            }
        },
        {
            id: 9,
            title: t('projectsPage.projects.education.title'),
            description: t('projectsPage.projects.education.description'),
            category: 'web',
            categoryLabel: t('projectsPage.projects.education.category'),
            tags: ['Next.js', 'WebRTC', 'MongoDB', 'Socket.io'],
            gradient: 'from-rose-500 to-pink-500',
            stats: {
                users: '80K+',
                rating: '4.9/5',
                performance: '99.7%'
            }
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectsSchema),
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
                        <Smartphone className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/25 float" style={{ animationDelay: '2s' }} />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm text-foreground/80">
                                    {t('projectsPage.badge')}
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 fade-in">
                                <span className="block mb-2">{t('projectsPage.title1')}</span>
                                <span className="gradient-text">{t('projectsPage.title2')}</span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
                                {t('projectsPage.subtitle')}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.3s' }}>
                                <div className="glass rounded-xl p-4">
                                    <div className="text-3xl font-bold gradient-text mb-1">500+</div>
                                    <div className="text-sm text-foreground/60">{t('projectsPage.stats.completed')}</div>
                                </div>
                                <div className="glass rounded-xl p-4">
                                    <div className="text-3xl font-bold gradient-text mb-1">200+</div>
                                    <div className="text-sm text-foreground/60">{t('projectsPage.stats.clients')}</div>
                                </div>
                                <div className="glass rounded-xl p-4">
                                    <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                                    <div className="text-sm text-foreground/60">{t('projectsPage.stats.satisfaction')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                </section>

                {/* Filter Section */}
                <section className="py-12 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4 fade-in">
                                {categories.map((category, index) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift ${activeFilter === category.id
                                            ? 'bg-primary text-primary-foreground glow-primary'
                                            : 'glass hover:border-primary/30'
                                            }`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <category.icon className="w-5 h-5" />
                                        {category.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-12 pb-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="group glass rounded-xl overflow-hidden hover-lift fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Project Image/Gradient */}
                                        <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                                            {/* Hover Actions */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex gap-4">
                                                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                                                        <ExternalLink className="w-5 h-5 text-white" />
                                                    </button>
                                                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                                                        <Github className="w-5 h-5 text-white" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                                                    {project.categoryLabel}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-foreground/70 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-foreground/10">
                                                <div className="text-center">
                                                    <div className="text-sm font-bold text-primary">{project.stats.users}</div>
                                                    <div className="text-xs text-foreground/60">{t('projectsPage.projectStats.users')}</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm font-bold text-primary">{project.stats.rating}</div>
                                                    <div className="text-xs text-foreground/60">{t('projectsPage.projectStats.rating')}</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm font-bold text-primary">{project.stats.performance}</div>
                                                    <div className="text-xs text-foreground/60">{t('projectsPage.projectStats.uptime')}</div>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* No Results */}
                            {filteredProjects.length === 0 && (
                                <div className="text-center py-20">
                                    <div className="glass rounded-2xl p-12 max-w-md mx-auto">
                                        <Filter className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">{t('projectsPage.noResults.title')}</h3>
                                        <p className="text-foreground/70">{t('projectsPage.noResults.description')}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="glass rounded-2xl p-8 md:p-12 text-center hover-lift fade-in">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                                    {t('projectsPage.cta.title')}
                                </h2>
                                <p className="text-lg text-foreground/70 mb-8">
                                    {t('projectsPage.cta.description')}
                                </p>
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                                >
                                    {t('projectsPage.cta.button')}
                                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
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
