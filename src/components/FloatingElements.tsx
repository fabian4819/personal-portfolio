import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Zap, Rocket, Globe, Terminal, Layers, GitBranch, Server } from 'lucide-react'

export function FloatingElements() {
  const elements = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%', color: 'text-blue-400/20' },
    { Icon: Cpu, delay: 1, x: '80%', y: '30%', color: 'text-purple-400/20' },
    { Icon: Database, delay: 2, x: '70%', y: '70%', color: 'text-cyan-400/20' },
    { Icon: Zap, delay: 3, x: '20%', y: '80%', color: 'text-yellow-400/20' },
    { Icon: Rocket, delay: 1.5, x: '50%', y: '15%', color: 'text-pink-400/20' },
    { Icon: Globe, delay: 2.5, x: '85%', y: '50%', color: 'text-green-400/20' },
    { Icon: Terminal, delay: 0.5, x: '15%', y: '50%', color: 'text-orange-400/20' },
    { Icon: Layers, delay: 3.5, x: '40%', y: '85%', color: 'text-indigo-400/20' },
    { Icon: GitBranch, delay: 4, x: '60%', y: '40%', color: 'text-red-400/20' },
    { Icon: Server, delay: 2, x: '30%', y: '60%', color: 'text-teal-400/20' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {elements.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -30, 0],
            x: [0, index % 2 === 0 ? 15 : -15, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + (index % 3) * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={35 + (index % 4) * 10} />
        </motion.div>
      ))}
    </div>
  )
}