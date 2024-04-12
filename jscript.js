// JavaScript code for ToDo List App

// Get the form element
const form = document.querySelector('form');

// Get the task list containers
const pendingList = document.querySelector('.Pending');
const importantList = document.querySelector('.Impt');
const completedList = document.querySelector('.Completed');

// Add event listener to the form's submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const title = document.querySelector('#act').value;
    const date = document.querySelector('#date').value;
    const description = document.querySelector('#dec').value;
    const important = document.querySelector('#imp').value;

    // Create new task item
    const taskItem = document.createElement('li');
    const taskTitle = document.createElement('span');
    const taskDate = document.createElement('span');
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const descriptionText = document.createElement('p');

    // Set task item content
    taskTitle.textContent = title;
    taskDate.textContent = date;
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    descriptionText.textContent = description;

    // Add event listeners to buttons
    delBtn.addEventListener('click', function() {
        taskItem.remove(); // Remove the task item when delete button is clicked
    });

    checkBtn.addEventListener('click', function() {
        if (taskItem.parentElement === pendingList) {
            // Move the task item to the completed list when check button is clicked
            completedList.appendChild(taskItem);
            checkBtn.style.display = "none";
        }
    });
    checkBtn.addEventListener('click', function() {
        if (taskItem.parentElement === importantList) {
            // Move the task item to the completed list when check button is clicked
            completedList.appendChild(taskItem);
            checkBtn.style.display = "none";
        }
    });

    // Append task item content to task item
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(document.createTextNode(': '));
    taskItem.appendChild(taskDate);
    taskItem.appendChild(delBtn);
    taskItem.appendChild(checkBtn);
    taskItem.appendChild(document.createElement('br'));
    taskItem.appendChild(descriptionText);

    // Determine the list to add the task item based on importance
    if (important === 'Yes') {
        importantList.appendChild(taskItem);
    } else {
        pendingList.appendChild(taskItem);
    }

    // Reset the form
    form.reset();
});
