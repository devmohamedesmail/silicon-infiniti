import React from 'react'
import { useTranslation } from 'react-i18next'

export default function StatisticsAbout() {
    const { t } = useTranslation()


    const stats = [
        { number: '10+', key: 'years' },
        { number: '500+', key: 'projects' },
        { number: '200+', key: 'clients' },
        { number: '50+', key: 'team' },
        { number: '25+', key: 'countries' },
        { number: '98%', key: 'satisfaction' }
    ];
    return (
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
    )
}
