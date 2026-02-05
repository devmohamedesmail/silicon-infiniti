'use client';

import React from 'react';
import { Code2, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: t('footer.company.aboutUs'), href: '#about' },
      { name: t('footer.company.services'), href: '#services' },
      { name: t('footer.company.projects'), href: '#projects' },
      { name: t('footer.company.careers'), href: '#careers' },
    ],
    services: [
      { name: t('footer.services.web'), href: '#' },
      { name: t('footer.services.mobile'), href: '#' },
      { name: t('footer.services.cloud'), href: '#' },
      { name: t('footer.services.ai'), href: '#' },
    ],
    support: [
      { name: t('footer.support.contact'), href: '#contact' },
      { name: t('footer.support.docs'), href: '#' },
      { name: t('footer.support.faq'), href: '#' },
      { name: t('footer.support.privacy'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="relative bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code2 className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 blur-xl bg-primary/30" />
              </div>
              <span className="text-2xl font-bold gradient-text">Silicon Infiniti</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              {t('footer.tagline')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@siliconinfiniti.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">{t('footer.support.title')}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {currentYear} {t('footer.copyright')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
