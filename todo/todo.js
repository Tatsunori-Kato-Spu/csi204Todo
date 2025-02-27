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

// เมื่อเอกสารโหลดเสร็จ (DOMContentLoaded)

// เมื่อหน้าเว็บโหลดเสร็จ จะเรียกฟังก์ชัน loadTasks() เพื่อโหลดรายการงานจาก localStorage และแสดงผลบนหน้าเว็บ
// การเพิ่มงาน (addTask function)

// รับข้อมูลจากฟิลด์อินพุตที่ใช้สำหรับใส่รายการงาน (task-input)
// ถ้าข้อความในฟิลด์อินพุตไม่ว่างเปล่า (หลังจากตัดช่องว่าง) จะทำการเพิ่มงานใหม่
// สร้าง <li> ใหม่ที่มีข้อความงานและปุ่ม "Remove"
// เพิ่ม <li> นี้ไปที่รายการงานในหน้าเว็บ
// บันทึกงานใหม่ลงใน localStorage
// ล้างค่าฟิลด์อินพุตหลังจากเพิ่มงานเสร็จ
// การลบงาน (removeTask function)

// เมื่อคลิกที่ปุ่ม "Remove" จะเรียกฟังก์ชัน removeTask()
// ฟังก์ชันนี้จะหาข้อความงานจาก <li> ที่คลิกแล้วลบงานนั้นออกจากหน้าจอ
// ลบงานจาก localStorage โดยเรียกฟังก์ชัน deleteTask() เพื่ออัพเดตข้อมูลใน localStorage
// การบันทึกงานลงใน localStorage (saveTask function)

// ฟังก์ชัน saveTask() จะดึงรายการงานทั้งหมดจาก localStorage (ถ้ามี)
// เพิ่มงานใหม่ที่เพิ่งสร้างลงในรายการ
// อัพเดตรายการงานใน localStorage ด้วยการแปลงเป็น JSON
// การลบงานออกจาก localStorage (deleteTask function)

// ฟังก์ชัน deleteTask() จะดึงรายการงานจาก localStorage
// ใช้ filter() เพื่อลบงานที่ถูกลบออกจากรายการ
// อัพเดตรายการงานใน localStorage ด้วยข้อมูลที่เหลือ
// การโหลดงานจาก localStorage (loadTasks function)

// ฟังก์ชัน loadTasks() จะดึงข้อมูลรายการงานจาก localStorage
// สร้าง <li> สำหรับแต่ละงานที่เก็บใน localStorage
// เพิ่มแต่ละงานลงในหน้าจอให้ผู้ใช้เห็น