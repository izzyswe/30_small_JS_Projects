// Grabbing the neccessary modules
const inputTask = document.getElementById('input');
const submitForm = document.getElementById('form');
const ultaskList = document.getElementById('UList');
const taskList = document.getElementById('list');
//const li = document.createElement('li');
//const taskList = document.getElementById('task-list');

// Event Listener
submitForm.addEventListener('submit', function(e){
  console.log('clicked');
  e.preventDefault();  
  //creating an element
    const li = document.createElement('li');
    const addBtn = document.createElement('button');
    const addBtnText = document.createTextNode('Add');
    addBtn.appendChild(addBtnText);
   li.appendChild(addBtn);
  taskList.appendChild(li);

    //const task = inputTask.value;
    //const li = document.createElement('li');
    //li.appendChild(document.createTextNode(task));
    //ultaskList.appendChild(li);
    //inputTask.value = '';
    //console.log(task);
});
