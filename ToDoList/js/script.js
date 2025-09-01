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
            id: sequenceId(),
            text: '',
            status: 0
        }
    )
}

function deleteTask(id) {
    task = searchItem(id)

    reorganizeIds(tasks)
}

function updateTask(id) {

}

function sequenceId() {
    return tasks[tasks.length - 1].id + 1
}

function reorganizeIds(list) {
    if (list.length < 2) {
        return list
    } else {
        pivot = round(list.length / 2)
        left = []
        right = []

        for (let i = 0; i < list.length; i++) {
            if (list[i] < pivot) {
                left.push(list[i])
            } else {
                right.push(list[i])
            }
        }

        return reorganizeIds(left) + pivot + reorganizeIds(right)
    }
}

function displayTask() {
    for (let i = 0; i < tasks.length; i++) {
        newTask = document.createElement("li")

        newTask.textContent = tasks[i].text
        newTask.id = tasks[i].id

        taskRegion.appendChild(newTask)
    }
}

displayTask()

createTask()