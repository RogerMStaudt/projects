tasks = [
    {
        id: 1,
        text: 'Do de laundry',
        status: 0
    },
    {
        id: 2,
        text: 'Make lunch',
        status: 0
    },
    {
        id: 3,
        text: 'Study',
        status: 1
    }
]

taskRegion = document.getElementById('task-region')

function createTask() {
    tasks.push(
        {
            text: '',
            status: 0
        }
    )
}

function deleteTask(id) {

}

function updateTask(id) {

}

createTask()

function displayTask() {
    for (let i = 0; i < tasks.length; i++) {
        newTask = document.createElement("li")

        newTask.textContent = tasks[i].text

        taskRegion.appendChild(newTask)
    }
}

displayTask()