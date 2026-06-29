import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function CTAabout() {
    const { t } = useTranslation()
    return (
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
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                        >
                            {t('aboutPage.cta.button')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
