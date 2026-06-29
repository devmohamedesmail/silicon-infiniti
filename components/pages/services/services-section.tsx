import { services } from '@/data/services'
import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
    const { t } = useTranslation()
    return (
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
    )
}
