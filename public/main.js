// Delete
bs = document.querySelectorAll('.fa-trash')

for(b of bs)
  b.addEventListener('click', deleteTask)

async function  deleteTask(){
  li = this.parentNode
  id = li.getAttribute('_id')
  
  res = await fetch("/todos/deleteTask", {
    method: "delete",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({_id : id}) 
  })

  data = await res.json()
  console.log(data)

  location.reload()

}

// Toogle State
checks = document.querySelectorAll('input[type="checkbox"]')

for(check of checks)
  check.addEventListener('click', toogleState)

  async function toogleState(){
    li = this.parentNode
    id = li.getAttribute('_id')
    res = await fetch("/todos/toogleState",{
      method: "put",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ "_id": id})
    })

    data = await res.json()
    //console.log(data)
    location.reload()

  }


// Update Task
icons = document.querySelectorAll(".fa-edit")

for( icon of icons )
  icon.addEventListener("click", unHideForm)
  
function unHideForm(){
    
    hideAllUpdateForms()
  
    li = this.parentNode
    id = li.getAttribute("_id")
    
    input_update = li.querySelector(".update_input")
    input_update.style.display = "inline"
    input_update.value = li.querySelector('span').innerText
    input_update.focus()
    
    input_button = li.querySelector(".update_button")
    input_button.style.display = "inline"
    
}


function hideAllUpdateForms(){
  inputs = document.querySelectorAll(".update_input")
  for( input of inputs)
    input.style.display = 'none'
    
  buttons = document.querySelectorAll(".update_button")
  for( button of buttons)
    button.style.display = 'none'
}

update_buttons = document.querySelectorAll(".update_button")
for( button of update_buttons )
  button.addEventListener("click", updateTask)


async function updateTask(){
  li = this.parentNode
  id = li.getAttribute('_id')
  
  input_task = li.querySelector('.update_input')
  task_updated = input_task.value
  
  res = await fetch("/todos/updateTask/"+id, {
      method : "put",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "task_updated": task_updated
      })
  })
  data = await res.json()
  console.log( data )
  location.reload()
}

