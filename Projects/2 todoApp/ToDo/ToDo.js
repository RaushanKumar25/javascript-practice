let todoList = ['Buy Milk', 'Go to College', 'Read Book'];

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
        <span>${todoList[i]}</span>
        <button>Delete<\button>
        `;
    }
    containerElement.innerHTML = newHtml;
}
