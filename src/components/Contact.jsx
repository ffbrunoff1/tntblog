import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tem dúvidas sobre geossintéticos ou quer contribuir com o blog? 
            Estamos aqui para ajudar e colaborar com você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Vamos Conversar
            </h3>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">E-mail</h4>
                  <p className="text-slate-600 mb-2">
                    Entre em contato conosco por e-mail para dúvidas, sugestões ou parcerias.
                  </p>
                  <a 
                    href="mailto:contato@tntblog.com" 
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                  >
                    contato@tntblog.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">WhatsApp</h4>
                  <p className="text-slate-600 mb-2">
                    Tire suas dúvidas rapidamente através do nosso WhatsApp.
                  </p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:text-green-800 transition-colors duration-300"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Consultoria</h4>
                  <p className="text-slate-600 mb-2">
                    Agende uma consultoria especializada para seu projeto.
                  </p>
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300">
                    Agendar Reunião
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">🚀 Colabore Conosco</h4>
              <p className="text-slate-300 mb-6">
                Você é especialista em geossintéticos ou infraestrutura? 
                Gostaríamos de conhecer sua experiência e compartilhar seu conhecimento.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Seja um Colaborador
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Envie sua Mensagem
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Assunto
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida Técnica</option>
                    <option value="parceria">Parceria</option>
                    <option value="colaboracao">Colaboração</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outro">Outro</option>
                  </motion.select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Descreva sua dúvida, sugestão ou como podemos ajudar..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </div>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 text-green-800 rounded-lg border border-green-200"
                  >
                    ✅ Mensagem enviada com sucesso! Retornaremos em breve.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 text-red-800 rounded-lg border border-red-200"
                  >
                    ❌ Erro ao enviar mensagem. Tente novamente.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}