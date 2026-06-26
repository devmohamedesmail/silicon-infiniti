import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <div>
            <Link href="/" className='flex flex-col items-center gap-2'>
                <img src="/images/logo.png" alt="logo" className='w-fit h-16' />
                {/* <span className='text-md font-bold gradient-text'>Silicon Infiniti</span> */}
            </Link>
               {/* <span className='text-md font-bold gradient-text font-mokoto'>Silicon Infiniti</span> */}
        </div>
    )
}
