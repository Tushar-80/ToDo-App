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

function removeTask(event) {
    if (event.target.tagName === 'BUTTON') {
      const task = event.target.parentElement;
      task.remove();
      saveTasks();
    }
  }
  
  function saveTasks() {
    const tasks = [];
    const taskItems = todoList.querySelectorAll('li');
    taskItems.forEach(item => {
      tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (savedTasks && savedTasks.length > 0) {
      savedTasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;
  
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);
  
        todoList.appendChild(li);
      });
    }
  }