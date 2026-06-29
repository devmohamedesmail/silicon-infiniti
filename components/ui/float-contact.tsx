'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { contactInfo } from '@/data/contact-info';

export default function FloatContact() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">

            {contactInfo.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('https') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`
                        w-12 h-12 rounded-full ${item.bg}
                        flex items-center justify-center
                        text-white shadow-lg
                        transition-all duration-300
                        hover:scale-110
                        ${
                            open
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4 pointer-events-none'
                        }
                    `}
                    style={{
                        transitionDelay: open ? `${index * 70}ms` : '0ms',
                    }}
                >
                    <item.icon size={22} />
                </a>
            ))}

            <button
                onClick={() => setOpen(!open)}
                className="
                    w-14 h-14 rounded-full
                    bg-primary text-black
                    shadow-xl
                    flex items-center justify-center
                    transition-transform duration-300
                    hover:scale-110
                "
            >
                {/* <X
                    size={24}
                    className={`transition-transform duration-300 ${
                        open ? 'rotate-0' : 'rotate-45'
                    }`}
                /> */}
                <MessageCircle />
            </button>
        </div>
    );
}