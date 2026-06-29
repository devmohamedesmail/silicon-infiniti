'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Logo from './logo';
import LangToggle from './lang-toggle';
import DestopNavbar from './destop-navbar';
import MobileNavbar from './mobile-navbar';

export default function Navbar() {
  const { t } = useTranslation();
  const navLinks = [
    { title: t('nav.home'), href: '/' },
    { title: t('nav.about'), href: '/about' },
    { title: t('nav.services'), href: '/services' },
    { title: t('nav.projects'), href: '/projects' },
    { title: t('nav.contact'), href: '/contact' },
  ];



  return (
    <div className='container m-auto text-white'>
      <DestopNavbar navLinks={navLinks} t={t} />
      <MobileNavbar navLinks={navLinks} t={t} />
    </div>
  );
}
