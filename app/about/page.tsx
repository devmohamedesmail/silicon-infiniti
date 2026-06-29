'use client';

import React from 'react';
import { Sparkles, Target, Eye, Lightbulb, Award, Users, Heart, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Layout from '@/components/ui/layout';
import HeroAbout from '@/components/pages/about/hero-about';
import StoryAbout from '@/components/pages/about/story-about';
import ValuesAbout from '@/components/pages/about/values-about';
import StatisticsAbout from '@/components/pages/about/statistics-about';
import CTAabout from '@/components/pages/about/cta-about';

export default function About() {
    const { t } = useTranslation();

    // JSON-LD structured data for AboutPage
    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Silicon Infiniti",
        description: "Learn about Silicon Infiniti's story, vision, mission, and core values.",
        url: "https://siliconinfiniti.com/about",
        mainEntity: {
            "@type": "Organization",
            name: "Silicon Infiniti",
            description: "Innovative software solutions company",
            foundingDate: "2014",
            numberOfEmployees: "50+",
        },
    };





    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutPageSchema),
                }}
            />
            <Layout>
                <HeroAbout />
                <StoryAbout />
                <ValuesAbout />
                <StatisticsAbout />
                <CTAabout />
            </Layout>
        </>
    );
}
