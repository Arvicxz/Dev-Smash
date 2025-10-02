# Dev Smash - Hamburgueria

Site de hamburgueria com sistema de carrinho de compras.

## Sobre o Projeto

Dev Smash é um site moderno para hamburgueria que permite aos clientes visualizar o cardápio completo de hambúrgueres e bebidas, adicionar itens ao carrinho baseado no projeto do Sujeito programador.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (em desenvolvimento)
- Font Awesome (ícones)
- Google Fonts (Poppins)

## Estrutura de Arquivos

\`\`\`
dev-smash/
│
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos do site
├── js/
│   └── script.js      # Funcionalidades (em desenvolvimento)
└── assets/
    └── img/           # Imagens dos produtos
\`\`\`

## Funcionalidades

- **Cardápio Completo**: Visualização de hambúrgueres e bebidas com descrições e preços
- **Carrinho de Compras**: Sistema para adicionar e remover produtos
- **Modal de Carrinho**: Interface para revisar pedidos antes de finalizar
- **Validação de Endereço**: Verificação de endereço de entrega
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Acessibilidade**: Implementação de ARIA labels e navegação por teclado

## Como Usar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Navegue pelo cardápio e adicione produtos ao carrinho
4. Clique em "Ver meu carrinho" para revisar o pedido
5. Preencha o endereço de entrega

## Estrutura do Produto

Cada produto segue esta estrutura HTML:

\`\`\`html
<div class="item">
    <img src="caminho/imagem.jpg" alt="Nome do Produto">
    <div class="texto">
        <div>
            <h3>Nome do Produto</h3>
            <p>Descrição do produto</p>
        </div>
        <div class="preco-cart">
            <p><strong>R$ 00,00</strong></p>
            <button class="cart" aria-label="Adicionar ao carrinho">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div>
\`\`\`

## Customização de Cores

As cores principais do site podem ser alteradas no arquivo `css/style.css`:

- **Cor primária (vermelho)**: `#ef4444`
- **Cor de fundo**: `#f1f5f9`
- **Cor do texto**: `#334155`

## Status do Projeto

Em desenvolvimento - JavaScript em implementação

## Próximas Funcionalidades

- [ ] Implementação completa do JavaScript
- [ ] Sistema de quantidade de produtos
- [ ] Cálculo automático do total
- [ ] Validação de formulário
- [ ] Animações e transições
- [ ] Sistema de favoritos
- [ ] Modo escuro
