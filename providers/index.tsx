import I18nProvider from '@/context/i18n-provider'
import React from 'react'

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <I18nProvider>{children}</I18nProvider>
  )
}
