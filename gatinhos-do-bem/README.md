# 🐱 Gatinhos do Bem - Landing Page

Uma landing page responsiva e moderna para uma ONG fictícia de adoção de gatinhos, desenvolvida com React, Vite e Tailwind CSS.

## 🌟 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Cores Suaves**: Paleta de cores em tons de rosa e lilás para transmitir carinho
- **Animações Suaves**: Efeitos de hover e transições fluidas
- **Tipografia Elegante**: Utiliza as fontes Poppins e Nunito do Google Fonts
- **Ícones Modernos**: Heroicons para uma interface limpa e profissional

## 🎨 Seções da Landing Page

1. **Hero Section**: Apresentação principal com call-to-action
2. **Gatinhos Disponíveis**: Cards com fotos de gatinhos para adoção
3. **Como Ajudar**: Três formas de contribuir (Doar, Apadrinhar, Voluntariar)
4. **Depoimentos**: Histórias de sucesso de adotantes
5. **Formulário de Contato**: Para interessados em adoção
6. **Rodapé**: Informações de contato e redes sociais

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework de CSS utilitário
- **Heroicons** - Conjunto de ícones SVG
- **Google Fonts** - Fontes Poppins e Nunito

## 📦 Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse http://localhost:5173 no navegador

## 🚀 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
gatinhos-do-bem/
├── public/          # Arquivos estáticos
├── src/
│   ├── components/  # Componentes reutilizáveis
│   │   └── Cards.jsx
│   ├── App.jsx      # Componente principal
│   ├── main.jsx     # Ponto de entrada
│   └── index.css    # Estilos globais
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Funcionalidades

- **Navegação suave**: Scroll suave entre seções
- **Formulário funcional**: Validação básica e feedback visual
- **Hover effects**: Animações interativas nos cards e botões
- **Responsividade**: Layout adaptável para todos os dispositivos
- **Acessibilidade**: Estrutura semântica e navegação por teclado

## 📱 Responsividade

O design é totalmente responsivo com breakpoints para:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎨 Paleta de Cores

- **Rosa Suave**: #fdf2f8
- **Rosa Claro**: #fce7f3
- **Roxo Suave**: #f3e8ff
- **Roxo Claro**: #e9d5ff
- **Acentos**: Rosa (#ec4899) e Roxo (#8b5cf6)

## 🖼️ Imagens

As imagens dos gatinhos utilizam o serviço placekitten.com para fotos placeholder realistas.

## � Possíveis Melhorias Futuras

- **Backend Integration**: Conectar com uma API real para dados dos gatinhos
- **Banco de Dados**: Implementar persistência de dados dos formulários
- **Sistema de Login**: Área administrativa para gerenciar adoções
- **Galeria Avançada**: Sistema de filtros e busca por características
- **Chat em Tempo Real**: Comunicação direta com a ONG
- **Sistema de Pagamento**: Integração para doações online
- **PWA**: Transformar em Progressive Web App
- **SEO**: Otimização para motores de busca
- **Analytics**: Acompanhamento de métricas e conversões
- **Testes**: Implementar testes unitários e de integração

## 📱 Deploy

O projeto pode ser facilmente deployado em plataformas como:
- **Vercel**: `vercel --prod`
- **Netlify**: Deploy automático via Git
- **GitHub Pages**: Para projetos estáticos
- **Heroku**: Para aplicações mais complexas

## �📝 Licença

Este projeto foi desenvolvido para demonstração e pode ser usado livremente.

---

Feito com ❤️ para nossos pequenos amigos felinos! 🐾
