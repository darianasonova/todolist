const TodoInput = document.getElementById("new-todo");
const TodoList = document.getElementById("todos-lst");

function AddTodo() {
  const todo = TodoInput.value;
  TodoInput.value = "";
  let todoListElement = document.createElement("li");
  todoListElement.innerHTML = todo;
  todoListElement.onclick = finishTodo;
  todoListElement.ondblclick = DeleteTodo;
  TodoList.appendChild(todoListElement);
}

function finishTodo(event) {
  event.target.style.textDecoration = "line-through";
  event.target.style.color = "grey";
}

function DeleteTodo(event) {
  event.preventDefault();
  event.target.parentNode.removeChild(event.target);

}

TodoInput.onkeyup = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    AddTodo();
  }
};