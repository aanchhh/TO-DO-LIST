document.addEventListener('DOMContentLoaded', function () {

 // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');

    // Render tasks
    savedTasks.forEach(task => renderTask(task));

    // Add task function
    window.addTask = function () {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const newTask = {
                text: taskText,
                id: new Date().getTime()
            };

            renderTask(newTask);

            // Save tasks to local storage
            savedTasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            taskInput.value = '';
        }
    };

    // Delete task function
    window.deleteTask = function (taskId) {
        const taskIndex = savedTasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            savedTasks.splice(taskIndex, 1);

            // Save tasks to local storage
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            // Remove task from the DOM
            document.getElementById(`task-${taskId}`).remove();
        }
    };

    window.editTask = function (taskId) {
        const taskElement = savedTasks.getElementById(`task-${taskId}`);
        const taskTextElement = taskElement.querySelector('span');
        const editContainer = taskElement.querySelector('.edit-container');
        const editInput = taskElement.querySelector('input');
    
        // Display the input field and populate it with the current task text
        editInput.value = taskTextElement.textContent;
        editContainer.style.display = 'block';
        taskTextElement.style.display = 'none';
    };
    window.editTask = function (taskId) {
        const taskElement = document.getElementById(`task-${taskId}`);
        const taskTextElement = taskElement.querySelector('span');
        const editContainer = taskElement.querySelector('.edit-container');
        const editInput = taskElement.querySelector('input');
    
        // Display the input field and populate it with the current task text
        editInput.value = taskTextElement.textContent;
        editContainer.style.display = 'block';
        taskTextElement.style.display = 'none';
    };
    
    window.saveEditedTask = function (taskId) {
        const taskElement = document.getElementById(`task-${taskId}`);
        const taskTextElement = taskElement.querySelector('span');
        const editContainer = taskElement.querySelector('.edit-container');
        const editInput = taskElement.querySelector('input');
    
        // Save the edited task text
        taskTextElement.textContent = editInput.value;
    
        // Hide the input field and display the updated task text
        editContainer.style.display = 'none';
        taskTextElement.style.display = 'inline';
    
        // Update the task in the savedTasks array
        const taskIndex = savedTasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            savedTasks[taskIndex].text = editInput.value;
    
            // Save tasks to local storage
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        }
    };

    // Render task function
    function renderTask(task) {
        const li = document.createElement('li');
        li.id = `task-${task.id}`;
        li.innerHTML = `
            <span>${task.text}</span>
            <span class="edit-container" style="display:none;">
                <input type="text" value="${task.text}" />
                <button onclick="saveEditedTask(${task.id})">Save</button>
            </span>
            <span class="edit-btn" onclick="editTask(${task.id})">
                <img src="./edit.png" alt="Edit Function">
            </span>
            <span class="delete-btn" onclick="deleteTask(${task.id})">
                <img src="./delete.png" alt="Delete">
            </span>
        `;
        taskList.appendChild(li);
    }    
});
