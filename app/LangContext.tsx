'use client'

import { createContext, useContext, useState } from 'react'
import { LangKey } from '../lib/translations'

type LangContextType = {
  lang: LangKey
  setLang: (lang: LangKey) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {}
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LangKey>('en')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}