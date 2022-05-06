const todos = [];
document.getElementById("editValue").style.display = "none";
// add a new todo
const addTodo = () => {
  let todoName = document.getElementById("todo_name").value.trim();
  if (!todoName == "") {
    todos.push(todoName);
    getTodos();
    document.getElementById("todo_name").value = "";
  } else {
    alert("Value cannot be null!");
  }
};

const getTodos = () => {
  let todoItems = "";
  setTimeout(() => {
    todos.forEach((todo, index) => {
      todoItems += `
        <li>
        ${todo} <input type="submit" value="Delete" onclick="deleteTodo(${index})"> <input type="submit" value="Edit" onclick="showEditForm(${index}, '${todo}')">
        </li>
      `;
    });
    document.getElementById("todoList").innerHTML = todoItems;
  }, 100);
};
  // delete Todo from list
const deleteTodo = (index) => {
  setTimeout(() => {
    document.getElementById("editValue").style.display = "none";
    todos.splice(index, 1);
    getTodos();
  }, 100);
};
// show edit form w
const showEditForm = (index, todo) => {
  setTimeout(() => {
    document.getElementById("editValue").style.display = "list-item";
    document.getElementById("edit_todo").value = todo;
    document.getElementById("hidd_key").value = index;
  }, 100);
};
// edit todo action
const editTodo = () => {
  setTimeout(() => {
    let todoNew = document.getElementById("edit_todo").value;
    let todoKey = document.getElementById("hidd_key").value;
    todos[todoKey] = todoNew;
    getTodos();
    document.getElementById("editValue").style.display = "none";
  }, 100);
};
// add check to all li
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
