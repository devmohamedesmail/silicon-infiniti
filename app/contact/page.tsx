'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import LanguageSwitcher from '@/components/ui/language-switcher';

export default function ContactPage() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // JSON-LD structured data for ContactPage
    const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Silicon Infiniti",
        description: "Get in touch with us to discuss your project",
        url: "https://siliconinfiniti.com/contact",
        mainEntity: {
            "@type": "Organization",
            name: "Silicon Infiniti",
            email: "hello@siliconinfiniti.com",
            telephone: "+966501234567",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressCountry: "SA",
            },
        },
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: t('contact.info.email.label'),
            value: t('contact.info.email.value'),
            href: 'mailto:hello@siliconinfiniti.com'
        },
        {
            icon: Phone,
            label: t('contact.info.phone.label'),
            value: t('contact.info.phone.value'),
            href: 'tel:+966501234567'
        },
        {
            icon: MapPin,
            label: t('contact.info.location.label'),
            value: t('contact.info.location.value'),
            href: 'https://maps.google.com'
        },
        {
            icon: Clock,
            label: t('contact.info.hours.label'),
            value: t('contact.info.hours.value'),
            href: null
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPageSchema),
                }}
            />
            <div>
                <Navbar />

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/30 float" style={{ animationDelay: '0s' }} />
                        <MessageSquare className="absolute top-1/3 right-1/3 w-8 h-8 text-primary/20 float" style={{ animationDelay: '1s' }} />
                        <Mail className="absolute bottom-1/3 left-1/3 w-7 h-7 text-primary/25 float" style={{ animationDelay: '2s' }} />
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm text-foreground/80">
                                    {t('contact.badge')}
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 fade-in">
                                <span className="block mb-2">{t('contact.title1')}</span>
                                <span className="gradient-text">{t('contact.title2')}</span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
                                {t('contact.subtitle')}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                </section>

                {/* Contact Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                            {/* Contact Form */}
                            <div className="fade-in">
                                <div className="glass rounded-2xl p-8 hover-lift">
                                    <h2 className="text-3xl font-bold mb-6 gradient-text">
                                        {t('contact.form.title')}
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                {t('contact.form.name')}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg glass bg-background/50 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder={t('contact.form.namePlaceholder')}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                {t('contact.form.email')}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg glass bg-background/50 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder={t('contact.form.emailPlaceholder')}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                {t('contact.form.phone')}
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg glass bg-background/50 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder={t('contact.form.phonePlaceholder')}
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                {t('contact.form.subject')}
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg glass bg-background/50 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                                placeholder={t('contact.form.subjectPlaceholder')}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                {t('contact.form.message')}
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-lg glass bg-background/50 border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                                placeholder={t('contact.form.messagePlaceholder')}
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:glow-primary transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>

                                        {/* Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="p-4 rounded-lg glass border border-primary/30 bg-primary/10">
                                                <p className="text-primary text-center">{t('contact.form.success')}</p>
                                            </div>
                                        )}
                                        {submitStatus === 'error' && (
                                            <div className="p-4 rounded-lg glass border border-red-500/30 bg-red-500/10">
                                                <p className="text-red-500 text-center">{t('contact.form.error')}</p>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
                                <div className="glass rounded-2xl p-8 hover-lift">
                                    <h2 className="text-3xl font-bold mb-6 gradient-text">
                                        {t('contact.info.title')}
                                    </h2>

                                    <div className="space-y-6">
                                        {contactInfo.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 rounded-lg glass hover:border-primary/30 transition-all duration-300 group"
                                            >
                                                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                    <item.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                            className="text-foreground hover:text-primary transition-colors"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-foreground">{item.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="glass rounded-2xl p-8 hover-lift">
                                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                                        {t('contact.social.title')}
                                    </h3>
                                    <p className="text-foreground/70 mb-6">
                                        {t('contact.social.description')}
                                    </p>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Github, href: '#' },
                                            { icon: Linkedin, href: '#' },
                                            { icon: Twitter, href: '#' }
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-lg glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                                            >
                                                <social.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                <LanguageSwitcher />
            </div>
        </>
    );
}
