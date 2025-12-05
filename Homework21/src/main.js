import { loadTasks, saveTasks, render, addTask } from "./utilities.js";

$(function () {
  render();

  $("#addBtn").click(addTask);

  $("#newTask").keydown(function (e) {
    if (e.key === "Enter") addTask();
  });

  $("#tasks").on("click", "li", function () {
    const text = $(this).text();
    $("#taskModalBody").text(text);

    const modal = new bootstrap.Modal(document.getElementById("taskModal"));
    modal.show();
  });
});
