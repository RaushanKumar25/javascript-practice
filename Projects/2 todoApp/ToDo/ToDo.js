let todoList = [];

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let todoItem = inputElement.value.trim();

    if (todoItem !== "") {
        todoList.push(todoItem);
        inputElement.value = "";
        displayItems();
    }
}

function displayItems() {
    let displayElement = document.querySelector("#todoItems");
    displayElement.innerText = "";

    for (let i = 0; i < todoList.length; i++) {
        displayElement.innerText += (i + 1) + ". " + todoList[i] + "\n";
    }
}
