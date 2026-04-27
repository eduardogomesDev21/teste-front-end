# Teste Econverse - Front-End (React + TypeScript)

Projeto desenvolvido conforme o desafio: vitrine de produtos com consumo de JSON, layout em Sass e modal com detalhes do item clicado.

## Tecnologias

- React 18
- TypeScript
- Vite
- Sass (SCSS)

## Como rodar localmente

### 1) Instalar dependências

```bash
npm install
```

### 2) Rodar em desenvolvimento

```bash
npm run dev
```

Abra o endereço mostrado no terminal (por padrão, `http://localhost:5173`).

### 3) Gerar build de produção

```bash
npm run build
```

### 4) Visualizar build localmente

```bash
npm run preview
```

## Funcionalidades implementadas

- Estrutura da página principal inspirada no layout de referência
- Vitrine de produtos consumindo:
  `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
- Componente de card de produto com preço, parcelamento e botão de compra
- Modal de produto aberto ao clicar no card com:
  - imagem do produto
  - nome
  - preço
  - seletor de quantidade
  - botão de compra
- Estilização com SCSS modular e variáveis globais
- Estrutura semântica de HTML para melhor SEO

## Estrutura principal

```text
src/
  components/
    Header/
    Hero/
    CategoryStrip/
    ProductSection/
    ProductCard/
    ProductModal/
    PartnerBanners/
    BrandStrip/
    Newsletter/
    Footer/
  styles/
  types/
  utils/
  App.tsx
  main.tsx
```
