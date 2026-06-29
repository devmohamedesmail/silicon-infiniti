import {
    Code,
    Smartphone,
    ShoppingCart,
    Briefcase,
    Palette,
    Wrench
} from 'lucide-react';
export const services = [
    {
        icon: Code,
        key: 'web',
        gradient: 'from-cyan-500 to-blue-500',
        features: ['responsive', 'performance', 'seo', 'security']
    },
    {
        icon: Smartphone,
        key: 'mobile',
        gradient: 'from-purple-500 to-pink-500',
        features: ['native', 'crossPlatform', 'ui', 'offline']
    },
    {
        icon: ShoppingCart,
        key: 'ecommerce',
        gradient: 'from-emerald-500 to-green-500',
        features: ['stores', 'payments', 'inventory', 'orders']
    },
    {
        icon: Briefcase,
        key: 'business',
        gradient: 'from-indigo-500 to-violet-500',
        features: ['erp', 'crm', 'dashboard', 'automation']
    },
    {
        icon: Palette,
        key: 'design',
        gradient: 'from-pink-500 to-rose-500',
        features: ['ui', 'ux', 'branding', 'prototype']
    },
    {
        icon: Wrench,
        key: 'support',
        gradient: 'from-amber-500 to-orange-500',
        features: ['maintenance', 'updates', 'monitoring', 'backup']
    }
];