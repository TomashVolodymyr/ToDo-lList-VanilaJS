//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault()
    //todo DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<li class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDIV.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<li class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDIV.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDIV);
}