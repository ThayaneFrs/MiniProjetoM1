// Ao clicar no botão, a tarefa digitada deve ser exibida na tela (ex: dentro de uma <ul>)
//Limpe o campo após a adição.
//Use funções com arrow function para manipular o clique 
//Novo Commit.
//Modifique o código anterior para que, ao adicionar uma tarefa, ela também seja salva no localStorage.
//Ao recarregar a página, as tarefas salvas devem aparecer automaticamente.
//Use métodos como JSON.stringify() e JSON.parse().
//Novo Commit.
//Adicione um botão “Remover” ao lado de cada tarefa exibida.
//Ao clicar, a tarefa deve ser removida da tela e do localStorage.
//Use filter() para remover a tarefa correta do array salvo.
//Novo Commit
//Implemente um campo de busca que permita filtrar as tarefas conforme o usuário digita.
//Ao digitar no campo, use um for ou filter() para exibir apenas as tarefas que contêm o texto buscado.



const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const searchInput = document.querySelector('#search');

let tarefas = [];


const carregarTarefas = () => {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas = tarefasSalvas;
  tarefas.forEach(adicionarTarefaAoDOM);
};


const salvarTarefas = () => {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
};


const adicionarTarefaAoDOM = (texto) => {
  const li = document.createElement('li');
  li.textContent = texto;

  
  const botao = document.createElement('button');
  botao.textContent = 'Remover';
  botao.style.marginLeft = '10px';
  botao.addEventListener('click', () => removerTarefa(texto, li));

  li.appendChild(botao);
  list.appendChild(li);
};


const adicionarTarefa = (texto) => {
  tarefas.push(texto);
  adicionarTarefaAoDOM(texto);
  salvarTarefas();
};


const removerTarefa = (texto, elementoLi) => {
  tarefas = tarefas.filter(tarefa => tarefa !== texto);
  elementoLi.remove();
  salvarTarefas();
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const tarefa = input.value.trim();
  if (tarefa === '') return;

  adicionarTarefa(tarefa);
  input.value = '';
});

searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase();
  filtrarTarefas(termo);
});

const filtrarTarefas = (termo) => {
  list.innerHTML = '';

  const tarefasFiltradas = tarefas.filter(tarefa =>
    tarefa.toLowerCase().includes(termo)
  );

  tarefasFiltradas.forEach(adicionarTarefaAoDOM);
};


carregarTarefas();
