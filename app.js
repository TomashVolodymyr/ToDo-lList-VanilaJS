
//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault()
    //todo DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDIV.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDIV.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDIV);
    //Clear Todo INPUT VALUE
    todoInput.value = ''
}

function deleteCheck(event) {
    const target = event.target;
    //DELETE TODO
    if (target.classList[0] === 'trash-btn') {
        const todo = target.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    //CHECK MARK
    if (target.classList[0] === 'complete-btn') {
        const todo = target.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
       switch (event.target.value) {
           case 'all':
               todo.style.display = 'flex';
               break;
       case 'completed':
              if (todo.classList.contains('completed')) {
                  todo.style.display = 'flex';
              } else {
                todo.style.display = 'none';
              }
               break;
       case 'uncompleted':
              if (!todo.classList.contains('completed')) {
                  todo.style.display = 'flex';
              } else {
                todo.style.display = 'none';
              }
               break;    
       } 
    });
}