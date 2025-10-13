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
    let containerElement = document.querySelector("#todoItems");

    let newHTML = '';
    displayElement.innerText = "";

    for (let i = 0; i < todoList.length; i++) {
        newHTML += `
        <p>${todoList[i]}</p>
        <button>Delete<\button>
        `;
        
        displayElement.innerText += (i + 1) + ". " + todoList[i] + "\n";
    }
}
