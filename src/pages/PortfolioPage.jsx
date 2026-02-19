
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye, Zap, ArrowRight, Code, BarChart, Users } from 'lucide-react';

const projects = [
  {
    title: "Website Corporativo Moderno",
    category: "Desenvolvimento Web",
    description: "Criação de um site institucional responsivo e otimizado para SEO, com foco na experiência do usuário e design arrojado.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["WordPress", "SEO", "UX Design", "Responsivo"],
    link: "#",
    icon: <Code className="text-roxo-neon" />,
    color: "roxo-neon"
  },
  {
    title: "Automação de Atendimento com IA",
    category: "Automação & IA",
    description: "Implementação de chatbot inteligente para WhatsApp, resultando em aumento de 30% na captação de leads e otimização do tempo da equipe.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    tags: ["WhatsApp Bot", "IA", "Geração de Leads", "CRM"],
    link: "#",
    icon: <Zap className="text-ciano-neon" />,
    color: "ciano-neon"
  },
  {
    title: "Plataforma EAD Interativa",
    category: "LMS & Educação",
    description: "Desenvolvimento de uma plataforma de cursos online completa, com gestão de alunos, pagamentos e ferramentas de engajamento.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    tags: ["LMS", "E-learning", "Gamificação", "Pagamentos"],
    link: "#",
    icon: <Users className="text-roxo-neon" />,
    color: "roxo-neon"
  },
  {
    title: "Campanha de Tráfego Pago de Alta Performance",
    category: "Marketing Digital",
    description: "Gestão de campanhas no Google Ads e Meta Ads que resultaram em um aumento de 150% no ROI para o cliente.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Google Ads", "Meta Ads", "ROI", "Conversão"],
    link: "#",
    icon: <BarChart className="text-ciano-neon" />,
    color: "ciano-neon"
  },
];

const PortfolioPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mb-4">
            Nosso <span className="text-ciano-neon">Portfólio</span> de Sucesso
          </h1>
          <p className="text-lg sm:text-xl text-azul-claro-suave max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos, demonstrando nossa capacidade de entregar soluções inovadoras e resultados impactantes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism rounded-xl shadow-xl overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 left-4 p-2 bg-${project.color}/80 backdrop-blur-sm rounded-full text-azul-escuro-profundo`}>
                  {React.cloneElement(project.icon, { size: 24 })}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className={`text-sm font-semibold text-${project.color} mb-1`}>{project.category}</p>
                <h2 className="text-2xl font-montserrat font-semibold mb-3 text-branco-azulado">{project.title}</h2>
                <p className="text-azul-claro-suave text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`inline-block bg-azul-profissional text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full text-${project.color}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className={`mt-auto w-full border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-azul-escuro-profundo transition-all duration-300`}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Detalhes <Eye className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: projects.length * 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4">
            Tem um projeto em mente?
          </h2>
          <p className="text-azul-claro-suave mb-6 max-w-xl mx-auto">
            Adoraríamos ouvir sobre suas ideias e discutir como podemos transformá-las em realidade.
          </p>
          <Button asChild size="lg" className="btn-primary-custom animate-pulse-glow-purple">
            <Link to="/contato">Vamos Conversar <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
