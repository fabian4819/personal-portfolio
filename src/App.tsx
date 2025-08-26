import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from "@/hooks/useLanguage"
import { translations } from "@/constants/translations"
import { LanguageToggle } from "@/components/LanguageToggle"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { FloatingElements } from "@/components/FloatingElements"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail, ExternalLink, Code2, Rocket, Zap, Globe, Cpu, Database } from 'lucide-react'

function App() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    document.documentElement.className = 'dark'
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b border-border/40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ 
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(59,130,246,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            F
          </motion.div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.a 
                  key={key} 
                  href={`#${key}`} 
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {value}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
            <LanguageToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="hero" 
        className="pt-24 pb-12 px-6 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div className="relative" variants={itemVariants}>
            {/* Animated background glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4"
              variants={itemVariants}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {t.hero.title}
              </motion.span>
            </motion.h1>

            <motion.h2 
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
              variants={itemVariants}
            >
              {t.hero.subtitle}
            </motion.h2>

            <motion.p 
              className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                  </motion.div>
                  {t.hero.cta}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border/50 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t.hero.contact}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {t.about.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 px-6 bg-muted/5 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, color: "blue", service: t.services.web2, delay: 0 },
              { icon: Cpu, color: "purple", service: t.services.web3, delay: 0.2 },
              { icon: Database, color: "green", service: t.services.fullstack, delay: 0.4 }
            ].map(({ icon: Icon, color, service, delay }, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb(${
                      color === 'blue' ? '59, 130, 246' :
                      color === 'purple' ? '168, 85, 247' :
                      '16, 185, 129'
                    }), rgb(${
                      color === 'blue' ? '37, 99, 235' :
                      color === 'purple' ? '147, 51, 234' :
                      '5, 150, 105'
                    }))`
                  }}
                />
                
                <Card className="relative bg-card/50 border-border/50 backdrop-blur-sm group-hover:bg-card/70 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className={`mb-6 mx-auto w-16 h-16 bg-gradient-to-br from-${color}-500/20 to-${color === 'blue' ? 'cyan' : color === 'purple' ? 'pink' : 'emerald'}-500/20 rounded-2xl flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: `0 0 30px rgb(${
                          color === 'blue' ? '59, 130, 246' :
                          color === 'purple' ? '168, 85, 247' :
                          '16, 185, 129'
                        }, 0.3)`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`h-8 w-8 text-${color}-400`} />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <div className="space-y-12">
            {/* Web3 Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">{t.projects.web3}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-purple-400" />
                      <h4 className="text-xl font-semibold">DeFi Protocol</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {language === 'en' 
                        ? 'Decentralized finance protocol with yield farming and staking capabilities.'
                        : 'Protokol keuangan terdesentralisasi dengan kemampuan yield farming dan staking.'
                      }
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        {t.projects.viewProject}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code2 className="mr-2 h-3 w-3" />
                        {t.projects.viewCode}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="h-5 w-5 text-blue-400" />
                      <h4 className="text-xl font-semibold">NFT Marketplace</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {language === 'en'
                        ? 'Full-featured NFT marketplace with minting, trading, and auction features.'
                        : 'Marketplace NFT lengkap dengan fitur minting, trading, dan auction.'
                      }
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        {t.projects.viewProject}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code2 className="mr-2 h-3 w-3" />
                        {t.projects.viewCode}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Web2 Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">{t.projects.web2}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="h-5 w-5 text-green-400" />
                      <h4 className="text-xl font-semibold">E-Commerce Platform</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {language === 'en'
                        ? 'Full-stack e-commerce solution with payment integration and admin dashboard.'
                        : 'Solusi e-commerce full-stack dengan integrasi pembayaran dan dashboard admin.'
                      }
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        {t.projects.viewProject}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code2 className="mr-2 h-3 w-3" />
                        {t.projects.viewCode}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="group hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Rocket className="h-5 w-5 text-orange-400" />
                      <h4 className="text-xl font-semibold">SaaS Dashboard</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {language === 'en'
                        ? 'Modern analytics dashboard with real-time data visualization and reporting.'
                        : 'Dashboard analytics modern dengan visualisasi data real-time dan reporting.'
                      }
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        {t.projects.viewProject}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Code2 className="mr-2 h-3 w-3" />
                        {t.projects.viewCode}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6 bg-muted/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.skills.title}
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.skills.web2, color: 'blue', skills: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'] },
              { title: t.skills.web3, color: 'purple', skills: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'IPFS', 'MetaMask'] },
              { title: t.skills.tools, color: 'green', skills: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel', 'MongoDB'] }
            ].map(({ title, color, skills }, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.h3 
                      className={`text-xl font-semibold mb-4 text-${color}-400`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className={`px-3 py-1 bg-${color}-500/10 text-${color}-400 rounded-full text-sm border border-${color}-500/20 cursor-pointer`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -2,
                            boxShadow: `0 5px 15px rgb(${
                              color === 'blue' ? '59, 130, 246' :
                              color === 'purple' ? '168, 85, 247' :
                              '16, 185, 129'
                            }, 0.3)`
                          }}
                          whileTap={{ scale: 0.95 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.contact.title}
          </motion.h2>
          
          <motion.h3 
            className="text-2xl font-semibold mb-6 text-muted-foreground"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.contact.subtitle}
          </motion.h3>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.contact.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
              >
                <Mail className="mr-2 h-4 w-4" />
                {t.contact.cta}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[GitHubLogoIcon, LinkedInLogoIcon, Mail].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-border/50 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Animated background elements for contact section */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border border-purple-500/20 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/40">
        <div className="container mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Fabian. {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
