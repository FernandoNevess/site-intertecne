import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { 
      Zap, MessageSquare, Users, BookOpen, UserCheck, TrendingUp, Share2, Edit3, Search, Palette, ArrowRight, Settings, Code, Bot, CalendarCheck, GraduationCap, Sparkles, Filter, BarChart3, PenTool, Eye, ShieldCheck
    } from 'lucide-react';

    const servicesData = [
      {
        id: "wordpress",
        icon: <Code className="text-roxo-neon" size={40} />,
        title: "Desenvolvimento de Sites em WordPress",
        description: "Criamos sites rápidos, responsivos e otimizados para conversão e SEO, utilizando a flexibilidade e poder do WordPress. Desde landing pages até portais complexos, entregamos soluções sob medida para sua marca.",
        details: [
          "Design personalizado e responsivo",
          "Otimização SEO on-page",
          "Performance e velocidade de carregamento",
          "Integração com ferramentas de marketing",
          "Painel de gerenciamento intuitivo"
        ],
        color: "roxo-neon"
      },
      {
        id: "whatsapp",
        icon: <Bot className="text-ciano-neon" size={40} />,
        title: "Automação de WhatsApp e Bots",
        description: "Transforme seu atendimento com automação inteligente. Desenvolvemos bots para WhatsApp que geram leads, respondem dúvidas e qualificam contatos 24/7, liberando sua equipe para focar no estratégico.",
        details: [
          "Chatbots personalizados",
          "Integração com CRM e outras plataformas",
          "Automação de mensagens e campanhas",
          "Geração e qualificação de leads",
          "Relatórios de performance"
        ],
        color: "ciano-neon"
      },
      {
        id: "crm",
        icon: <CalendarCheck className="text-roxo-neon" size={40} />,
        title: "Gestão de Agendamentos e Clientes (CRM)",
        description: "Organize seus serviços, leads e o relacionamento com clientes de forma eficiente. Implementamos e personalizamos soluções de CRM para otimizar seus processos e impulsionar suas vendas.",
        details: [
          "Implementação de CRM (Zoho, HubSpot, etc.)",
          "Automação de funis de venda",
          "Gestão de leads e contatos",
          "Sistemas de agendamento online",
          "Relatórios e dashboards personalizados"
        ],
        color: "roxo-neon"
      },
      {
        id: "lms",
        icon: <GraduationCap className="text-ciano-neon" size={40} />,
        title: "Gestão de Cursos e Mentorados (LMS)",
        description: "Crie e gerencie plataformas completas para cursos online, treinamentos e mentorias. Oferecemos soluções LMS robustas para engajar seus alunos e monetizar seu conhecimento.",
        details: [
          "Plataformas EAD personalizadas",
          "Gestão de alunos e progresso",
          "Integração de pagamentos",
          "Ferramentas de interação e avaliação",
          "Certificados e gamificação"
        ],
        color: "ciano-neon"
      },
      {
        id: "ia-avatars",
        icon: <Sparkles className="text-roxo-neon" size={40} />,
        title: "Criação de Avatares com IA",
        description: "Inove na sua comunicação com avatares personalizados criados por Inteligência Artificial. Utilize-os em vídeos, marketing, atendimento e onde mais sua criatividade permitir.",
        details: [
          "Design de avatares realistas ou estilizados",
          "Animação e sincronia labial",
          "Integração em vídeos e plataformas",
          "Personalização de voz e expressões",
          "Consultoria para uso estratégico"
        ],
        color: "roxo-neon"
      },
      {
        id: "marketing-automation",
        icon: <Filter className="text-ciano-neon" size={40} />,
        title: "Automação de Marketing e Funis",
        description: "Capte e nutra leads de forma automática com estratégias de automação de marketing. Criamos funis de conversão eficientes para transformar visitantes em clientes.",
        details: [
          "Criação de landing pages otimizadas",
          "Configuração de fluxos de nutrição",
          "Email marketing estratégico",
          "Lead scoring e segmentação",
          "Análise de métricas e otimização contínua"
        ],
        color: "ciano-neon"
      },
      {
        id: "social-media-paid-traffic",
        icon: <BarChart3 className="text-roxo-neon" size={40} />,
        title: "Gestão de Redes Sociais e Tráfego Pago",
        description: "Alcance seu público ideal e maximize seus resultados com gestão profissional de redes sociais e campanhas de tráfego pago no Google, Facebook, Instagram e outras plataformas.",
        details: [
          "Planejamento estratégico de conteúdo",
          "Criação e otimização de campanhas (Google Ads, Meta Ads)",
          "Segmentação de público e remarketing",
          "Monitoramento e análise de resultados",
          "Relatórios de performance detalhados"
        ],
        color: "roxo-neon"
      },
      {
        id: "content-production",
        icon: <PenTool className="text-ciano-neon" size={40} />,
        title: "Produção de Conteúdo e Cronograma",
        description: "Conteúdo relevante e otimizado é a chave para atrair e engajar seu público. Criamos posts para blogs, redes sociais, roteiros para vídeos e e-mails, seguindo um cronograma estratégico.",
        details: [
          "Pesquisa de palavras-chave e SEO",
          "Criação de artigos para blog",
          "Posts para redes sociais (texto e imagem)",
          "Roteiros para vídeos e podcasts",
          "Desenvolvimento de cronograma editorial"
        ],
        color: "ciano-neon"
      },
      {
        id: "digital-consulting-branding",
        icon: <Eye className="text-roxo-neon" size={40} />,
        title: "Consultoria Digital e Branding",
        description: "Fortaleça sua marca e defina uma presença digital completa com nossa consultoria especializada. Desde o planejamento estratégico até a criação da identidade visual, guiamos sua empresa ao sucesso.",
        details: [
          "Diagnóstico de presença digital",
          "Planejamento estratégico de marketing",
          "Criação ou redesign de identidade visual",
          "Manual de marca e tom de voz",
          "Consultoria em SEO e performance"
        ],
        color: "roxo-neon"
      },
      {
        id: "graphic-design-ux",
        icon: <Palette className="text-ciano-neon" size={40} />,
        title: "Design Gráfico e UX",
        description: "Criamos logos, apresentações e materiais visuais modernos e eficazes, com foco na experiência do usuário (UX) para garantir interfaces intuitivas e agradáveis.",
        details: [
          "Criação de logotipos e identidades visuais",
          "Design de interfaces (UI/UX)",
          "Materiais gráficos para marketing (online e offline)",
          "Apresentações corporativas impactantes",
          "Design de e-books e infográficos"
        ],
        color: "ciano-neon"
      }
    ];

    const ServicesPage = () => {
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
        <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mb-4">
                Nossos <span className="text-roxo-neon">Serviços</span>
              </h1>
              <p className="text-lg sm:text-xl text-azul-claro-suave max-w-3xl mx-auto">
                Soluções completas para posicionar, crescer e converter no ambiente digital.
                Explore como podemos interligar tecnologias para o sucesso do seu negócio.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {servicesData.map((service) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={itemVariants}
                  className={`glassmorphism p-6 rounded-xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-${service.color}/40 border border-transparent hover:border-${service.color}/50`}
                >
                  <div className={`p-3 bg-azul-profissional rounded-lg mb-4 inline-block self-start`}>
                    {service.icon}
                  </div>
                  <h2 className={`text-xl font-montserrat font-semibold mb-3 text-${service.color}`}>{service.title}</h2>
                  <p className="text-azul-claro-suave text-sm mb-4 leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-branco-azulado mb-1">Principais Entregas:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-azul-claro-suave">
                      {service.details.slice(0,3).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="outline" className={`mt-auto w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-azul-escuro-profundo transition-all duration-300 group`}>
                    <Link to="/contato">
                      Solicitar Orçamento <ArrowRight className={`ml-2 h-4 w-4 text-${service.color} group-hover:text-azul-escuro-profundo`} />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: servicesData.length * 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4">
                Pronto para impulsionar seu negócio?
              </h2>
              <p className="text-azul-claro-suave mb-6 max-w-xl mx-auto">
                Entre em contato conosco para um orçamento personalizado e descubra como nossas soluções podem transformar sua presença digital.
              </p>
              <Button asChild size="lg" className="btn-primary-custom animate-pulse-glow-purple">
                <Link to="/contato">Fale com um Especialista <Zap className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      );
    };

    export default ServicesPage;