import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X, Zap, Code, Users, Briefcase, BookOpen, Mail, UserCircle } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const navLinks = [
      { to: '/', text: 'Home', icon: <Zap size={18} /> },
      { to: '/sobre', text: 'Sobre Nós', icon: <Users size={18} /> },
      { to: '/servicos', text: 'Serviços', icon: <Briefcase size={18} /> },
      { to: '/portfolio', text: 'Portfólio', icon: <Code size={18} /> },
      { to: '/blog', text: 'Blog', icon: <BookOpen size={18} /> },
      { to: '/contato', text: 'Contato', icon: <Mail size={18} /> },
    ];

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => setIsOpen(!isOpen);

      const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.3,
          },
        }),
      };

      const mobileLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.05,
            duration: 0.3,
          },
        }),
      };
      
      const activeLinkStyle = "text-ciano-neon neon-text-cyan-soft";
      const inactiveLinkStyle = "hover:text-ciano-neon transition-colors duration-300";

      return (
        <nav className="bg-azul-escuro-profundo/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
                >
                  <Zap size={32} className="text-roxo-neon" />
                </motion.div>
                <span className="text-2xl font-montserrat font-semibold text-branco-azulado">
                  Inter<span className="text-roxo-neon">tecne</span>
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-1.5 text-sm font-medium ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                      }
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button asChild variant="outline" size="sm" className="border-roxo-neon text-roxo-neon hover:bg-roxo-neon hover:text-branco-azulado transition-all duration-300">
                    <Link to="/area-cliente">
                      <UserCircle size={18} className="mr-2" />
                      Área do Cliente
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="md:hidden">
                <Button variant="ghost" onClick={toggleMenu} className="text-branco-azulado hover:text-ciano-neon">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </Button>
              </div>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-azul-escuro-profundo/95 absolute w-full left-0 top-20 py-4 shadow-xl"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.to}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 py-2 px-3 rounded-md text-base font-medium ${isActive ? 'bg-roxo-neon text-branco-azulado' : 'text-branco-azulado hover:bg-azul-profissional hover:text-ciano-neon'}`
                      }
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  custom={navLinks.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button asChild variant="outline" className="w-full mt-3 border-roxo-neon text-roxo-neon hover:bg-roxo-neon hover:text-branco-azulado transition-all duration-300">
                     <Link to="/area-cliente" onClick={toggleMenu}>
                        <UserCircle size={18} className="mr-2" />
                        Área do Cliente
                      </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </nav>
      );
    };

    export default Navbar;