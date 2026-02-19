import React from 'react';
    import { MessageSquare } from 'lucide-react';
    import { motion } from 'framer-motion';

    const FloatingWhatsAppButton = () => {
      const phoneNumber = "5541988716968"; 
      const message = "Olá! Gostaria de saber mais sobre os serviços da Intertecne.";
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      return (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
          aria-label="Fale conosco pelo WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(34,197,94,0.6)" }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare size={28} />
        </motion.a>
      );
    };

    export default FloatingWhatsAppButton;