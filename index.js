const tarefas = [
  {
    id: 1,
    titulo: "Revisar seleção de elementos",
    descricao: "Praticar querySelector e querySelectorAll.",
    prioridade: "alta",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Criar elementos com JavaScript",
    descricao: "Montar cada item da lista usando createElement.",
    prioridade: "media",
    concluida: true,
  },
  {
    id: 3,
    titulo: "Estudar atributos e classes",
    descricao: "Usar setAttribute e classList para personalizar os itens.",
    prioridade: "baixa",
    concluida: false,
  },
];

// <------- seu código aqui ---->
const listaTarefas = document.querySelector("#lista-tarefas");

tarefas.forEach((tarefa) => {
   const item = document.createElement("li"); 

   item.classList.add("tarefa");

   if (tarefa.concluida === true) {
    item.classList.add ("tarefa-concluida");
    
   }
item.setAttribute("data-id", tarefa.id);

let status;

    if (tarefa.concluida === true) {
        status = "concluida";
    } else {
        status = "não concluida";
    }

    item.setAttribute("data-status", status);

    const checkbox = document.createElement("input");

    checkbox.classList.add("tarefa-checkbox");

    checkbox.setAttribute("type", "checkbox");

    checkbox.setAttribute("aria-label", "Concluir: " + tarefa.titulo);

    if (tarefa.concluida === true) {
    checkbox.setAttribute("checked", "checked");

    const tarefaConteudo = document.createElement("div");

    tarefaConteudo.classList.add("tarefa-conteudo");

      const tarefaTitulo = document.createElement("h3");

      tarefaTitulo.classList.add("tarefa-titulo");

      tarefaTitulo.innerText = tarefa.titulo;

      const tarefaDescricao = document.createElement("p");

      tarefaDescricao.classList.add("tarefa-descricao");

      tarefaDescricao.innerText = tarefa.descricao;

      tarefaConteudo.appendChild(tarefaTitulo);

      tarefaConteudo.appendChild(tarefaDescricao);

      const tarefaPrioridade = document.createElement("span");

      tarefaPrioridade.classList.add("tarefa-prioridade");

      tarefaPrioridade.classList.add("prioridade-" + tarefa.prioridade);

      tarefaPrioridade.innerText = tarefa.prioridade;

      const acoesTarefa = document.createElement("div");

      acoesTarefa.classList.add("acoes-tarefa");

      const botaoEditar = document.createElement("button");

      botaoEditar.classList.add("botao", "botao-editar");

      botaoEditar.setAttribute("type", "button");

      botaoEditar.setAttribute("data-acao", "editar");

      botaoEditar.innerText = "Editar";

      const botaoRemover = document.createElement("button");

      botaoRemover.classList.add("botao", "botao-remover");

      botaoRemover.setAttribute("type", "button");

      botaoRemover.setAttribute("data-acao", "remover");

      botaoRemover.innerText = "Remover";

      acoesTarefa.appendChild(botaoEditar);

      acoesTarefa.appendChild(botaoRemover);

      item.appendChild(checkbox);

       item.appendChild(tarefaConteudo);

       item.appendChild(tarefaPrioridade);

       item.appendChild(acoesTarefa);

       listaTarefas.appendChild(item);

}
});

const contador = document.querySelector("#contador");

contador.innerText = tarefas.length + " tarefas";



