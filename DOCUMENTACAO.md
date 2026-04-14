# Documentação do Site: LiTCC USP-RP

Esta documentação fornece uma visão geral técnica e conceitual sobre a estrutura do site, mapeando todas as tecnologias, seções de conteúdo e funcionalidades interativas presentes na aplicação final desenvolvida para a **Liga de Terapias Cognitivo-Comportamentais**.

---

## 💻 Stack Tecnológica

O site utiliza uma base moderna e otimizada para alto desempenho e qualidade visual:
- **Core:** React.js construído com o bundler **Vite** (oferecendo performance superior ao Webpack).
- **Estilização e Componentes:** **Tailwind CSS** para estilização utilitária e ágil, com design system consistente amparado em cores personalizadas.
- **Animações e Movimento:** **Framer Motion** e classes puras de CSS Transitions integradas para criar um sentimento contínuo de vida, peso e inércia em cada interação do layout (efeitos Scroll e animações flutuantes/3D).

---

## 📂 Arquitetura Central (`App.tsx`)
Todo o website opera como uma **Single Page Application (SPA)**, onde todos os blocos de conteúdo são montados linearmente e sobrepostos de cima para baixo no arquivo `src/App.tsx`. 

Abaixo estão detalhadas todas as seções (blocos) em ordem de aparição de rolagem:

### 1. Cabeçalho de Navegação (`<Navbar />`)
- **Função:** Menu de acesso rápido persistente ("Sticky").
- **Comportamento:** Ao entrar no site, apresenta-se com o fundo totalmente transparente para misturar-se com a área Heróica. No momento em que o usuário rola a página para baixo, o componente adquire propriedades de *Glassmorphism* (desfoque e transparência simulando vidro elegante). Trata-se do roteador principal que percorre as áreas (Acesso a Quem Somos, Materiais, etc.).
- **Mobile:** Recolhe os itens de texto e implementa o ícone "Hamburger", que ativa os links através de uma tela sobreposta animada.

### 2. Capa Principal (`<Hero />`)
- **Função:** Cativar o visitante no escopo e profissionalismo do site (Landing visual forte).
- **Comportamento:** Toda a seção possui uma tela de fundo super-dinâmica e moderna criada pelo `<BackgroundGradientAnimation />` (um componente construído nos códigos-fonte unindo as cores institucionais em nuvens fluídas animadas via CSS e JS). 
- **Conteúdo Direto:** Apresenta o slogan "Unindo Ciência e Prática" e fornece navegação fácil (Botão "Conheça a Liga") que rola o site fisicamente para o próximo bloco.

### 3. Institucional (`<QuemSomos />`)
- **Função:** Validação acadêmica e explicação simples de existência.
- **Comportamento:** Adota um quadro em blocos laterais esquerdo com estatísticas ("10+ Anos de História" e menção ao "LaPPIC"). À direita, detalha a apresentação institucional ligada à universidade e enuncia em formato limpo os pilares de **Missão** e **Visão**.

### 4. Áreas de Atuação (`<AreasBento />` em `./components/sections/`)
- **Função:** Organizar os nichos de atuação da LiTCC (exigência central do usuário refatorada usando estética futurista).
- **Comportamento e Design:** Esse bloco abandona os botões clássicos para aplicar o visual em **Bento Grid** moderno (uma malha de caixas modulares de formatos retangulares e quadrados).
- **Frentes Atuais Expostas:** **Ensino, Pesquisa, Eventos, Extensão e Marketing**.
- **Visualização Exclusiva:** As imagens de fundo antigas foram abandonadas em prol de efeitos coloridos, onde "nuvens neon" de borrões iluminam os ícones baseados na paleta da Liga, acionadas fisicamente através do ponteiro interativo (Mouse/Hover).

### 5. Atividades e Filtros (`<Projetos />`)
- **Função:** Galeria demonstrativa do trabalho desenvolvido internamente.
- **Comportamento Dinâmico:** Apresenta barras de filtro baseadas em categoria ("Estudo", "Eventos", "Extensão"). Por debaixo dos panos, utiliza a propriedade `AnimatePresence` do React Framer Motion para que cada projeto, ao ser filtrado ou adicionado, expanda flutuando e reposicionando sua largura de forma suave, em vez de "piscar" secamente para formar o grid.

### 6. Downloads (`<Materiais />`)
- **Função:** Biblioteca direta ao ponto com foco em UX.
- **Comportamento:** Reúne e-books, modelos e cartilhas. Cada "card" demonstra com ícones, extensão de arquivo e tamanho do PDF. Um botão limpo de download convida à ação instantânea da pesquisa e ensino que a Liga construiu.

### 7. Seção Redes Sociais (`<SocialMedia />` em `./components/sections/`)
- **Função:** Converter visitantes do portal local de volta ao principal hub de relacionamento externo do trabalho moderno: o Instagram da liga.
- **Comportamento Especial / Showcase Técnico:** Trata-se de num **Render de Fake Device Interativo**. O código nativo via CSS foi customizado para emular de forma tridimensional e impecável o formato do aparelho iPhone (eletrodo de sinal, entalhe de detecção de Dynamic Island e horas).
- **Nível de Lealdade:** A simulação roda a autêntica UI System Typeface da marca Meta/Apple e é dinamicamente injetada com os avatares originais salvos localmente e os botões reais em escala, além de replicar de fato as métricas (Seguindo 1.2k, Publicações 434 e 6.9k Seguidores) extraídos estaticamente. Conta com **Translações Estéreo (Perspectiva em CSS)**, criando a flutuação do smartphone simulado sobre a cor de fundo com as sombras responsivas ao Hover.

### 8. Finalização de Contatos (`<Footer />`)
- **Função:** Assinatura.
- **Comportamento:** Encerramento utilizando um bloco coeso roxo escuro. Abriga explicitamente a caixa de segurança "Entidade Vinculada - USP Ribeirão Preto/FFCLRP" em paleta de cor isolada com logotipo claro destacando a chancela e respeito universitário exigido para a organização médica/científica.
- **FAB (Floating Action Button):** Um ícone circular de e-mail está persistentemente fixado ao canto inferior da página como âncora final para esse bloco em qualquer altura que o cliente esteja lendo o conteúdo vertical.
