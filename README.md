# 📊 Exercícios de Lógica com JavaScript e Interface HTML

Este repositório contém uma coleção de mini-projetos desenvolvidos para praticar conceitos fundamentais de programação e manipulação de estruturas de dados (Vetores e Matrizes/Objetos) em JavaScript, integrados a interfaces visuais modernas em HTML5 e CSS3.

Os códigos originais baseados em terminal (`prompt` e `console.log`) foram adaptados para uma interface gráfica amigável, contornando bloqueios de segurança de navegadores e melhorando a experiência do usuário.

---

## 🚀 Como Executar o Projeto

Como o projeto utiliza JavaScript frontend puro, você não precisa instalar nenhuma dependência ou servidor!

1. **Baixe ou clone** este repositório.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `.html` correspondente diretamente em qualquer navegador de internet (Chrome, Edge, Firefox, Brave, etc.) dando um **duplo clique** sobre ele.

> ⚠️ **Nota Importante:** Evite utilizar extensões de "Preview" internas de editores de código (como a do VS Code), pois elas costumam bloquear a execução de scripts por diretivas de segurança. Abra o arquivo direto no navegador real!

---

## 📁 Estrutura dos Exercícios

### 1. Análise de Idades (`Proj 1`)
* **Descrição:** O sistema recebe a idade de 4 pessoas através de campos de entrada, armazena esses dados em um vetor (array) e realiza uma busca estruturada para identificar qual é a maior idade digitada e em qual posição ela foi inserida.
* **Conceitos Praticados:** Loops (`for`), vetores, condições de comparação (`if`), manipulação básica de DOM.

### 2. Cadastro e Filtro de Funcionários (`Proj 2`)
* **Descrição:** Uma interface de cadastro que recolhe o Nome, Sexo (M/F) e Salário de 5 colaboradores. Ao finalizar, o sistema filtra e renderiza em tela uma listagem contendo **apenas as funcionárias do sexo feminino que recebem um salário superior a R$ 5.000,00**. Caso nenhuma atenda ao critério, uma mensagem de aviso é exibida.
* **Conceitos Praticados:** Múltiplos vetores paralelos, filtragem de dados com múltiplos critérios lógicos (`&&`), formatação de moedas (`toFixed(2)`).

### 3. Cadastro Dinâmico de Alturas (`Proj 3`)
* **Descrição:** Diferente dos anteriores que possuem limite fixo, este projeto simula a estrutura de um loop dinâmico (`while`). O usuário pode cadastrar quantas pessoas quiser informando Nome e Altura. O sistema valida se os dados são consistentes antes de inserir e, ao clicar em "Finalizar", exibe o relatório formatado de todas as alturas.
* **Conceitos Praticados:** Coleções de Objetos (`Array of Objects`), loops dinâmicos baseados em eventos, validação de entradas de dados com `isNaN()`, métodos de array (`forEach`).

---

## 🎨 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização moderna utilizando variáveis de cores escuras (Dark Mode baseado na paleta *Catppuccin*), Flexbox para alinhamento centralizado e transições suaves nos botões.
* **JavaScript (ES6):** Lógica de programação, captura de dados dos inputs do formulário, processamento de arrays e manipulação dinâmica do DOM para exibição dos resultados.

---
Desenvolvido para fins de estudo e fixação de lógica em JavaScript. Crie, teste e explore o código! 💻