export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  images?: string[]
  video?: string
  technologies?: string[]
  icon: React.ComponentType<{ className?: string }>
  demoLink?: string
  codeLink?: string
}