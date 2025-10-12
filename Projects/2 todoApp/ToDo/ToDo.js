let todoList = [];

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let todoItem = inputElement.value;
    console.log(todoItem);
    todoList.push(todoitem);
    inputElement.value = "";
}

function displayItems() {
    let displayElement = document.querySelector("#todoItems");
    for (let i = 0; i < todoList.length; i++) {
        displayElement.innerText = displayElement.innerText + todoList[i];
    } 
}