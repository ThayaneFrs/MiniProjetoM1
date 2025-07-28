// Ao clicar no botão, a tarefa digitada deve ser exibida na tela (ex: dentro de uma <ul>)
//Limpe o campo após a adição.
//Use funções com arrow function para manipular o clique 


const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recarregar a página

  const tarefa = input.value.trim();
  if (tarefa === '') return;

  adicionarTarefa(tarefa);
  input.value = ''; // Limpa o campo
});

const adicionarTarefa = (texto) => {
  const li = document.createElement('li');
  li.textContent = texto;
  list.appendChild(li);
};