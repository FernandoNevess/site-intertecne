import React from 'react';
    import { Link } from 'react-router-dom';
    import { Zap, Instagram, MapPin, Phone, Mail } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const socialLinks = [
        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/intertecne', label: 'Instagram @intertecne' },
      ];

      const footerSections = [
        {
          title: 'Empresa',
          links: [
            { text: 'Sobre Nós', to: '/sobre' },
            { text: 'Serviços', to: '/servicos' },
            { text: 'Portfólio', to: '/portfolio' },
            { text: 'Blog', to: '/blog' },
            { text: 'Área do Cliente', to: '/area-cliente' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { text: 'Política de Privacidade', to: '/politica-de-privacidade' },
            { text: 'Termos de Uso', to: '/termos-de-uso' },
          ],
        },
      ];

      const contactInfo = [
        { icon: <MapPin size={18} className="text-ciano-neon" />, text: 'Itapoá, Santa Catarina, Brasil' },
        { icon: <Phone size={18} className="text-ciano-neon" />, text: '(+55) 41 9 8871-6968', href: 'https://wa.me/5541988716968' },
        { icon: <Mail size={18} className="text-ciano-neon" />, text: 'contato@intertecne.com', href: 'mailto:contato@intertecne.com' },
      ];

      return (
        <footer className="bg-azul-escuro-profundo/90 border-t border-azul-profissional/50 pt-12 pb-8 text-branco-azulado">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <Link to="/" className="flex items-center space-x-2">
                  <Zap size={32} className="text-roxo-neon" />
                  <span className="text-2xl font-montserrat font-semibold">
                    Inter<span className="text-roxo-neon">tecne</span>
                  </span>
                </Link>
                <p className="text-sm text-azul-claro-suave leading-relaxed">
                  Interligando tecnologias para estruturar empresas no ambiente digital com inteligência, estratégia e alta performance.
                </p>
                <div className="flex space-x-3 pt-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-azul-claro-suave hover:text-ciano-neon transition-colors duration-300 p-2 rounded-full hover:bg-azul-profissional/50 flex items-center space-x-1"
                      whileHover={{ scale: 1.2, rotate: 0 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon} <span>@intertecne</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {footerSections.map((section, index) => (
                <div key={index}>
                  <p className="font-montserrat font-semibold text-lg mb-4 text-ciano-neon">{section.title}</p>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-sm text-azul-claro-suave hover:text-roxo-neon hover:underline transition-colors duration-300"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div>
                <p className="font-montserrat font-semibold text-lg mb-4 text-ciano-neon">Contato</p>
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      {info.icon}
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm text-azul-claro-suave hover:text-roxo-neon transition-colors duration-300">{info.text}</a>
                      ) : (
                        <span className="text-sm text-azul-claro-suave">{info.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-azul-profissional/30 pt-8 mt-8 text-center">
              <p className="text-sm text-azul-claro-suave">
                &copy; {currentYear} Intertecne. Todos os direitos reservados.
              </p>
              <p className="text-xs text-azul-profissional mt-1">
                Desenvolvido com <span className="text-roxo-neon">♥</span> por Intertecne
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;