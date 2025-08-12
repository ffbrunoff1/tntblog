import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  BookOpen,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const foundPost = mockPosts.find(p => p.slug === slug)
    if (foundPost) {
      setPost(foundPost)
      const related = mockPosts
        .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Post não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    )
  }

  const sharePost = (platform) => {
    const url = window.location.href
    const text = post.title
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)
        break
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Índice do Artigo
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#introducao" className="text-blue-600 hover:text-blue-800">Introdução</a></li>
                  <li><a href="#desenvolvimento" className="text-blue-600 hover:text-blue-800">Desenvolvimento</a></li>
                  <li><a href="#aplicacoes" className="text-blue-600 hover:text-blue-800">Aplicações Práticas</a></li>
                  <li><a href="#conclusao" className="text-blue-600 hover:text-blue-800">Conclusão</a></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-slate-800 mb-4">Compartilhar</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => sharePost('facebook')}
                    className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => sharePost('twitter')}
                    className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => sharePost('linkedin')}
                    className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>

              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="font-bold text-slate-800 mb-4">Posts Relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/post/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </aside>

          <main className="lg:col-span-9 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao blog
              </Link>

              <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      1.2k visualizações
                    </div>
                  </div>

                  <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
                    {post.title}
                  </h1>

                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm flex items-center"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                          isLiked 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span className="text-sm">
                          {isLiked ? '❤️ 124' : '🤍 123'}
                        </span>
                      </button>
                      
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">12 comentários</span>
                      </button>
                      
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-green-600 transition-all">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Compartilhar</span>
                      </button>
                    </div>
                  </div>

                  <div className="blog-content">
                    <div id="introducao">
                      <h2>Introdução aos Geossintéticos</h2>
                      <p>
                        Os geossintéticos representam uma revolução na engenharia civil moderna, 
                        oferecendo soluções inovadoras para uma ampla gama de aplicações em 
                        infraestrutura. {post.excerpt}
                      </p>
                      <p>
                        Estes materiais sintéticos têm transformado a forma como abordamos 
                        projetos de construção, proporcionando benefícios significativos em 
                        termos de sustentabilidade, custo-efetividade e desempenho técnico.
                      </p>
                    </div>

                    <div id="desenvolvimento">
                      <h2>Desenvolvimento e Tecnologia</h2>
                      <p>
                        A evolução dos geossintéticos nas últimas décadas tem sido marcada por 
                        avanços tecnológicos significativos. Desde os primeiros geotêxteis até 
                        os modernos geocompostos multifuncionais, a indústria tem respondido 
                        às crescentes demandas por materiais mais eficientes e sustentáveis.
                      </p>
                      
                      <blockquote>
                        "A inovação em geossintéticos não apenas melhora a qualidade das 
                        construções, mas também contribui para práticas mais sustentáveis 
                        na engenharia civil." - Especialista em Geotecnia
                      </blockquote>

                      <h3>Principais Características</h3>
                      <ul>
                        <li>Alta resistência mecânica e durabilidade</li>
                        <li>Resistência a agentes químicos e biológicos</li>
                        <li>Facilidade de instalação e manutenção</li>
                        <li>Contribuição para sustentabilidade ambiental</li>
                        <li>Versatilidade de aplicações</li>
                      </ul>
                    </div>

                    <div id="aplicacoes">
                      <h2>Aplicações Práticas</h2>
                      <p>
                        As aplicações de geossintéticos são vastas e continuam a expandir-se 
                        conforme novas tecnologias são desenvolvidas. Desde projetos de 
                        estradas e ferrovias até sistemas de contenção ambiental, estes 
                        materiais oferecem soluções versáteis e eficazes.
                      </p>

                      <h3>Principais Setores de Aplicação</h3>
                      <ol>
                        <li><strong>Infraestrutura Rodoviária:</strong> Reforço de pavimentos e estabilização de solos</li>
                        <li><strong>Obras Hidráulicas:</strong> Impermeabilização e controle de erosão</li>
                        <li><strong>Aterros Sanitários:</strong> Sistemas de impermeabilização e drenagem</li>
                        <li><strong>Estruturas de Contenção:</strong> Muros de arrimo e taludes</li>
                      </ol>
                    </div>

                    <div id="conclusao">
                      <h2>Conclusão</h2>
                      <p>
                        O futuro dos geossintéticos promete ainda mais inovações, com 
                        desenvolvimento de materiais inteligentes e sistemas integrados 
                        que contribuirão para uma infraestrutura mais resiliente e sustentável.
                      </p>
                      <p>
                        A contínua pesquisa e desenvolvimento neste campo garantem que os 
                        geossintéticos permanecerão na vanguarda das soluções de engenharia 
                        civil, oferecendo alternativas cada vez mais eficientes e ambientalmente 
                        responsáveis.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">
                        💡 Gostou deste artigo?
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Compartilhe com sua rede e ajude a disseminar conhecimento sobre geossintéticos!
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => sharePost('linkedin')}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Compartilhar no LinkedIn
                        </button>
                        <Link
                          to="/"
                          className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-300 transition-colors"
                        >
                          Ver mais artigos
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  )
}