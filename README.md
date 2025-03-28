Pastelaria do Seu Zé - Landing Page
GitHub last commit
GitHub repo size

Landing page desenvolvida para a Pastelaria do Seu Zé, apresentando o cardápio de forma responsiva e interativa.

🛠 Tecnologias Utilizadas
React

Next.js

CSS Modules

✨ Funcionalidades
Exibição do cardápio com produtos

Visualização de itens esgotados

Design responsivo para todos os dispositivos

🏗 Estrutura do Projeto
A aplicação foi estruturada com componentes reutilizáveis:

Copy
src/
├── components/
│   ├── Home.js       # Estrutura principal da página
│   ├── Menu.js       # Renderiza a lista de itens do cardápio
│   └── PastelItem.js # Componente para cada item do cardápio
├── styles/          # Estilos CSS modularizados
└── pages/           # Rotas da aplicação
🔍 Principais Características
Props e Renderização Condicional
Componentes flexíveis e reutilizáveis via props

Tratamento especial para itens esgotados:

Nome riscado (text-decoration: line-through)

Imagem em preto e branco (filter: grayscale(100%))

📱 Responsividade
Layout adaptável usando Flexbox e Grid

Media Queries para diferentes tamanhos de tela:

🖥 Desktop: 4 colunas

📱 Tablet: 3 colunas

📱 Celular médio: 2 colunas

📱 Celular pequeno: 1 coluna

🚀 Como Executar
Clone o repositório

bash
Copy
git clone https://github.com/seu-usuario/pastelaria-do-seu-ze.git
Instale as dependências

bash
Copy
npm install
Inicie o servidor de desenvolvimento

bash
Copy
npm run dev
