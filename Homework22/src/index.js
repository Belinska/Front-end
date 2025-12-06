import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

$(function () {
  const STORAGE_KEY = "tasks";
  function loadTasks() {
    const s = localStorage.getItem(STORAGE_KEY);
    return s ? JSON.parse(s) : [];
  }
  function saveTasks(tasks) { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
  function render() {
    const tasks = loadTasks();
    $("#tasks").empty();
    tasks.forEach((task, i) => $("#tasks").append(`<li class="list-group-item" data-index="${i}">${task}</li>`));
  }
  function addTask() {
    const text = $("#newTask").val().trim();
    if (!text) return;
    const tasks = loadTasks(); tasks.push(text); saveTasks(tasks); $("#newTask").val(""); render();
  }
  $("#tasks").on("click", "li", function () {
    const text = $(this).text();
    $("#taskModalBody").text(text);
    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
  $("#addBtn").click(addTask);
  $("#newTask").keydown(function (e) { if (e.key === "Enter") addTask(); });
  render();
});
