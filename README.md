# LiTCC USP-RP

> **Liga de Terapias Cognitivo-Comportamentais da USP Ribeirão Preto**

Aplicação web estruturada em **React** e **Vite**, desenvolvida com foco em performance e segurança, com implantação otimizada para a Vercel.

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (Animações)
- [Lucide React](https://lucide.dev/) (Ícones)

## 💻 Instalação / Local

Siga os passos abaixo para rodar esta aplicação na sua máquina:

1. Clone o repositório:
```bash
git clone https://github.com/leumasnot-prog/litccusp.git
```

2. Entre no diretório do projeto:
```bash
cd litccusp
```

3. Instale as dependências:
```bash
npm install
```

4. *(Opcional)* Crie um arquivo `.env` baseado no `.env.example`.

5. Rode a aplicação localmente:
```bash
npm run dev
```

## 🛡️ Camadas de Segurança e Deploy (Vercel)

O ambiente de produção deste projeto possui regras explícitas em `vercel.json` para proteger o sistema:
- **CSP (Content-Security-Policy)**
- **HSTS (Strict-Transport-Security)** (HTTPS Forçado)
- **X-Frame-Options & nosniff** (Proteções contra sequestro de tela e injeção por mime-type)
- Cache estático otimizado pelas redes Edge.
