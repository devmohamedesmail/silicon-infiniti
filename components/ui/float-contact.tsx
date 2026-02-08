'use client';

import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X, ChevronUp } from 'lucide-react';

export default function FloatContact() {
    const [isOpen, setIsOpen] = useState(false);

    const contactOptions = [
        {
            icon: Phone,
            label: 'Phone',
            href: 'tel:+1234567890',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            href: 'https://wa.me/1234567890',
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:from-green-600 hover:to-green-700'
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:info@siliconinfiniti.com',
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:from-purple-600 hover:to-purple-700'
        }
    ];

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-3">
            {/* Contact Options */}
            <div className={`flex flex-col-reverse gap-3 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {contactOptions.map((option, index) => (
                    <a
                        key={option.label}
                        href={option.href}
                        target={option.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={option.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className={`group relative flex items-center gap-3 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                        style={{
                            transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                        }}
                    >
                        {/* Label */}
                        <div className="glass rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-sm font-medium">{option.label}</span>
                        </div>

                        {/* Icon Button */}
                        <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${option.color} ${option.hoverColor} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                            <option.icon className="w-6 h-6 text-white" />

                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${option.color} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                        </div>
                    </a>
                ))}
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group ${isOpen ? 'rotate-180' : ''}`}
            >
                {/* Animated Icon */}
                <div className="relative">
                    <ChevronUp className={`w-6 h-6 text-primary-foreground transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                    <X className={`w-6 h-6 text-primary-foreground absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>

                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-primary blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Notification Badge */}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse" />
                )}
            </button>

            {/* Tooltip */}
            {!isOpen && (
                <div className="absolute left-full ml-4 bottom-0 glass rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    <span className="text-sm font-medium">Contact Us</span>
                </div>
            )}
        </div>
    );
}
