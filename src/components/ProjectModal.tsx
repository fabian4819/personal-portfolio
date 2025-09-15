import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import type { Project } from '@/types/project'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  
  if (!project) return null

  // Create media array with video and images
  const mediaItems: Array<{ type: 'video' | 'image'; src: string; poster?: string }> = []
  
  if (project.video) {
    mediaItems.push({ type: 'video', src: project.video, poster: project.image })
  }
  
  // Add all images (either from images array or single image)
  if (project.images && project.images.length > 0) {
    project.images.forEach(imgSrc => {
      mediaItems.push({ type: 'image', src: imgSrc })
    })
  } else if (project.image) {
    mediaItems.push({ type: 'image', src: project.image })
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

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
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute right-4 top-4 hover:bg-white/10 z-10"
                >
                  <X className="h-4 w-4" />
                </Button>

                <h2 className="text-3xl font-bold mb-6 gradient-text pr-12">{project.title}</h2>

                {/* Media Gallery */}
                {mediaItems.length > 0 && (
                  <div className="mb-6 relative">
                    <div className="relative bg-black/20 rounded-lg overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentMediaIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                          className="flex justify-center items-center p-4"
                          style={{ minHeight: '300px', maxHeight: '500px' }}
                        >
                          {mediaItems[currentMediaIndex]?.type === 'video' ? (
                            <video
                              controls
                              autoPlay
                              muted
                              loop
                              className="max-w-full max-h-full object-contain"
                              poster={mediaItems[currentMediaIndex].poster}
                              preload="auto"
                              key={`video-${currentMediaIndex}`}
                              style={
                                (project.id === 'warasin' || project.id === 'kkn-village-websites' || project.id === 'mallvest' || project.id === 'trustbridge' || project.id === 'perdana-property' || project.id === 'roetix' || project.id === 'novatix')
                                  ? { 
                                      maxWidth: '700px',
                                      maxHeight: '400px',
                                      width: 'auto', 
                                      height: 'auto' 
                                    }
                                  : { 
                                      maxWidth: '400px',
                                      maxHeight: '450px',
                                      width: 'auto', 
                                      height: 'auto' 
                                    }
                              }
                            >
                              <source src={mediaItems[currentMediaIndex].src} type="video/quicktime" />
                              <source src={mediaItems[currentMediaIndex].src.replace('.mov', '.mp4')} type="video/mp4" />
                              <p className="p-4 text-center text-muted-foreground">
                                Your browser doesn't support video playback.
                              </p>
                            </video>
                          ) : (
                            <img
                              src={mediaItems[currentMediaIndex]?.src}
                              alt={`${project.title} - ${currentMediaIndex + 1}`}
                              className="max-w-full max-h-full object-contain"
                              style={
                                (project.id === 'warasin' || project.id === 'kkn-village-websites' || project.id === 'mallvest' || project.id === 'trustbridge' || project.id === 'perdana-property' || project.id === 'roetix' || project.id === 'novatix')
                                  ? { 
                                      maxWidth: '700px',
                                      maxHeight: '400px',
                                      width: 'auto', 
                                      height: 'auto' 
                                    }
                                  : { 
                                      maxWidth: '400px',
                                      maxHeight: '450px',
                                      width: 'auto', 
                                      height: 'auto' 
                                    }
                              }
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      {mediaItems.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevMedia}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextMedia}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                          >
                            <ChevronRight className="h-6 w-6" />
                          </Button>
                        </>
                      )}

                      {/* Media counter */}
                      {mediaItems.length > 1 && (
                        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {currentMediaIndex + 1} / {mediaItems.length}
                        </div>
                      )}
                    </div>

                    {/* Media indicators */}
                    {mediaItems.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {mediaItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentMediaIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentMediaIndex
                                ? 'bg-blue-500 scale-110'
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {project.technologies && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-muted/20 rounded-full text-sm border border-border/50 hover:bg-muted/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}