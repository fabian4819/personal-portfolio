import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import type { Project } from '@/types/project'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-lg shadow-2xl z-50 p-6"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>

            <h2 className="text-3xl font-bold mb-4 gradient-text">{project.title}</h2>

            {project.video ? (
              <div className="mb-6 rounded-lg overflow-hidden">
                <video
                  src={project.video}
                  controls
                  className="w-full h-auto"
                  poster={project.image}
                />
              </div>
            ) : project.image ? (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : null}

            <p className="text-lg text-muted-foreground mb-6">
              {project.longDescription || project.description}
            </p>

            {project.technologies && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted/20 rounded-full text-sm border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {project.demoLink && (
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  View Demo
                </Button>
              )}
              {project.codeLink && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.codeLink, '_blank')}
                >
                  View Code
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}