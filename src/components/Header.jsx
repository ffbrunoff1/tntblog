import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Search, BookOpen, Layers, Building2, Home } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Geossintéticos', href: '/categoria/geossinteticos', icon: Layers },
    { name: 'Infraestrutura', href: '/categoria/infraestrutura', icon: Building2 },
    { name: 'Sustentabilidade', href: '/categoria/sustentabilidade', icon: BookOpen },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <Layers className={`w-7 h-7 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold gradient-text ${
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
                TNT BLOG
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-slate-600' : 'text-slate-700'
              }`}>
                Geossintéticos & Infraestrutura
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      location.pathname === item.href
                        ? 'bg-blue-600 text-white shadow-lg'
                        : isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-white/80'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-white/80'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-white/80' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-white/80'
              }`}
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-700 hover:bg-white/80' 
                : 'text-slate-700 hover:bg-white/80'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-white/80'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 w-full"
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">Buscar</span>
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}