import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        initial={{ top: '10%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        animate={{
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        initial={{ top: '60%', right: '10%' }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        initial={{ bottom: '20%', left: '30%' }}
      />

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
        }}
      />
    </div>
  )
}