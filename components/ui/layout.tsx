import React from 'react'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import LanguageSwitcher from '@/components/ui/language-switcher'
import FloatContact from '@/components/ui/float-contact'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <LanguageSwitcher />
            <FloatContact />
        </div>
    )
}
