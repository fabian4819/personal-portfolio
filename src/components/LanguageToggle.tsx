import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/contexts/LanguageContext"

export function LanguageToggle() {
  const { language, switchLanguage } = useLanguage()

  return (
    <motion.div 
      className="flex gap-1 bg-muted/20 rounded-full p-1 backdrop-blur-sm border border-white/10"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {(['en', 'id'] as Language[]).map((lang) => (
        <motion.div key={lang} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={language === lang ? "default" : "ghost"}
            size="sm"
            onClick={() => switchLanguage(lang)}
            className={`text-xs px-3 py-1 h-8 transition-all duration-300 ${
              language === lang 
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                : "hover:bg-white/10 text-muted-foreground hover:text-white"
            }`}
          >
            {lang.toUpperCase()}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}