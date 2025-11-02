const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const todosWrapper = document.querySelector(".js--todos-wrapper");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos() {
  todosWrapper.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) {
      todoItem.classList.add("todo-item--checked");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.title = "Позначити як виконане";
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const description = document.createElement("span");
    description.classList.add("todo-item__description");
    description.textContent = todo.description;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-item__delete");
    deleteButton.textContent = "Видалити";
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(description);
    todoItem.appendChild(deleteButton);
    todosWrapper.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = {
    description: input.value.trim(),
    completed: false,
  };
  if (newTodo.description) {
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    form.reset();
  }
});

renderTodos();
