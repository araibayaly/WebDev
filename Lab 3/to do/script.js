// Function to add a new task
function addTask(event) {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  // Check if the input is not empty and the key pressed is "Enter" or if the button is clicked
  if ((event && event.key === 'Enter' || !event) && taskInput.value.trim() !== '') {
    var li = document.createElement('li');
    li.innerHTML = `
      <div class="task-container" onclick="toggleDone(this)">
        <i class="far fa-circle"></i>
        <span>${taskInput.value}</span>
        <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
  }
}

// Function to toggle the done state
function toggleDone(taskContainer) {
  var circleIcon = taskContainer.querySelector('i.far.fa-circle');
  var taskText = taskContainer.querySelector('span');

  // Toggle the filled/empty state of the circle
  if (circleIcon.classList.contains('far')) {
    circleIcon.classList.remove('far');
    circleIcon.classList.add('fas');
    circleIcon.style.color = '#2cb1bb'; // Change color to blue
    taskText.style.textDecoration = 'line-through';
  } else {
    circleIcon.classList.remove('fas');
    circleIcon.classList.add('far');
    circleIcon.style.color = '#000'; // Reset color to black
    taskText.style.textDecoration = 'none';
  }
}

// Function to delete a task
function deleteTask(icon) {
  var taskItem = icon.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}



