import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
    import { LogIn, UserCircle, FileText, UploadCloud, MessageSquare, CheckSquare, History, FolderOpen, Bell } from 'lucide-react';

    const ClientAreaPage = () => {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');

      const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de login simulada
        if (email && password) {
          setIsLoggedIn(true);
          // Aqui você faria a chamada para o Supabase auth
        }
      };

      const fadeIn = (delay = 0, y = 20) => ({
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      });

      if (!isLoggedIn) {
        return (
          <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado flex items-center justify-center p-4 circuit-board-bg">
            <motion.div
              variants={fadeIn()}
              initial="hidden"
              animate="visible"
              className="w-full max-w-md"
            >
              <Card className="glassmorphism border-roxo-neon/30 shadow-xl">
                <CardHeader className="text-center">
                  <UserCircle className="mx-auto h-16 w-16 text-roxo-neon mb-4" />
                  <CardTitle className="text-3xl font-montserrat text-roxo-neon neon-text-purple-soft">Área do Cliente</CardTitle>
                  <CardDescription className="text-azul-claro-suave">Acesse seus projetos e informações.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <Label htmlFor="email-cliente" className="text-azul-claro-suave">E-mail</Label>
                      <Input 
                        id="email-cliente" 
                        type="email" 
                        placeholder="seu@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="password-cliente" className="text-azul-claro-suave">Senha</Label>
                      <Input 
                        id="password-cliente" 
                        type="password" 
                        placeholder="Sua senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className="mt-1 bg-azul-profissional/50 border-azul-profissional focus:border-roxo-neon" 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full btn-primary-custom animate-pulse-glow-purple-soft">
                      <LogIn className="mr-2 h-5 w-5" />
                      Entrar
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="text-center">
                  <p className="text-xs text-azul-claro-suave">Esqueceu sua senha? <a href="#" className="text-ciano-neon hover:underline">Recuperar senha</a>.</p>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        );
      }

      // Conteúdo da área do cliente após login
      return (
        <div className="min-h-screen bg-azul-escuro-profundo text-branco-azulado py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeIn(0, -20)}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-montserrat font-bold mb-2">
                  Bem-vindo, <span className="text-ciano-neon neon-text-cyan-soft">Nome do Cliente</span>!
                </h1>
                <p className="text-lg text-azul-claro-suave">Painel de controle dos seus projetos.</p>
              </div>
              <Button variant="outline" onClick={() => setIsLoggedIn(false)} className="mt-4 sm:mt-0 border-roxo-neon text-roxo-neon hover:bg-roxo-neon hover:text-branco-azulado">
                Sair
              </Button>
            </motion.div>

            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-8 bg-azul-profissional/50 p-2 rounded-lg">
                <TabsTrigger value="projects" className="data-[state=active]:bg-roxo-neon data-[state=active]:text-white data-[state=active]:shadow-md">Projetos</TabsTrigger>
                <TabsTrigger value="files" className="data-[state=active]:bg-roxo-neon data-[state=active]:text-white data-[state=active]:shadow-md">Arquivos</TabsTrigger>
                <TabsTrigger value="communication" className="data-[state=active]:bg-roxo-neon data-[state=active]:text-white data-[state=active]:shadow-md">Comunicação</TabsTrigger>
                <TabsTrigger value="history" className="data-[state=active]:bg-roxo-neon data-[state=active]:text-white data-[state=active]:shadow-md">Histórico</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-roxo-neon data-[state=active]:text-white data-[state=active]:shadow-md">Notificações</TabsTrigger>
              </TabsList>

              <TabsContent value="projects">
                <Card className="glassmorphism border-ciano-neon/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ciano-neon neon-text-cyan-soft flex items-center"><FileText className="mr-2"/>Linha do Tempo do Projeto</CardTitle>
                    <CardDescription className="text-azul-claro-suave">Acompanhe o status das tarefas do seu projeto.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-azul-claro-suave">Placeholder para linha do tempo do projeto com status de tarefas.</p>
                    <div className="p-4 bg-azul-profissional/30 rounded-md">
                      <CheckSquare className="inline mr-2 text-ciano-neon"/> Tarefa 1: Briefing - Concluída
                    </div>
                    <div className="p-4 bg-azul-profissional/30 rounded-md">
                      <CheckSquare className="inline mr-2 text-ciano-neon"/> Tarefa 2: Design UI/UX - Em Andamento
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="files">
                <Card className="glassmorphism border-ciano-neon/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ciano-neon neon-text-cyan-soft flex items-center"><UploadCloud className="mr-2"/>Upload e Pré-visualização de Arquivos</CardTitle>
                    <CardDescription className="text-azul-claro-suave">Envie e visualize arquivos relacionados ao seu projeto.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-azul-claro-suave">Placeholder para upload de arquivos (Intertecne → Cliente / Cliente → Intertecne) e pré-visualização.</p>
                    <Button className="btn-secondary-custom animate-pulse-glow-cyan-soft"><UploadCloud className="mr-2"/> Enviar Arquivo</Button>
                    <div className="mt-4 p-4 bg-azul-profissional/30 rounded-md">
                      <FolderOpen className="inline mr-2 text-ciano-neon"/> Documento_Importante.pdf
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="communication">
                <Card className="glassmorphism border-ciano-neon/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ciano-neon neon-text-cyan-soft flex items-center"><MessageSquare className="mr-2"/>Comentários e Chat Interno</CardTitle>
                    <CardDescription className="text-azul-claro-suave">Comunique-se sobre tarefas específicas.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-azul-claro-suave">Placeholder para caixa de comentários ou chat interno por tarefa.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card className="glassmorphism border-ciano-neon/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ciano-neon neon-text-cyan-soft flex items-center"><History className="mr-2"/>Histórico de Entregas</CardTitle>
                    <CardDescription className="text-azul-claro-suave">Acesse o histórico de entregas organizadas por data.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-azul-claro-suave">Placeholder para histórico de entregas.</p>
                     <div className="mt-4 p-4 bg-azul-profissional/30 rounded-md">
                      Entrega 1: Logo V1 - 15/04/2025
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card className="glassmorphism border-ciano-neon/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-ciano-neon neon-text-cyan-soft flex items-center"><Bell className="mr-2"/>Notificações</CardTitle>
                    <CardDescription className="text-azul-claro-suave">Atualizações e alertas importantes.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-azul-claro-suave">Placeholder para notificações.</p>
                    <div className="mt-4 p-4 bg-azul-profissional/30 rounded-md">
                      <Bell className="inline mr-2 text-ciano-neon"/> Nova entrega: Layout do Site - 19/05/2025
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      );
    };

    export default ClientAreaPage;