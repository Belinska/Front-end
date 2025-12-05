const STORAGE_KEY = "tasks";

export function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function render() {
  const tasks = loadTasks();
  $("#tasks").empty();

  tasks.forEach((task, i) => {
    $("#tasks").append(
      `<li class="list-group-item" data-index="${i}">${task}</li>`
    );
  });
}

export function addTask() {
  const text = $("#newTask").val().trim();
  if (!text) return;

  const tasks = loadTasks();
  tasks.push(text);
  saveTasks(tasks);

  $("#newTask").val("");
  render();
}
