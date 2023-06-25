let statusArray = [];

function addtask() {

    let taskInfo = {};
    taskInfo.taskName =  document.getElementById('taskName').value;
    taskInfo.taskDesxription =  document.getElementById('taskDesc').value;
    taskInfo.taskAssignee =  document.getElementById('taskAssign').value;
    
    statusArray.push(taskInfo);

    console.log('taskInfo',taskInfo);
    console.log('statusArray',statusArray);    
    
    let taskBox = document.createElement('div');

    let status = document.getElementById('statuslist').value;

    if (status === 'todo') {
        document.getElementById('todoMember').appendChild(taskBox);
        taskBox.className = 'newTodo';
    } else if (status === 'inprogress') {
        document.getElementById('inprogressMember').appendChild(taskBox);
        taskBox.className = 'newInprogress';
    } else if (status === 'testing') {
        document.getElementById('testingMember').appendChild(taskBox);
        taskBox.className = 'newTesting';
    } else {
        document.getElementById('doneMember').appendChild(taskBox);
        taskBox.className = 'newDone';
    }

    let taskTitle = document.createElement('h2');
    taskTitle.innerHTML = taskInfo.taskName;

    let taskDescription = document.createElement('p');
    taskDescription.innerHTML = taskInfo.taskDesxription;

    let taskAssignee = document.createElement('p');
    taskAssignee.innerHTML = taskInfo.taskAssignee;
    
    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskDescription);
    taskBox.appendChild(taskAssignee);
}