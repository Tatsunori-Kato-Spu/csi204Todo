document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let taskInput = document.getElementById("task-input");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;

            let taskList = document.getElementById("todo-list");
            let li = document.createElement("li");
            li.className = "todo-item";
            li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
            taskList.appendChild(li);

            saveTask(taskText);
            taskInput.value = "";
        }

        function removeTask(button) {
            let li = button.parentElement;
            let taskText = li.textContent.replace("Remove", "").trim();
            li.remove();
            deleteTask(taskText);
        }

        function saveTask(task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function deleteTask(task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("todo-list");
            tasks.forEach(task => {
                let li = document.createElement("li");
                li.className = "todo-item";
                li.innerHTML = `${task} <button onclick="removeTask(this)">Remove</button>`;
                taskList.appendChild(li);
            });
        }