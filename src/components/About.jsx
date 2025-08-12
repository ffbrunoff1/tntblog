import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, Lightbulb, BookOpen, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Especialização Técnica",
      description: "Conteúdo aprofundado sobre geossintéticos e suas aplicações em projetos de infraestrutura."
    },
    {
      icon: Award,
      title: "Qualidade Comprovada",
      description: "Informações baseadas em estudos de caso reais e experiências práticas do setor."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Acompanhe as últimas tendências e tecnologias em materiais geossintéticos."
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com profissionais e especialistas da área de construção civil."
    },
    {
      icon: BookOpen,
      title: "Conteúdo Educativo",
      description: "Materiais didáticos e explicações detalhadas para todos os níveis de conhecimento."
    },
    {
      icon: Zap,
      title: "Atualizações Rápidas",
      description: "Seja o primeiro a saber sobre novidades, normas e regulamentações do setor."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Sobre o <span className="gradient-text">TNT Blog</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma fonte confiável de informações especializadas em geossintéticos, 
            construção civil e infraestrutura. Nosso objetivo é compartilhar conhecimento 
            técnico e promover a inovação no setor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            🎯 Nossa Missão
          </h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Democratizar o conhecimento sobre geossintéticos e tecnologias de infraestrutura, 
            fornecendo conteúdo de qualidade que ajude profissionais e empresas a tomar 
            decisões mais informadas e sustentáveis em seus projetos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Artigos Publicados</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-200">Leitores Mensais</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Especialistas</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Por que escolher o TNT Blog?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Conteúdo Verificado</h4>
                  <p className="text-slate-600">Todas as informações são revisadas por especialistas da área.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Atualizações Constantes</h4>
                  <p className="text-slate-600">Novos artigos publicados semanalmente com as últimas tendências.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Acesso Gratuito</h4>
                  <p className="text-slate-600">Todo o nosso conteúdo é disponibilizado gratuitamente para a comunidade.</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 text-center"
          >
            <div className="text-6xl mb-4">🏗️</div>
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              Construindo o Futuro
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Junte-se a nós na construção de uma infraestrutura mais 
              sustentável e eficiente através do conhecimento compartilhado.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}