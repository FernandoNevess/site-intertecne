import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import HomePage from '@/pages/HomePage';
    import AboutPage from '@/pages/AboutPage';
    import ServicesPage from '@/pages/ServicesPage';
    import PortfolioPage from '@/pages/PortfolioPage';
    import BlogPage from '@/pages/BlogPage';
    import ContactPage from '@/pages/ContactPage';
    import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
    import TermsOfUsePage from '@/pages/TermsOfUsePage';
    import ClientAreaPage from '@/pages/ClientAreaPage'; // Nova página
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
    import { supabase } from '@/lib/supabaseClient';

    function App() {
      console.log("Supabase client initialized:", supabase);

      return (
        <Router>
          <div className="flex flex-col min-h-screen bg-azul-escuro-profundo text-branco-azulado">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/servicos" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
                <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
                <Route path="/area-cliente" element={<ClientAreaPage />} /> {/* Nova rota */}
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsAppButton />
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;