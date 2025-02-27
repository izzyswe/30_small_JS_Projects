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
  //setting the class attribute
  li.setAttribute('class', 'item-list');
 
  const para = document.createElement('p');

  // creating the add button
  const addBtn = document.createElement('button');
  const addBtnText = document.createTextNode('Add');
  //setting add button attributes
  addBtn.setAttribute('id', 'add');
  addBtn.setAttribute('class', 'btn');
  
  // creating the edit button
  const editBtn = document.createElement('button');
  const EditBtnText = document.createTextNode('Edit');
  // setting edit button attributes
  editBtn.setAttribute('id', 'edit');
  editBtn.setAttribute('class', 'btn');
  
  // creating the delete button
  const deleteBtn = document.createElement('button');
  const DeleteBtnText = document.createTextNode('Delete');
  // setting delete button attributes
  deleteBtn.setAttribute('id', 'delete');
  deleteBtn.setAttribute('class', 'btn');
  
  let taskName = inputTask.value;
  para.textContent = taskName;
  li.appendChild(para);

  //li.textContent = taskName;
  //added text to the addbutton
  addBtn.appendChild(addBtnText);
  //added button to the li
  li.appendChild(addBtn);

  //added text to the edit button
  editBtn.appendChild(EditBtnText);
  //added button to the li
  li.appendChild(editBtn);

  //added text to the delete button
  deleteBtn.appendChild(DeleteBtnText);
  //added button to the li
  li.appendChild(deleteBtn);

  //appended the li to the ul
  taskList.appendChild(li);
});

// Event Listener for the delete button
taskList.addEventListener('click', function(e){
  if(e.target.id === 'delete'){
    e.target.parentElement.remove();
  }
});

// Event Listener for the edit button
taskList.addEventListener('click', function(e){
  if(e.target.id === 'edit'){
    let editTask = prompt('Edit Task');
    e.target.parentElement.firstChild.textContent = editTask;
  }
});
