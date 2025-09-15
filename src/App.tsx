import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/constants/translations"
import { LanguageToggle } from "@/components/LanguageToggle"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { FloatingElements } from "@/components/FloatingElements"
import { ProjectModal } from "@/components/ProjectModal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail, Code2, Rocket, Globe, Cpu, Database, Menu, X } from 'lucide-react'
import type { Project } from '@/types/project'

function App() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.className = 'dark'
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('nav') && !target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Project data
  const projectsData = {
    web3: [
      {
        id: 'mallvest',
        title: language === 'en' ? 'Mallvest' : 'Mallvest',
        description: language === 'en'
          ? 'Platform to revolutionize mall investments through blockchain technology'
          : 'Platform untuk merevolusi investasi mall melalui teknologi blockchain',
        longDescription: language === 'en'
          ? 'Mallvest is revolutionizing mall investments through blockchain technology. Our platform allows users to tokenize, trade, and manage mall properties with unprecedented transparency and efficiency. By leveraging smart contracts and decentralized technology, we make real estate investment more accessible, liquid, and transparent for investors worldwide.'
          : 'Mallvest merevolusi investasi mall melalui teknologi blockchain. Platform kami memungkinkan pengguna untuk tokenisasi, trading, dan mengelola properti mall dengan transparansi dan efisiensi yang belum pernah ada sebelumnya. Dengan memanfaatkan smart contract dan teknologi terdesentralisasi, kami membuat investasi real estate lebih mudah diakses, likuid, dan transparan untuk investor di seluruh dunia.',
        image: '/assets/mallvest-1.png',
        images: ['/assets/mallvest-1.png', '/assets/mallvest-2.png'],
        video: '/assets/mallvest.mp4',
        technologies: ['Solidity', 'React', 'Web3.js', 'Node.js', 'MongoDB', 'Ethereum', 'Smart Contracts'],
        icon: Globe,
        demoLink: 'https://mallvest.demo.com',
        codeLink: 'https://github.com/fabian4819/mallvest'
      },
      {
        id: 'trustbridge',
        title: language === 'en' ? 'TrustBridge' : 'TrustBridge',
        description: language === 'en'
          ? 'Revolutionary cross-border payments using WhatsApp and Cardano blockchain'
          : 'Pembayaran lintas batas revolusioner menggunakan WhatsApp dan blockchain Cardano',
        longDescription: language === 'en'
          ? 'TrustBridge is a revolutionary cross-border payment platform that leverages WhatsApp messages and Cardano blockchain technology. Send money to anyone, anywhere, instantly and securely. The platform features an intuitive dashboard for managing transactions and seamless WhatsApp integration that allows users to initiate payments through familiar messaging interfaces. Built on Cardano for enhanced security and lower transaction fees.'
          : 'TrustBridge adalah platform pembayaran lintas batas revolusioner yang memanfaatkan pesan WhatsApp dan teknologi blockchain Cardano. Kirim uang ke siapa saja, di mana saja, secara instan dan aman. Platform ini menampilkan dashboard intuitif untuk mengelola transaksi dan integrasi WhatsApp yang mulus yang memungkinkan pengguna memulai pembayaran melalui antarmuka perpesanan yang familiar. Dibangun di atas Cardano untuk keamanan yang ditingkatkan dan biaya transaksi yang lebih rendah.',
        image: '/assets/trustbridge-1.png',
        images: ['/assets/trustbridge-1.png', '/assets/trustbridge-2.png'],
        video: '/assets/trustbridge.mp4',
        technologies: ['Cardano', 'Plutus', 'React', 'Node.js', 'WhatsApp API', 'TypeScript', 'Smart Contracts'],
        icon: Rocket,
        demoLink: 'https://trustbridge.demo.com',
        codeLink: 'https://github.com/fabian4819/trustbridge'
      }
    ],
    web2: [
      {
        id: 'warasin',
        title: language === 'en' ? 'Warasin' : 'Warasin',
        description: language === 'en'
          ? 'Mental health platform with emotional analyzer and smart features'
          : 'Platform website mental health untuk emotional analyzer dengan fitur pintar',
        longDescription: language === 'en'
          ? 'Warasin is a comprehensive mental health platform website designed for emotional analysis. Features include mood analyzer for tracking emotional states, smart journal for reflective writing, facial expression recognition technology, anonymous chatbot for safe conversations, and comprehensive monitoring & reporting tools for mental health professionals.'
          : 'Warasin adalah platform website mental health yang dirancang untuk emotional analyzer. Fiturnya terdiri dari mood analyzer untuk melacak kondisi emosi, smart journal untuk menulis reflektif, facial expression recognition, chatbot anonim untuk percakapan yang aman, dan tools monitoring & report yang komprehensif untuk profesional kesehatan mental.',
        image: '/assets/warasin-1.png',
        images: ['/assets/warasin-1.png', '/assets/warasin-2.png'],
        video: '/assets/warasin-1.mp4',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow.js', 'Socket.io', 'Chart.js'],
        icon: Database,
        demoLink: 'https://warasin.demo.com',
        codeLink: 'https://github.com/fabian4819/warasin'
      },
      {
        id: 'kkn-village-websites',
        title: language === 'en' ? 'KKN Village Profile Websites' : 'Website Profil Desa KKN',
        description: language === 'en'
          ? 'Three village profile websites for Ngadi, Dullah, and Labetawi villages'
          : 'Tiga website profil desa untuk Desa Ngadi, Dullah, dan Labetawi',
        longDescription: language === 'en'
          ? 'Community service project (KKN - Kuliah Kerja Nyata) creating three comprehensive village profile websites for Ngadi, Dullah, and Labetawi villages in Tual City, Maluku Province, Indonesia. Features include village profile videos, community podcasts, traditional cuisine showcase, village organizational structure, interactive village maps, village articles, BMI calculator, and comprehensive village information. These websites help preserve local culture and provide digital presence for remote villages.'
          : 'Proyek Kuliah Kerja Nyata (KKN) membuat tiga website profil desa yang komprehensif untuk Desa Ngadi, Dullah, dan Labetawi di Kota Tual, Provinsi Maluku, Indonesia. Fitur meliputi video profil desa, podcast bersama warga, showcase makanan khas, struktur organisasi desa, peta desa interaktif, artikel desa, kalkulator tes BMI, dan informasi lengkap mengenai desa. Website ini membantu melestarikan budaya lokal dan memberikan kehadiran digital untuk desa-desa terpencil.',
        image: '/assets/kkn-1.png',
        images: ['/assets/kkn-1.png', '/assets/kkn-2.png'],
        video: '/assets/kkn.mp4',
        technologies: ['Next.js', 'Tailwind CSS', 'Leaflet Maps', 'Strapi CMS', 'PostgreSQL', 'Vercel'],
        icon: Globe,
        demoLink: 'https://desa-ngadi.vercel.app',
        codeLink: 'https://github.com/fabian4819/kkn-village-websites'
      },
      {
        id: 'borobudur-explorer',
        title: language === 'en' ? 'Borobudur Explorer' : 'Borobudur Explorer',
        description: language === 'en'
          ? 'Mobile app for Borobudur temple tourism and cultural preservation'
          : 'Aplikasi mobile untuk wisata Candi Borobudur dan pelestarian budaya',
        longDescription: language === 'en'
          ? 'A mobile application created for the world wonder of Borobudur Temple. Features focus on navigation for tourists and cultural preservation with Borobudurpedia packaged as informative articles about the temple\'s history, architecture, and cultural significance.'
          : 'Aplikasi mobile yang dibuat untuk keajaiban dunia Candi Borobudur. Fiturnya berfokus pada navigasi untuk turis dan pelestarian budaya dengan adanya Borobudurpedia yang dikemas sebagai artikel informatif tentang sejarah, arsitektur, dan makna budaya candi.',
        image: '/assets/borobudur-1.jpeg',
        images: ['/assets/borobudur-1.jpeg', '/assets/borobudur-2.jpeg'],
        video: '/assets/borobudur.mp4',
        technologies: ['React Native', 'TypeScript', 'Firebase', 'Google Maps API', 'AsyncStorage'],
        icon: Globe,
        demoLink: 'https://play.google.com/store/apps/borobudur-explorer',
        codeLink: 'https://github.com/fabian4819/borobudur-explorer'
      },
      {
        id: 'gastreit',
        title: language === 'en' ? 'GASTREIT' : 'GASTREIT',
        description: language === 'en'
          ? 'Mobile app for gastric acid quality monitoring with doctor consultation'
          : 'Aplikasi mobile untuk pemantauan kualitas asam lambung dengan konsultasi dokter',
        longDescription: language === 'en'
          ? 'A mobile application created for monitoring patients\' gastric acid quality, equipped with gastric acid visualization features and doctor-patient consultation capabilities. Helps patients track their gastric health and connect with healthcare professionals.'
          : 'Aplikasi mobile yang dibuat untuk pemantauan kualitas asam lambung pasien dilengkapi dengan fitur visualisasi asam lambung dan konsultasi dokter & pasien. Membantu pasien melacak kesehatan lambung dan terhubung dengan tenaga medis.',
        image: '/assets/gastreit-1.jpeg',
        images: ['/assets/gastreit-1.jpeg', '/assets/gastreit-2.jpeg'],
        video: '/assets/gastreit.mp4',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js', 'Firebase'],
        icon: Database,
        demoLink: 'https://play.google.com/store/apps/gastreit',
        codeLink: 'https://github.com/fabian4819/gastreit'
      },
      {
        id: 'perdana-property',
        title: language === 'en' ? 'Perdana Property' : 'Perdana Property',
        description: language === 'en'
          ? 'Real estate marketing website for housing and boarding house assets'
          : 'Website pemasaran properti untuk asset perumahan dan kos-kosan',
        longDescription: language === 'en'
          ? 'Perdana Property is a comprehensive real estate marketing website designed to promote housing and boarding house assets. Features include detailed property information with pricing, area specifications, high-quality images, and financing schemes. The platform also includes WhatsApp integration for direct consultation with property agents, making it easy for potential buyers to get immediate assistance and information about available properties.'
          : 'Perdana Property adalah website pemasaran properti yang komprehensif untuk memasarkan asset perumahan dan kos-kosan. Fitur meliputi informasi detail mengenai properti dengan harga, luas area, gambar berkualitas tinggi, dan skema pembiayaan. Platform ini juga dilengkapi dengan integrasi WhatsApp untuk konsultasi langsung dengan agen properti, memudahkan calon pembeli mendapatkan bantuan dan informasi segera tentang properti yang tersedia.',
        image: '/assets/perdanaproperty-1.png',
        images: ['/assets/perdanaproperty-1.png', '/assets/perdanaproperty-2.png'],
        video: '/assets/perdanaproperty.mp4',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp API', 'MongoDB', 'Vercel'],
        icon: Globe,
        demoLink: 'https://perdanaproperty.demo.com',
        codeLink: 'https://github.com/fabian4819/perdana-property'
      },
      {
        id: 'roetix',
        title: language === 'en' ? 'Roetix' : 'Roetix',
        description: language === 'en'
          ? 'Comprehensive ticketing platform supporting both seating and seatless events'
          : 'Platform ticketing komprehensif yang mendukung event seating dan seatless',
        longDescription: language === 'en'
          ? 'Roetix is a comprehensive ticketing platform that supports both seating and seatless event configurations. The platform features multiple event management capabilities with detailed event information, interactive seat selection for seated events, integrated payment gateway, and complete payment processing within a single platform. Users can browse various events, view event details, select their preferred seats (for seated events), and complete purchases through secure payment processing.'
          : 'Roetix adalah platform ticketing komprehensif yang mendukung konfigurasi event seating dan seatless. Platform ini memiliki fitur manajemen multiple event dengan informasi detail event, pemilihan seat interaktif untuk event berseating, payment gateway terintegrasi, dan proses pembayaran lengkap dalam satu platform. User dapat browse berbagai event, melihat detail event, memilih seat yang diinginkan (untuk seated event), dan menyelesaikan pembelian melalui proses pembayaran yang aman.',
        image: '/assets/roetix-1.png',
        images: ['/assets/roetix-1.png', '/assets/roetix-2.png'],
        video: '/assets/roetix.mp4',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Socket.io', 'Tailwind CSS'],
        icon: Rocket,
        demoLink: 'https://roetix.demo.com',
        codeLink: 'https://github.com/fabian4819/roetix'
      },
      {
        id: 'novatix',
        title: language === 'en' ? 'NovaTix' : 'NovaTix',
        description: language === 'en'
          ? 'Concert and orchestra ticketing system with seat mapping and merchandise'
          : 'Sistem ticketing konser/orkestra dengan seatmap dan merchandise',
        longDescription: language === 'en'
          ? 'NovaTix is a specialized ticketing platform designed for concert and orchestra ticket sales. The platform allows buyers to freely select seats based on detailed seat maps, purchase merchandise, and complete full payment processing within a single integrated platform. Features include interactive seat mapping for optimal seat selection, merchandise integration for additional purchases, comprehensive payment gateway, and seamless user experience for concert and orchestra events.'
          : 'NovaTix adalah platform ticketing khusus yang dibuat untuk sistem penjualan ticket konser/orkestra. Platform ini memungkinkan pembeli untuk leluasa memilih tempat duduk berdasarkan seatmap yang detail, melakukan pembelian merchandise, dan pembayaran full dalam satu platform terintegrasi. Fitur meliputi seatmap interaktif untuk pemilihan seat optimal, integrasi merchandise untuk pembelian tambahan, payment gateway komprehensif, dan user experience yang seamless untuk event konser dan orkestra.',
        image: '/assets/novatix-1.png',
        images: ['/assets/novatix-1.png', '/assets/novatix-2.png'],
        video: '/assets/novatix.mp4',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'WebSocket', 'Bootstrap', 'Redis'],
        icon: Code2,
        demoLink: 'https://novatix.demo.com',
        codeLink: 'https://github.com/fabian4819/novatix'
      }
    ]
  }

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
            {/* Desktop Navigation */}
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

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[73px] left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-b border-border shadow-lg mobile-menu overflow-hidden"
          >
            <div className="px-6 py-6">
              <div className="flex flex-col space-y-4">
                {Object.entries(t.nav).map(([key, value], index) => (
                  <motion.a
                    key={key}
                    href={`#${key}`}
                    className="text-lg text-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/20 last:border-b-0 block"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.3
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {value}
                  </motion.a>
                ))}
                
                {/* Language Toggle in Mobile Menu */}
                <div className="pt-4 border-t border-border/20">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="pt-24 pb-12 px-6 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating gradient orbs for hero */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-400/30"
          animate={{
            x: [0, 20, 0],
            rotate: [0, -90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating dots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`hero-particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-blue-400/40' : i % 3 === 1 ? 'bg-purple-400/40' : 'bg-cyan-400/40'
              }`}
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${10 + (i % 5) * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="grid md:grid-cols-2 gap-8 items-center" variants={itemVariants}>
            {/* Left side - Text content */}
            <div className="text-center md:text-left">
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
                className="text-6xl md:text-8xl font-bold mb-4 relative"
                variants={itemVariants}
              >
                {/* Sparkles around title */}
                <motion.span
                  className="absolute -top-4 -left-4 text-2xl"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.span>
                <motion.span
                  className="absolute -top-6 -right-6 text-xl"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                >
                  ⭐
                </motion.span>
                <motion.span
                  className="absolute -bottom-4 -right-8 text-2xl"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.span>

                <motion.span
                  className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent inline-block relative"
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
                className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium relative inline-block"
                variants={itemVariants}
              >
                <motion.span
                  className="absolute -left-8 top-1/2 -translate-y-1/2 text-blue-400/50"
                  animate={{
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ▸
                </motion.span>
                {t.hero.subtitle}
                <motion.span
                  className="absolute -right-8 top-1/2 -translate-y-1/2 text-purple-400/50"
                  animate={{
                    x: [5, -5, 5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ◂
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed relative"
                variants={itemVariants}
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                    }}
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
                    onClick={() => {
                      const message = encodeURIComponent(
                        language === 'en'
                          ? "Hi Fabian! I'm interested in discussing a project with you. Could we talk about potential collaboration?"
                          : "Halo Fabian! Saya tertarik untuk mendiskusikan proyek dengan Anda. Bisakah kita berbicara tentang kemungkinan kolaborasi?"
                      )
                      window.open(`https://wa.me/6282232018289?text=${message}`, '_blank')
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t.hero.contact}
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Photo */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src="/assets/my-photo.jpeg"
                  alt="Fabian"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-border/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
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
                    backgroundImage: `linear-gradient(to right, rgb(${color === 'blue' ? '59, 130, 246' :
                        color === 'purple' ? '168, 85, 247' :
                          '16, 185, 129'
                      }), rgb(${color === 'blue' ? '37, 99, 235' :
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
                        boxShadow: `0 0 30px rgb(${color === 'blue' ? '59, 130, 246' :
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
            {/* Web2 Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-400">{t.projects.web2}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.web2.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm cursor-pointer overflow-hidden"
                      onClick={() => {
                        setSelectedProject(project)
                        setIsModalOpen(true)
                      }}
                    >
                      {project.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <project.icon className="h-5 w-5 text-blue-400" />
                          <h4 className="text-xl font-semibold">{project.title}</h4>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Web3 Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">{t.projects.web3}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.web3.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 bg-card/50 border-border/50 backdrop-blur-sm cursor-pointer overflow-hidden"
                      onClick={() => {
                        setSelectedProject(project)
                        setIsModalOpen(true)
                      }}
                    >
                      {project.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <project.icon className="h-5 w-5 text-purple-400" />
                          <h4 className="text-xl font-semibold">{project.title}</h4>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
                            boxShadow: `0 5px 15px rgb(${color === 'blue' ? '59, 130, 246' :
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
                onClick={() => {
                  const message = encodeURIComponent(
                    language === 'en'
                      ? "Hi Fabian! I'm interested in discussing a project with you. Could we talk about potential collaboration?"
                      : "Halo Fabian! Saya tertarik untuk mendiskusikan proyek dengan Anda. Bisakah kita berbicara tentang kemungkinan kolaborasi?"
                  )
                  window.open(`https://wa.me/6282232018289?text=${message}`, '_blank')
                }}
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
            {[
              { Icon: GitHubLogoIcon, href: "https://github.com/fabian4819" },
              { Icon: LinkedInLogoIcon, href: "https://www.linkedin.com/in/habibfabianfahlesi/" },
              { Icon: Mail, href: "mailto:bianfahlesi50@gmail.com" }
            ].map(({ Icon, href }, index) => (
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
                  onClick={() => window.open(href, '_blank')}
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

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
        project={selectedProject}
      />
    </div>
  )
}

export default App
