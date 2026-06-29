import React from 'react'
import Logo from './logo'
import Link from 'next/link'

export default function DestopNavbar({navLinks , t}:any) {
    console.log("navLinks",navLinks)
  return (
        <div className='hidden md:flex items-center justify-between fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl px-6 py-4 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)]'>

                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <Logo />
                    
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className='flex items-center gap-2'>

                        {navLinks.map((item:any, index:any) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className='relative px-5 py-3 rounded-2xl text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/5 group'
                                >
                                    {item.title}

                                    {/* Hover Line */}
                                    <span className='absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-8 rounded-full'></span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>

                {/* CTA Button */}
                <div>
                    <Link
                        href="#contact"
                        className='relative overflow-hidden px-8 py-3 rounded-2xl bg-primary text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]'
                    >
                        <span className='relative z-10'>
                            {t('nav.getStarted')}
                        </span>

                        {/* Glow Effect */}
                        <span className='absolute inset-0 bg-gradient-to-r from-bg-primary to-bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300'></span>
                    </Link>
                </div>

            </div>
  )
}
