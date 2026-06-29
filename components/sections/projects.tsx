'use client';

import { useTranslation } from 'react-i18next';
import ProjectCard from '../ui/project-card';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
    const { t } = useTranslation();

   
    return (
        <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <div className="inline-block px-4 py-2 rounded-full glass mb-4">
                        <span className="text-sm text-primary font-semibold">{t('projects.badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-3">
                        {t('projects.title1')}
                        <span className="block gradient-text">{t('projects.title2')}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.8s' }}>
                    <Link href="/projects" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105">
                        {t('projects.viewAll')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
