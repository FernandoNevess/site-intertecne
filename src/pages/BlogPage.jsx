
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    slug: "importancia-seo-para-negocios",
    title: "A Importância do SEO para Negócios em 2025",
    category: "SEO",
    author: "Fernando Neves",
    date: "2025-05-15",
    excerpt: "Descubra por que o SEO continua sendo crucial para a visibilidade online e como otimizar seu site para os motores de busca.",
    image: "https://images.unsplash.com/photo-1571721795195-a2d057279102",
    tags: ["SEO", "Marketing Digital", "Otimização"],
    color: "roxo-neon"
  },
  {
    slug: "automatizando-atendimento-whatsapp",
    title: "Como Automatizar seu Atendimento no WhatsApp e Vender Mais",
    category: "Automação",
    author: "Equipe Intertecne",
    date: "2025-05-10",
    excerpt: "Aprenda a usar chatbots e automações no WhatsApp para melhorar o atendimento ao cliente e impulsionar suas vendas.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da",
    tags: ["WhatsApp", "Chatbots", "Vendas", "Automação"],
    color: "ciano-neon"
  },
  {
    slug: "tendencias-marketing-digital",
    title: "5 Tendências de Marketing Digital para Ficar de Olho",
    category: "Marketing Digital",
    author: "Fernando Neves",
    date: "2025-05-01",
    excerpt: "Explore as últimas tendências do marketing digital, incluindo IA, personalização e marketing de influência.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Marketing Digital", "Tendências", "IA", "Personalização"],
    color: "roxo-neon"
  },
  {
    slug: "criando-funil-vendas-eficaz",
    title: "Passo a Passo para Criar um Funil de Vendas Eficaz",
    category: "Vendas",
    author: "Equipe Intertecne",
    date: "2025-04-25",
    excerpt: "Um guia completo para construir um funil de vendas que converte visitantes em clientes fiéis.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    tags: ["Funil de Vendas", "Conversão", "Marketing", "Estratégia"],
    color: "ciano-neon"
  },
];

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, duration: 0.4 }
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
            Nosso <span className="text-roxo-neon">Blog</span> Intertecne
          </h1>
          <p className="text-lg sm:text-xl text-azul-claro-suave max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades, dicas e insights sobre marketing digital, tecnologia, automação e muito mais.
          </p>
        </motion.div>

        {/* Search and Filter (Placeholder) */}
        <motion.div 
          className="mb-10 flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex-grow w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Buscar artigos..."
              className="w-full p-3 pl-10 rounded-lg bg-azul-profissional border border-azul-profissional/50 focus:ring-2 focus:ring-ciano-neon focus:border-ciano-neon outline-none text-branco-azulado placeholder-azul-claro-suave"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-azul-claro-suave" size={20} />
          </div>
          {/* Placeholder for category filter dropdown */}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className="glassmorphism rounded-xl shadow-xl overflow-hidden flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.image}
                  alt={`Imagem do post ${post.title}`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3 flex items-center space-x-3 text-xs text-azul-claro-suave">
                  <span className={`font-semibold text-${post.color}`}>{post.category}</span>
                  <span className="text-azul-profissional">|</span>
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-montserrat font-semibold mb-2 text-branco-azulado group-hover:text-ciano-neon transition-colors duration-300">{post.title}</h2>
                </Link>
                <p className="text-azul-claro-suave text-sm mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`inline-block bg-azul-profissional text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full text-${post.color}`}>
                      <Tag size={12} className="inline mr-1" />{tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="link" className={`p-0 text-${post.color} self-start group-hover:text-roxo-neon transition-colors duration-300`}>
                  <Link to={`/blog/${post.slug}`}>
                    Ler Mais <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination (Placeholder) */}
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: blogPosts.length * 0.15 + 0.4 }}
        >
          <Button variant="outline" className="border-ciano-neon text-ciano-neon hover:bg-ciano-neon hover:text-azul-escuro-profundo mr-2">Anterior</Button>
          <Button variant="outline" className="border-ciano-neon text-ciano-neon hover:bg-ciano-neon hover:text-azul-escuro-profundo">Próximo</Button>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: blogPosts.length * 0.15 + 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-4">
            Queremos ouvir sua opinião!
          </h2>
          <p className="text-azul-claro-suave mb-6 max-w-xl mx-auto">
            Tem alguma sugestão de tema ou dúvida? Entre em contato conosco. Adoramos interagir com nossa comunidade.
          </p>
          <Button asChild size="lg" className="btn-primary-custom animate-pulse-glow-purple">
            <Link to="/contato">Fale Conosco <BookOpen className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
