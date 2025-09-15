import { motion } from 'framer-motion'

interface FuturisticFIconProps {
  className?: string
  size?: number
}

export function FuturisticFIcon({ className = "", size = 32 }: FuturisticFIconProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{
        scale: 1.1,
        filter: "drop-shadow(0px 0px 8px rgb(59,130,246,0.8))"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#60a5fa", stopOpacity:1}} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle with gradient */}
        <circle 
          cx="32" 
          cy="32" 
          r="30" 
          fill="url(#primaryGradient)" 
          opacity="0.1" 
          stroke="url(#primaryGradient)" 
          strokeWidth="2"
        />
        
        {/* Main F letter */}
        <path 
          d="M20 16 L20 48 L24 48 L24 34 L40 34 L40 30 L24 30 L24 20 L44 20 L44 16 Z" 
          fill="url(#primaryGradient)" 
          filter="url(#glow)"
          stroke="url(#primaryGradient)" 
          strokeWidth="0.5"
        />
        
        {/* Futuristic accent lines */}
        <line x1="46" y1="18" x2="50" y2="18" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.8"/>
        <line x1="46" y1="22" x2="48" y2="22" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.6"/>
        <line x1="42" y1="32" x2="46" y2="32" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.8"/>
        <line x1="42" y1="36" x2="44" y2="36" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.6"/>
        
        {/* Corner tech details */}
        <circle cx="18" cy="18" r="1" fill="url(#primaryGradient)" opacity="0.8"/>
        <circle cx="18" cy="46" r="1" fill="url(#primaryGradient)" opacity="0.8"/>
        <circle cx="46" cy="46" r="1" fill="url(#primaryGradient)" opacity="0.8"/>
      </svg>
    </motion.div>
  )
}