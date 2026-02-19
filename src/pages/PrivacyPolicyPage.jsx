import React from 'react';
    import { motion } from 'framer-motion';
    import { ShieldCheck, FileText, Info } from 'lucide-react';

    const PrivacyPolicyPage = () => {
      const fadeIn = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      });

      const sections = [
        { 
          title: "1. Coleta de Informações", 
          icon: <Info size={24} className="text-roxo-neon" />,
          content: "Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone, ao preencher formulários de contato ou se inscrever em nossa newsletter. Também podemos coletar informações automaticamente através de cookies e tecnologias similares quando você navega em nosso site." 
        },
        { 
          title: "2. Uso das Informações", 
          icon: <FileText size={24} className="text-ciano-neon" />,
          content: "Utilizamos suas informações para: responder às suas solicitações; fornecer e melhorar nossos serviços; enviar comunicações de marketing (com seu consentimento); personalizar sua experiência em nosso site; cumprir obrigações legais." 
        },
        { 
          title: "3. Compartilhamento de Informações", 
          icon: <ShieldCheck size={24} className="text-roxo-neon" />,
          content: "Não compartilhamos suas informações pessoais com terceiros, exceto: com seu consentimento; para cumprir a lei ou responder a processos legais; para proteger nossos direitos, propriedade ou segurança, ou a de nossos usuários ou do público; com prestadores de serviços que atuam em nosso nome e sob nossas instruções (ex: provedores de e-mail marketing, CRM), que são obrigados a proteger suas informações." 
        },
        { 
          title: "4. Cookies e Tecnologias de Rastreamento", 
          icon: <Info size={24} className="text-ciano-neon" />,
          content: "Utilizamos cookies para melhorar a funcionalidade do site, analisar o tráfego e personalizar o conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador." 
        },
        { 
          title: "5. Segurança dos Dados", 
          icon: <ShieldCheck size={24} className="text-roxo-neon" />,
          content: "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição." 
        },
        { 
          title: "6. Seus Direitos", 
          icon: <FileText size={24} className="text-ciano-neon" />,
          content: "Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Você também pode optar por não receber nossas comunicações de marketing a qualquer momento." 
        },
        { 
          title: "7. Alterações nesta Política", 
          icon: <Info size={24} className="text-roxo-neon" />,
          content: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações significativas publicando a nova política em nosso site. Recomendamos que você revise esta política regularmente." 
        },
        { 
          title: "8. Contato", 
          icon: <FileText size={24} className="text-ciano-neon" />,
          content: "Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre nossas práticas de dados, entre em contato conosco através do e-mail: contato@intertecne.com." 
        },
      ];

      return (
        <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate="visible"
              className="text-center mb-10 sm:mb-12"
            >
              <ShieldCheck size={48} className="mx-auto mb-4 text-ciano-neon" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-3">
                Política de <span className="text-ciano-neon">Privacidade</span>
              </h1>
              <p className="text-sm text-azul-claro-suave">Última atualização: 19 de Maio de 2025</p>
            </motion.div>

            <motion.div 
              className="max-w-3xl mx-auto glassmorphism p-6 sm:p-8 rounded-xl shadow-xl border border-azul-profissional/30"
              variants={fadeIn(0.2)}
              initial="hidden"
              animate="visible"
            >
              <p className="text-azul-claro-suave leading-relaxed mb-6">
                A Intertecne ("nós", "nosso") se compromete a proteger a privacidade dos visitantes do nosso site e usuários dos nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais. Ao utilizar nosso site e serviços, você concorda com as práticas descritas nesta política.
              </p>

              {sections.map((section, index) => (
                <motion.div 
                  key={index} 
                  className="mb-6"
                  variants={fadeIn(0.3 + index * 0.1)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center mb-2">
                    {section.icon}
                    <h2 className="text-xl sm:text-2xl font-montserrat font-semibold ml-3 text-branco-azulado">{section.title}</h2>
                  </div>
                  <p className="text-azul-claro-suave leading-relaxed text-sm sm:text-base">{section.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      );
    };

    export default PrivacyPolicyPage;