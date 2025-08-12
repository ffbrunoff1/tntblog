import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Filter, Grid, List } from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState('grid')
  
  const categories = ['Todos', 'Geossintéticos', 'Infraestrutura', 'Sustentabilidade', 'Inovação', 'Normas']
  
  const filteredPosts = selectedCategory === 'Todos' 
    ? mockPosts 
    : mockPosts.filter(post => post.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Últimos <span className="gradient-text">Artigos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore nosso conteúdo especializado em geossintéticos, infraestrutura e inovações tecnológicas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              <List className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          layout
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                viewMode === 'list' ? 'flex gap-6' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-80 flex-shrink-0' : ''
              }`}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={post.image}
                  alt={post.title}
                  className={`w-full object-cover group-hover:opacity-90 transition-opacity duration-300 ${
                    viewMode === 'list' ? 'h-full' : 'h-64'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className={`p-6 flex flex-col ${
                viewMode === 'list' ? 'flex-1 justify-between' : ''
              }`}>
                <div>
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {post.title}
                  </motion.h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/post/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Todos os Artigos
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Biblioteca Técnica</h3>
              <p className="text-slate-600">Acesse nossa biblioteca com mais de 500 artigos técnicos especializados</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Cursos Online</h3>
              <p className="text-slate-600">Aprenda com especialistas através de nossos cursos práticos</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6"
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Consultoria</h3>
              <p className="text-slate-600">Receba orientação especializada para seus projetos</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}