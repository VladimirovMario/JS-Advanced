function addItem() {
  const input = document.getElementById(`newItemText`);
  const ul = document.getElementById(`items`);
  const li = document.createElement(`li`);
  ul.appendChild(li);
  li.textContent = input.value;
 
 
 
  // li.id = `my-li`// we can add and id 



  //clearing the input:
  input.value = ``;
  
}
