'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ui/project-card';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
    const { t } = useTranslation();

    // const projects = [
    //     {
    //         title: t('projects.items.ecommerce.title'),
    //         description: t('projects.items.ecommerce.description'),
    //         category: t('projects.items.ecommerce.category'),
    //         tags: ['React', 'Node.js', 'MongoDB'],
    //         gradient: 'from-cyan-500 to-blue-500',
    //     },
    //     {
    //         title: t('projects.items.healthcare.title'),
    //         description: t('projects.items.healthcare.description'),
    //         category: t('projects.items.healthcare.category'),
    //         tags: ['React Native', 'Firebase', 'AI'],
    //         gradient: 'from-purple-500 to-pink-500',
    //     },
    //     {
    //         title: t('projects.items.analytics.title'),
    //         description: t('projects.items.analytics.description'),
    //         category: t('projects.items.analytics.category'),
    //         tags: ['Vue.js', 'Python', 'PostgreSQL'],
    //         gradient: 'from-green-500 to-teal-500',
    //     },
    //     {
    //         title: t('projects.items.chatbot.title'),
    //         description: t('projects.items.chatbot.description'),
    //         category: t('projects.items.chatbot.category'),
    //         tags: ['Python', 'TensorFlow', 'NLP'],
    //         gradient: 'from-orange-500 to-red-500',
    //     },
    //     {
    //         title: t('projects.items.cloud.title'),
    //         description: t('projects.items.cloud.description'),
    //         category: t('projects.items.cloud.category'),
    //         tags: ['Docker', 'Kubernetes', 'AWS'],
    //         gradient: 'from-blue-500 to-indigo-500',
    //     },
    //     {
    //         title: t('projects.items.blockchain.title'),
    //         description: t('projects.items.blockchain.description'),
    //         category: t('projects.items.blockchain.category'),
    //         tags: ['Solidity', 'Web3.js', 'Ethereum'],
    //         gradient: 'from-yellow-500 to-orange-500',
    //     },
    // ];

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
                        // <div
                        //     key={index}
                        //     className="group glass rounded-xl overflow-hidden hover-lift fade-in"
                        //     style={{ animationDelay: `${index * 0.1}s` }}
                        // >
                        //     {/* Project Image Placeholder */}
                        //     <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        //         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        //         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        //             <div className="flex gap-4">
                        //                 <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                        //                     <ExternalLink className="w-5 h-5 text-white" />
                        //                 </button>
                        //                 <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                        //                     <Github className="w-5 h-5 text-white" />
                        //                 </button>
                        //             </div>
                        //         </div>
                        //     </div>

                        //     {/* Project Info */}
                        //     <div className="p-6">
                        //         <div className="text-xs text-primary font-semibold mb-2">
                        //             {project.category}
                        //         </div>
                        //         <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        //             {project.title}
                        //         </h3>
                        //         <p className="text-foreground/70 mb-4">{project.description}</p>

                        //         {/* Tags */}
                        //         <div className="flex flex-wrap gap-2">
                        //             {project.tags.map((tag, tagIndex) => (
                        //                 <span
                        //                     key={tagIndex}
                        //                     className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        //                 >
                        //                     {tag}
                        //                 </span>
                        //             ))}
                        //         </div>
                        //     </div>
                        // </div>
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
