document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // form and input values
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTodo,);
  const taskList = document.getElementById('tasks');
  taskList.addEventListener('click', removeTask);

  function addTodo(e){
    e.preventDefault();

    //As a user, I should be able to type a task into the input field.
    //As a user, I should be able to click some form of a submit button.
    //As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
    const newTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);
    const li = document.createElement('li');
    form.reset()
    li.appendChild(document.createTextNode(newTaskDescription));
    const removeBtn = document.createElement('button');
    removeBtn.appendChild(document.createTextNode('X'));
    li.appendChild(removeBtn);
    taskList.appendChild(li);

  }

  function removeTask(e) {
    e.target.parentNode.remove()
      }
    

  

});