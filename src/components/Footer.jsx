import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Layers,
  BookOpen,
  Users,
  Rss,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Geossintéticos', href: '/categoria/geossinteticos' },
    { name: 'Infraestrutura', href: '/categoria/infraestrutura' },
    { name: 'Sustentabilidade', href: '/categoria/sustentabilidade' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ]

  const categories = [
    { name: 'Aplicações', href: '/categoria/aplicacoes' },
    { name: 'Inovações', href: '/categoria/inovacoes' },
    { name: 'Normas', href: '/categoria/normas' },
    { name: 'Estudos de Caso', href: '/categoria/estudos-caso' },
    { name: 'Tutoriais', href: '/categoria/tutoriais' },
    { name: 'Webinars', href: '/categoria/webinars' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/tntblog', 
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/tntblog', 
      icon: Instagram,
      color: 'hover:text-pink-600'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/tntblog', 
      icon: Linkedin,
      color: 'hover:text-blue-700'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">
                  TNT BLOG
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Geossintéticos & Infraestrutura
                </span>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Sua fonte confiável de informações especializadas em geossintéticos, 
              construção civil e inovações em infraestrutura.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:bg-slate-700`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-400" />
              Categorias
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Rss className="w-5 h-5 mr-2 text-orange-400" />
              Newsletter
            </h3>
            <p className="text-slate-300 mb-4">
              Receba as últimas novidades em geossintéticos e infraestrutura.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-white placeholder-slate-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-r-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.button>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700"
              >
                <h4 className="font-semibold mb-2 text-blue-400">📊 Estatísticas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-slate-400">Artigos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-slate-400">Leitores</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              &copy; 2023 TNT BLOG. Todos os direitos reservados. Criado com{' '}
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                Papum
              </a>.
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/privacidade" 
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos" 
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Termos de Uso
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}