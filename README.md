# Exercício: Lista de tarefas com DOM


## Importante

Neste exercício, não vamos usar eventos. Os botões `Editar` e `Remover` devem apenas aparecer na tela. Eles serão utilizados no próximo exercício, quando vamos aprender a criar, editar e remover tarefas a partir de ações da pessoa usuária.
Neste exercício, você vai usar JavaScript para transformar os dados de um array em elementos HTML. A base da página e os estilos já estão prontos. Sua tarefa é construir a lista de forma dinâmica, sem escrever os itens diretamente no HTML.

## Contexto

No arquivo `index.js`, existe um array chamado `tarefas`. Cada objeto representa uma tarefa que deve aparecer na tela.

```js
const tarefas = [
  {
    id: 1,
    titulo: "Revisar seleção de elementos",
    descricao: "Praticar querySelector e querySelectorAll.",
    prioridade: "alta",
    concluida: false,
  },
];
```

O HTML já possui o container, o título e a lista vazia:

```html
<ul id="lista-tarefas" class="lista-tarefas"></ul>
```

## Sua tarefa

Crie, com JavaScript, um item para cada objeto do array e insira todos eles dentro de `#lista-tarefas`.

Cada objeto deve gerar uma estrutura parecida com esta:

```html
<li class="tarefa tarefa-concluida" data-id="2" data-status="concluida">
  <input
    class="tarefa-checkbox"
    type="checkbox"
    aria-label="Concluir: Criar elementos com JavaScript"
    checked
  />
  <div class="tarefa-conteudo">
    <h3 class="tarefa-titulo">Criar elementos com JavaScript</h3>
    <p class="tarefa-descricao">Montar cada item da lista usando createElement.</p>
  </div>
  <span class="tarefa-prioridade prioridade-media">media</span>
  <div class="acoes-tarefa">
    <button class="botao botao-editar" type="button" data-acao="editar">Editar</button>
    <button class="botao botao-remover" type="button" data-acao="remover">Remover</button>
  </div>
</li>
```

## Requisitos

- Selecionar a lista com `document.querySelector()`.
- Percorrer o array de tarefas.
- Criar os elementos com `document.createElement()`.
- Preencher os textos usando `innerText`.
- Adicionar as classes com `classList.add()`.
- Adicionar os atributos com `setAttribute()`.
- Usar o valor de `concluida` para decidir se o item recebe `.tarefa-concluida`.
- Usar o valor de `prioridade` para adicionar a classe correspondente: `.prioridade-alta`, `.prioridade-media` ou `.prioridade-baixa`.
- Inserir os elementos na ordem correta dentro do item.
- Inserir cada item dentro da lista com `appendChild()` ou `append()`.
- Atualizar o contador com a quantidade de objetos do array.

Não altere a estrutura principal do `index.html` nem escreva as tarefas diretamente nele.

## Desafios extras

- Alterar o texto do título usando JavaScript.
- Exibir uma mensagem quando o array estiver vazio.
- Criar uma classe visual diferente para tarefas de prioridade alta.
