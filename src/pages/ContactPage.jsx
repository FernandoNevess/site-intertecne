import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, Instagram } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulação de envio de formulário
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Form data submitted:", formData);
        toast({
          title: "Mensagem Enviada!",
          description: "Obrigado por entrar em contato. Responderemos em breve.",
          variant: "default",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitting(false);
      };

      const contactInfo = [
        { icon: <Mail size={24} className="text-roxo-neon" />, title: "E-mail", content: "contato@intertecne.com", href: "mailto:contato@intertecne.com" },
        { icon: <Phone size={24} className="text-ciano-neon" />, title: "WhatsApp", content: "(+55) 41 9 8871-6968", href: "https://wa.me/5541988716968" },
        { icon: <Instagram size={24} className="text-roxo-neon" />, title: "Instagram", content: "@intertecne", href: "https://www.instagram.com/intertecne" },
        { icon: <MapPin size={24} className="text-ciano-neon" />, title: "Endereço", content: "Itapoá, Santa Catarina, Brasil" },
      ];

      const fadeIn = (delay = 0, y = 20) => ({
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      });

      return (
        <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn(0, -20)}
              initial="hidden"
              animate="visible"
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-montserrat font-bold mb-4">
                Entre em <span className="text-ciano-neon neon-text-cyan-soft">Contato</span>
              </h1>
              <p className="text-lg sm:text-xl text-azul-claro-suave max-w-3xl mx-auto">
                Tem alguma dúvida, sugestão ou quer um orçamento? Estamos prontos para te atender!
                Preencha o formulário abaixo ou utilize um dos nossos canais de contato.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 sm:gap-12">
              <motion.div
                variants={fadeIn(0.2)}
                initial="hidden"
                animate="visible"
                className="glassmorphism p-6 sm:p-8 rounded-xl shadow-xl border border-roxo-neon/20"
              >
                <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-6 text-roxo-neon neon-text-purple-soft">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-azul-claro-suave">Nome Completo</Label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-azul-claro-suave">E-mail</Label>
                      <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-azul-claro-suave">Telefone (Opcional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" value={formData.phone} onChange={handleChange} className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-azul-claro-suave">Assunto</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Sobre o que gostaria de falar?" value={formData.subject} onChange={handleChange} required className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-azul-claro-suave">Sua Mensagem</Label>
                    <Textarea id="message" name="message" placeholder="Digite sua mensagem aqui..." value={formData.message} onChange={handleChange} required rows={5} className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" />
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-primary-custom animate-pulse-glow-purple-soft" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                variants={fadeIn(0.4)}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <div className="glassmorphism p-6 sm:p-8 rounded-xl shadow-xl border border-ciano-neon/20">
                  <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold mb-6 text-ciano-neon neon-text-cyan-soft">Nossos Contatos</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-branco-azulado">{info.title}</h3>
                          {info.href ? (
                            <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-azul-claro-suave hover:text-ciano-neon transition-colors duration-300 break-all">{info.content}</a>
                          ) : (
                            <p className="text-azul-claro-suave break-all">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full mt-8 border-ciano-neon text-ciano-neon hover:bg-ciano-neon hover:text-azul-escuro-profundo transition-all duration-300 animate-pulse-glow-cyan-soft"
                    onClick={() => window.open(`https://wa.me/5541988716968?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`, '_blank')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" /> Falar pelo WhatsApp
                  </Button>
                </div>
                
                <div className="glassmorphism p-2 rounded-xl shadow-xl border border-azul-profissional/20">
                  <h2 className="text-xl sm:text-2xl font-montserrat font-semibold mb-4 text-center text-branco-azulado pt-4">Nossa Localização</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      title="Mapa Intertecne - Itapoá, SC"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-48.61889839172364,-26.11507799159987,-48.61089839172364,-26.10707799159987&layer=mapnik&marker=-26.11107799159987,-48.61489839172364"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                   <p className="text-xs text-center text-azul-claro-suave py-2">Itapoá, Santa Catarina, Brasil. Mapa interativo.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    };

    export default ContactPage;