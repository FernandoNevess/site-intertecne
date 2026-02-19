import React from 'react';
    import { motion } from 'framer-motion';
    import { FileText, AlertTriangle, CheckSquare } from 'lucide-react';

    const TermsOfUsePage = () => {
      const fadeIn = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      });

      const sections = [
        { 
          title: "1. Aceitação dos Termos", 
          icon: <CheckSquare size={24} className="text-roxo-neon" />,
          content: "Ao acessar e usar o site da Intertecne (o \"Site\"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, não deverá usar o Site." 
        },
        { 
          title: "2. Uso do Site", 
          icon: <FileText size={24} className="text-ciano-neon" />,
          content: "Você concorda em usar o Site apenas para fins legais e de maneira que não infrinja os direitos de, restrinja ou iniba o uso e gozo do Site por qualquer terceiro. Condutas proibidas incluem assediar ou causar angústia ou inconveniência a qualquer pessoa, transmitir conteúdo obsceno ou ofensivo ou interromper o fluxo normal de diálogo dentro do Site." 
        },
        { 
          title: "3. Propriedade Intelectual", 
          icon: <CheckSquare size={24} className="text-roxo-neon" />,
          content: "Todo o conteúdo presente no Site, incluindo, mas não se limitando a, textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, é propriedade da Intertecne ou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais internacionais. Você não pode modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos do Site sem o consentimento prévio por escrito da Intertecne." 
        },
        { 
          title: "4. Isenção de Garantias e Limitação de Responsabilidade", 
          icon: <AlertTriangle size={24} className="text-ciano-neon" />,
          content: "O Site é fornecido \"como está\" e \"conforme disponível\", sem quaisquer representações ou garantias de qualquer tipo, expressas ou implícitas. A Intertecne não garante que o Site será ininterrupto, livre de erros ou que os defeitos serão corrigidos. Na extensão máxima permitida pela lei aplicável, a Intertecne se isenta de todas as garantias, expressas ou implícitas, incluindo, mas não se limitando a, garantias implícitas de comercialização e adequação a uma finalidade específica. A Intertecne não será responsável por quaisquer danos de qualquer tipo decorrentes do uso do Site." 
        },
        { 
          title: "5. Links para Sites de Terceiros", 
          icon: <FileText size={24} className="text-roxo-neon" />,
          content: "O Site pode conter links para sites de terceiros que não são controlados ou operados pela Intertecne. Esses links são fornecidos apenas para sua conveniência. A Intertecne não endossa e não é responsável pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros." 
        },
        { 
          title: "6. Modificações nos Termos", 
          icon: <AlertTriangle size={24} className="text-ciano-neon" />,
          content: "A Intertecne reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Seu uso continuado do Site após quaisquer alterações constitui sua aceitação dos novos Termos. Recomendamos que você revise esta página periodicamente para quaisquer alterações." 
        },
        { 
          title: "7. Lei Aplicável", 
          icon: <CheckSquare size={24} className="text-roxo-neon" />,
          content: "Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem consideração aos seus conflitos de disposições legais." 
        },
        { 
          title: "8. Contato", 
          icon: <FileText size={24} className="text-ciano-neon" />,
          content: "Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@intertecne.com." 
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
              <FileText size={48} className="mx-auto mb-4 text-roxo-neon" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-3">
                Termos de <span className="text-roxo-neon">Uso</span>
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
                Bem-vindo à Intertecne! Estes Termos de Uso regem o seu acesso e uso do nosso site e serviços. Por favor, leia-os atentamente.
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

    export default TermsOfUsePage;