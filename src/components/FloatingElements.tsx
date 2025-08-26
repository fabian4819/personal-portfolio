import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Zap } from 'lucide-react'

export function FloatingElements() {
  const elements = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%' },
    { Icon: Cpu, delay: 1, x: '80%', y: '30%' },
    { Icon: Database, delay: 2, x: '70%', y: '70%' },
    { Icon: Zap, delay: 3, x: '20%', y: '80%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={40 + index * 10} />
        </motion.div>
      ))}
    </div>
  )
}