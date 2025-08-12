import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function Hero() {
  const featuredPost = mockPosts[0]
  const recentPosts = mockPosts.slice(1, 4)

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Destaque
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                </div>
                
                <motion.h1
                  whileHover={{ x: 5 }}
                  className="text-3xl font-bold text-slate-800 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300"
                >
                  {featuredPost.title}
                </motion.h1>
                
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <Link
                  to={`/post/${featuredPost.slug}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Ler Artigo Completo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Posts Recentes</h2>
              </div>

              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-blue-600 text-xs font-semibold bg-blue-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-slate-800 mt-2 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{post.date}</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/post/${post.slug}`}
                    className="block mt-4 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-300"
                  >
                    Ler mais →
                  </Link>
                </motion.article>
              ))}

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-6 text-center"
              >
                <h3 className="font-bold text-lg mb-2">📧 Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Receba as últimas novidades sobre geossintéticos e infraestrutura
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors duration-300 w-full"
                >
                  Assinar Newsletter
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}