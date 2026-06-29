import { ArrowRight, Layers, Users, TrendingUp, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function ProcessSection() {
  const { t } = useTranslation();

  const process = [
    { icon: Users, key: 'discovery' },
    { icon: Layers, key: 'planning' },
    { icon: Code, key: 'development' },
    { icon: TrendingUp, key: 'launch' }
  ];

  
  return (
    <section className="py-20 relative bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('servicesPage.process.title')}
            </h2>
            <p className="text-lg text-foreground/70">
              {t('servicesPage.process.subtitle')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.key}
                className="relative fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-xl p-6 text-center hover-lift">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="p-4 rounded-lg bg-primary/10 w-fit mx-auto mb-4 mt-2">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">
                    {t(`servicesPage.process.steps.${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70">
                    {t(`servicesPage.process.steps.${step.key}.description`)}
                  </p>
                </div>

                {/* Arrow (not on last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
