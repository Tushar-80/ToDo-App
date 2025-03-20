const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

document.addEventListener('DOMContentLoaded', loadTasks);

addBtn.addEventListener('click', addTask);

todoList.addEventListener('click', removeTask);

function addTask() {
    const taskText = todoInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  li.appendChild(removeBtn);

  todoList.appendChild(li);

  saveTasks();
  todoInput.value = '';
}

