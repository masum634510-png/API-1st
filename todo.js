//part 01
const loadTodo = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      todoDisplay(data)
    })
}
// part 02
const todoDisplay = todos => {
    //------step 01------
  const todoContainer = document.getElementById('todo-container')
  todoContainer.innerHTML = ''

  todos.forEach ((todo) => {
    //------step 02------
    const todoCard = document.createElement('div')
    todoCard.innerHTML = `
   <div class = "todo-card">
   <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
   <h4>${todo.title}</h4>
   </div>
  `
    //-----step 03----
    todoContainer.append(todoCard);
  })
}
loadTodo();
