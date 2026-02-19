
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, BarChart, Users, Settings, Puzzle } from 'lucide-react';

const services = [
  { 
    title: "Desenvolvimento de Sites em WordPress", 
    description: "Sites rápidos, responsivos e otimizados para conversão e SEO.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#wordpress" 
  },
  { 
    title: "Automação de WhatsApp e Bots", 
    description: "Atendimento inteligente, automação de mensagens e geração de leads 24/7.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#whatsapp" 
  },
  { 
    title: "Gestão de Agendamentos e Clientes (CRM)", 
    description: "Soluções para organização de serviços, leads e relacionamento.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#crm" 
  },
  { 
    title: "Gestão de Cursos e Mentorados (LMS)", 
    description: "Plataformas completas para cursos online, treinamentos e mentorias.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#lms" 
  },
  { 
    title: "Criação de Avatares com IA", 
    description: "Avatares personalizados para uso em vídeos, marketing e comunicação.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#ia-avatars" 
  },
  { 
    title: "Automação de Marketing e Funis", 
    description: "Estratégias para captar e nutrir leads automaticamente.", 
    icon: "https://horizons-cdn.hostinger.com/6d310dc8-27d8-494b-8001-72a8cf9de256/133a8280d3ad71a6a06f145d02549610.png", 
    link: "/servicos#marketing-automation" 
  },
];

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado overflow-x-hidden">
      <motion.section 
        className="relative py-20 md:py-32 circuit-board-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-azul-escuro-profundo/80 via-azul-profissional/70 to-roxo-neon/60 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Inter<span className="text-purple-400 neon-text-purple-soft">tecne</span>: Interligando{' '}
            <span className="text-cyan-400 neon-text-cyan-soft">Tecnologias</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-azul-claro-suave max-w-3xl mx-auto mb-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            Soluções personalizadas, modernas e eficazes para estruturar sua empresa no ambiente digital com inteligência, estratégia e alta performance.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, type: 'spring', stiffness: 100 }}
            className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center"
          >
            <Button asChild size="lg" className="btn-primary-custom w-full sm:w-auto animate-pulse-glow-purple-soft">
              <Link to="/servicos">Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-azul-escuro-profundo transition-all duration-300 w-full sm:w-auto animate-pulse-glow-cyan-soft">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-24 bg-azul-escuro-profundo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-4">
              Nossas <span className="text-purple-400 neon-text-purple-soft">Soluções</span> Digitais
            </h2>
            <p className="text-lg text-azul-claro-suave max-w-2xl mx-auto">
              Oferecemos um leque completo de serviços para impulsionar sua presença online e resultados.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism p-6 rounded-xl shadow-xl hover:shadow-purple-400/10 transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-3 bg-azul-profissional rounded-lg mb-4 inline-block">
                  <img 
                    src={service.icon} 
                    alt="Intertecne logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2 text-branco-azulado">{service.title}</h3>
                <p className="text-azul-claro-suave text-sm mb-4 flex-grow">{service.description}</p>
                <Button asChild variant="link" className="text-cyan-400 p-0 hover:text-purple-400">
                  <Link to={service.link}>Saiba Mais <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + services.length * 0.1 }}
          >
            <Button asChild size="lg" className="btn-secondary-custom animate-pulse-glow-cyan-soft">
              <Link to="/servicos">Ver Todos os Serviços <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-azul-profissional/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-4">
              Por que escolher a <span className="text-cyan-400 neon-text-cyan-soft">Intertecne</span>?
            </h2>
            <p className="text-lg text-azul-claro-suave max-w-2xl mx-auto">
              Unimos visão estratégica e execução técnica para entregar resultados que transformam.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <Zap size={36} className="text-purple-400" />, title: "Soluções Personalizadas", description: "Cada projeto é único, adaptado às suas necessidades específicas." },
              { icon: <Brain size={36} className="text-cyan-400" />, title: "Tecnologia de Ponta", description: "Utilizamos as ferramentas e metodologias mais modernas do mercado." },
              { icon: <BarChart size={36} className="text-purple-400" />, title: "Foco em Resultados", description: "Nossas estratégias são orientadas para performance e conversão." },
              { icon: <Users size={36} className="text-cyan-400" />, title: "Atendimento Próximo", description: "Parceria e transparência em todas as etapas do projeto." },
              { icon: <Settings size={36} className="text-purple-400" />, title: "Visão Estratégica", description: "Pensamos além da tecnologia, focando no crescimento do seu negócio." },
              { icon: <Puzzle size={36} className="text-cyan-400" />, title: "Integração Completa", description: "Conectamos todas as pontas para uma presença digital coesa e eficaz." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-azul-escuro-profundo p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-azul-profissional rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2 text-branco-azulado">{item.title}</h3>
                <p className="text-azul-claro-suave text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-montserrat font-bold mb-6 text-branco-azulado"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pronto para <span className="text-cyan-400 neon-text-cyan-soft">transformar</span> sua presença digital?
          </motion.h2>
          <motion.p 
            className="text-lg text-azul-claro-suave max-w-xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vamos conversar sobre como a Intertecne pode ajudar sua empresa a alcançar novos patamares.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="btn-primary-custom animate-pulse-glow-purple-soft">
              <Link to="/contato">Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
