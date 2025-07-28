// Ao clicar no botão, a tarefa digitada deve ser exibida na tela (ex: dentro de uma <ul>)
//Limpe o campo após a adição.
//Use funções com arrow function para manipular o clique 
//Novo Commit.
//Modifique o código anterior para que, ao adicionar uma tarefa, ela também seja salva no localStorage.
//Ao recarregar a página, as tarefas salvas devem aparecer automaticamente.
//Use métodos como JSON.stringify() e JSON.parse().


const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');


const carregarTarefas = () => {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefasSalvas.forEach(tarefa => adicionarTarefa(tarefa));
};


const salvarTarefas = () => {
  const tarefas = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    tarefas.push(li.textContent);
  });
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
};


const adicionarTarefa = (texto) => {
  const li = document.createElement('li');
  li.textContent = texto;
  list.appendChild(li);
  salvarTarefas(); 
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const tarefa = input.value.trim();
  if (tarefa === '') return;

  adicionarTarefa(tarefa);
  input.value = ''; 
});


carregarTarefas();
