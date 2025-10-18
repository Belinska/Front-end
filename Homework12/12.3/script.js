const list = document.getElementById('todo-list');
const toDo = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');

list.addEventListener('click', function(event) {
    if (event.target.matches('.delete-btn')) {
        const li = event.target.closest('li');
        if (li) li.remove();
    }
})

btn.addEventListener('click', function(event) {
    event.preventDefault();
    const task = toDo.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task + ' ';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);
        list.appendChild(li);
        toDo.value = '';
    }
})