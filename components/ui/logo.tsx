import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div>
            <Link href="/" className='flex flex-col items-center gap-2'>
                <img src="/images/logo.png" alt="logo" className='w-20 h-12' />
                <span className='text-md font-bold gradient-text'>Silicon Infiniti</span>
            </Link>
        </div>
    )
}
