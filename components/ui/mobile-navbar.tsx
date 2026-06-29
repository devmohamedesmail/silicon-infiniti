import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './logo'


export default function MobileNavbar({ navLinks, t }: { navLinks: any[], t: any }) {
    const [open, setOpen] = useState(false)
  return (
     <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] md:hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg">

                <Logo />
                

                {/* Toggle Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className='group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-orange-600 hover:border-orange-500 hover:scale-105'
                >
                    {open ? (
                        <FaTimes size={20} />
                    ) : (
                        <FaBars size={20} />
                    )}

                    <span className='absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                </button>

            </div>

            {/* Dropdown Menu */}
            <div
                className={`
          mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl
          transition-all duration-300 origin-top
          ${open ? "max-h-[400px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}
        `}
            >
                <ul className="flex flex-col p-5 gap-3">

                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}

                    {/* CTA Button */}
                    <li className="pt-2">
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="block text-center px-5 py-3 rounded-2xl bg-orange-600 text-white font-semibold hover:scale-[1.02] transition-all"
                        >
                            {t('nav.lets-chat')}
                        </Link>
                    </li>

                </ul>
            </div>

        </div>
  )
}
