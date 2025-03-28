Relatório de Desenvolvimento - Landing Page "Pastelaria do Seu Zé"

1. Estrutura do Projeto

A aplicação foi estruturada React e Next.js, dividindo a interface em componentes reutilizáveis. Os principais componentes desenvolvidos foram:

Home.js: Estrutura principal da página, contendo o cabeçalho e o menu.

Menu.js: Renderiza dinamicamente a lista de itens do cardápio.

PastelItem.js: Componente para exibir cada item do cardápio, recebendo props como nome, imagem, preço e status de disponibilidade.

2. Uso de Props e Renderização Condicional

Foi adotada a abordagem de props para tornar os componentes reutilizáveis e flexíveis. O atributo esgotado foi incluído nos itens do menu, permitindo alterar dinamicamente a aparência dos produtos indisponíveis, deixando:

O nome riscado (text-decoration: line-through)

A imagem em preto e branco (filter: grayscale(100%))

3. Estilização e Responsividade

O CSS foi escrito de forma modularizada, garantindo que o layout fosse responsivo.
As principais decisões incluem:

Flexbox e Grid para organização do layout.

Media Queries para adaptar o menu a diferentes tamanhos de tela:

Desktop: 4 colunas

Tablet: 3 colunas

Celular médio: 2 colunas

Celular pequeno: 1 coluna

Ajuste no espaçamento para evitar elementos colados ou desproporcionais em diferentes resoluções.

4. Conclusão

O desenvolvimento seguiu princípios de componentização, reutilização de código e responsividade, garantindo uma interface amigável e funcional para o cardápio da pastelaria. O projeto pode ser expandido para incluir novas funcionalidades, conforme necessidade.
