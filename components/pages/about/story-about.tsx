import React from 'react'
import { useTranslation } from 'react-i18next'
import { Target, Eye } from 'lucide-react';


export default function StoryAbout() {
    const { t } = useTranslation()
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="glass rounded-2xl p-8 md:p-12 hover-lift fade-in">
                        <h2 className="text-4xl font-bold mb-6 gradient-text">
                            {t('aboutPage.story.title')}
                        </h2>
                        <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                            {t('aboutPage.story.description')}
                        </p>

                        {/* Mission & Vision */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{t('aboutPage.story.mission.title')}</h3>
                                </div>
                                <p className="text-foreground/70">
                                    {t('aboutPage.story.mission.description')}
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{t('aboutPage.story.vision.title')}</h3>
                                </div>
                                <p className="text-foreground/70">
                                    {t('aboutPage.story.vision.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
