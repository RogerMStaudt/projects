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

const taskRegion = document.getElementById('task-region')

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
    let idNumber = getNumberOfId(id)

    let task = searchItem(idNumber)

    let idList = []

    for (let i = 0; i < list.length; i++) {
        idList.push[list[i].id]
    }

    reorganizeIds(idList)
}

function updateTask(id) {

}

function sequenceId() {
    if (tasks.length == 0) {
        return 1
    } else {
        return tasks[tasks.length - 1].id + 1
    }
}

function reorganizeIds(list) {
    if (list.length < 2) {
        return list
    } else {
        pivot = list[Math.round((list.length - 1) / 2)].id
        left = []
        right = []
        
        for (let i = 0; i < list.length; i++) {
            if (list[i] < pivot) {
                left.push(list[i])
            } else {
                right.push(list[i])
            }
        }

        return reorganizeIds(left) + [pivot] + reorganizeIds(right)
    }
}

function displayTask() {
    for (let i = 0; i < tasks.length; i++) {
        newLi = document.createElement("li")

        newInput = document.createElement("input")
        newInput.value = tasks[i].text
        newInput.id = 'task-' + tasks[i].id

        newButtonEdit = document.createElement("button")
        newButtonEdit.textContent = 'Edit'
        newButtonEdit.id = 'edit-' + tasks[i].id

        newButtonDelete = document.createElement("button")
        newButtonDelete.textContent = 'Delete'
        newButtonDelete.id = 'delete-' + tasks[i].id

        taskRegion.appendChild(newLi)
        newLi.appendChild(newInput)
        newLi.appendChild(newButtonEdit)
        newLi.appendChild(newButtonDelete)
    }
}

function getNumberOfId(id) {
    tracePosition = id.indexOf("-")

    return Number(id.substring(tracePosition, id.length))
}

displayTask()