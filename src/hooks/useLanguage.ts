import { useState, useEffect } from 'react'

export type Language = 'en' | 'id'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return { language, switchLanguage }
}