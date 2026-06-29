import React from 'react'
import { useTranslation } from 'react-i18next'
import { Lightbulb, Award, Users, Heart, TrendingUp, CheckCircle2 } from 'lucide-react';
export default function ValuesAbout() {
    const { t } = useTranslation();
    const values = [
        { icon: Lightbulb, key: 'innovation' },
        { icon: Award, key: 'excellence' },
        { icon: Users, key: 'collaboration' },
        { icon: CheckCircle2, key: 'integrity' },
        { icon: Heart, key: 'customer' },
        { icon: TrendingUp, key: 'growth' }
    ];
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                            {t('aboutPage.values.title')}
                        </h2>
                        <p className="text-lg text-foreground/70">
                            {t('aboutPage.values.subtitle')}
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={value.key}
                                className="glass rounded-xl p-6 hover-lift fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                                    <value.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {t(`aboutPage.values.items.${value.key}.title`)}
                                </h3>
                                <p className="text-foreground/70">
                                    {t(`aboutPage.values.items.${value.key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
