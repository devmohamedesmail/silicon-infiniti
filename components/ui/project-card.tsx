import React from 'react'
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function ProjectCard({ project, index }: { project: any, index: number }) {
    const { t , i18n } = useTranslation();
    return (
        <div
            key={index}
            className="group glass rounded-xl overflow-hidden hover-lift fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Project Image Placeholder */}
            <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <Image src={project?.image} alt={project.title} className="w-full h-full object-cover" width={500} height={500} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                        <Link href={project.link} className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                            <ExternalLink className="w-5 h-5 text-white" />
                        </Link>
                        
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">
                    {i18n.language === 'ar' ? project.category_ar : project.category_en}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {i18n.language === 'ar' ? project.title_ar : project.title_en}
                </h3>
                <p className="text-foreground/70 mb-4">{i18n.language === 'ar' ? project.description_ar : project.description_en}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
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
    )
}
