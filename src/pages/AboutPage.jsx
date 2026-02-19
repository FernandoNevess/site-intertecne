
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Zap, Target, Lightbulb, Award } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const teamMember = {
    name: "Fernando Neves",
    role: "Fundador & Especialista em Marketing, Tecnologia e Automação",
    bio: "Com vasta experiência em transformar ideias em realidade digital, Fernando lidera a Intertecne com paixão por inovação e resultados. Sua expertise abrange desde o planejamento estratégico até a execução técnica, garantindo que cada projeto seja entregue com excelência e alinhado aos objetivos do cliente.",
    image: "https://images.unsplash.com/photo-1570330362305-4cc18fd24a74" 
  };

  const values = [
    { icon: <Lightbulb className="text-roxo-neon" size={32} />, title: "Inovação Contínua", description: "Buscamos constantemente novas tecnologias e abordagens para oferecer soluções de vanguarda." },
    { icon: <Target className="text-ciano-neon" size={32} />, title: "Foco no Cliente", description: "Entendemos as necessidades de cada cliente para entregar resultados que realmente importam." },
    { icon: <Award className="text-roxo-neon" size={32} />, title: "Excelência Técnica", description: "Compromisso com a qualidade e performance em cada detalhe de nossos projetos." },
    { icon: <Users className="text-ciano-neon" size={32} />, title: "Parceria Estratégica", description: "Trabalhamos lado a lado com nossos clientes, construindo relações de confiança e sucesso mútuo." },
  ];

  return (
    <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.section
          className="text-center mb-12 sm:mb-16"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mb-4">
            Sobre a <span className="text-roxo-neon">Intertecne</span>
          </h1>
          <p className="text-lg sm:text-xl text-azul-claro-suave max-w-3xl mx-auto">
            Conectando tecnologias para impulsionar o futuro digital do seu negócio.
          </p>
        </motion.section>

        {/* Company Story Section */}
        <motion.section
          className="mb-12 sm:mb-16 grid md:grid-cols-2 gap-8 items-center"
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
        >
          <div className="glassmorphism p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4 text-ciano-neon">Nossa História</h2>
            <p className="text-azul-claro-suave leading-relaxed mb-4">
              A Intertecne nasceu da visão de que a tecnologia, quando aplicada com inteligência e estratégia,
              tem o poder de transformar negócios. Fundada por Fernando Neves, um apaixonado por marketing digital,
              tecnologia e automação, nossa missão é simplificar o complexo mundo digital para empresas de todos os tamanhos.
            </p>
            <p className="text-azul-claro-suave leading-relaxed">
              Acreditamos que "interligar tecnologias" é a chave para construir uma presença online robusta e eficaz.
              Desde o desenvolvimento de sites de alta performance até a implementação de automações inteligentes e
              estratégias de marketing digital, nosso foco é sempre entregar soluções que gerem crescimento e conversão.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b"
              alt="Equipe Intertecne colaborando em um projeto digital"
              className="rounded-xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </motion.section>

        {/* Founder Section */}
        <motion.section
          className="mb-12 sm:mb-16 bg-azul-profissional/30 p-6 sm:p-8 rounded-xl shadow-xl"
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-6 text-center text-roxo-neon">Conheça o Fundador</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            <img 
              src={teamMember.image}
              alt={teamMember.name}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-ciano-neon"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-branco-azulado">{teamMember.name}</h3>
              <p className="text-ciano-neon mb-3">{teamMember.role}</p>
              <p className="text-azul-claro-suave leading-relaxed">{teamMember.bio}</p>
            </div>
          </div>
        </motion.section>

        {/* Mission and Values Section */}
        <motion.section
          className="mb-12 sm:mb-16"
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-2 text-ciano-neon">Nossa Missão e Valores</h2>
            <p className="text-azul-claro-suave max-w-2xl mx-auto">
              Guiamos nossas ações por princípios que refletem nosso compromisso com a excelência e o sucesso dos nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-xl shadow-lg text-center hover:shadow-roxo-neon/30 transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 inline-block p-3 bg-azul-escuro-profundo rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-branco-azulado">{value.title}</h3>
                <p className="text-azul-claro-suave text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center py-8"
          variants={fadeIn(0.8)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4 text-branco-azulado">
            Vamos construir o futuro digital da sua empresa juntos?
          </h2>
          <p className="text-azul-claro-suave mb-6 max-w-xl mx-auto">
            Entre em contato e descubra como as soluções da Intertecne podem impulsionar seus resultados.
          </p>
          <Button asChild size="lg" className="btn-primary-custom animate-pulse-glow-purple">
            <Link to="/contato">
              Fale Conosco <Zap size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
