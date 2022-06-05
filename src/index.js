import { projectList, Todo, setIndex, save, retrieve } from './logic'
import { format } from 'date-fns'

function displayMenu() {
 setIndex()
 const menu = document.createElement('select')
 const menuDiv = document.querySelector('#menu-div')
 menuDiv.innerHTML = '<p>Add task to: </p>'
 menu.setAttribute('id', 'menu')
  for (let i of projectList){
   const option = document.createElement('option')
   option.innerHTML = i.project
   option.setAttribute('value', i.index)
   menu.append(option)
  }
 menuDiv.append(menu)
}

function display() {
 displayMenu()
 document.querySelector('#projects').innerHTML = ''
 for (let i of projectList){
  const div = document.createElement('div')
  const div2 = document.createElement('div')
  const h3 = document.createElement('h3')

  // div.setAttribute('data-index', i.index)
  div.className = 'project'
  h3.innerHTML = i.project
  div2.className = 'tasks'
  if (i.tasks.length == 0){
   const div4 = document.createElement('div')
   const h6 = document.createElement('h6')

   div4.className = 'empty'
   h6.innerHTML = 'There are no tasks added to this project.'
   div4.append(h6)
   div2.append(div4)
  }
  for (let j of i.tasks){
   const div3 = document.createElement('div')
   const p = document.createElement('p')
   const p2 = document.createElement('p')
   const p3 = document.createElement('p')
   const img = document.createElement('img')
   div3.className = 'task flex'
   div3.onclick = () => {
    div3.querySelector('.description').classList.toggle('show')
    if (div3.className == 'task flex'){
    div3.className = 'task grid'
   } else {
    div3.className = 'task flex'
   }
   }
   p.className = 'title'
   p.innerHTML = j.title
   p2.className = 'description'
   p2.innerHTML = j.description
   p3.className = 'date'
   p3.innerHTML = j.dueDate
   img.setAttribute('src', 'cross.png')
   img.setAttribute('data-index', `${i.index},${j.index}`)
   img.className = 'del'
   img.onclick = () => {
    let index = img.getAttribute('data-index')
    let project = index.slice(0, 1)
    let task = index.slice(2, 3)
    projectList[project]['tasks'].splice(task, 1)
    save()
    display()
   }

   div3.append(p)
   div3.append(p2)
   div3.append(p3)
   div3.append(img)
   div2.append(div3)
  }
  div.append(h3)
  div.append(div2)
  document.querySelector('#projects').append(div)
 }

 // Display plus sign
 const plus = document.createElement('p')
 plus.innerHTML = '+'
 plus.setAttribute('id', 'plus')
 plus.onclick = () => {
  document.querySelector('#modal-bg').style.display = 'flex'
 }
 document.querySelector('#projects').append(plus)

}

function addProject() {
 const modal = document.querySelector('#modal-bg')
 const exit = modal.querySelector('img')

 exit.onclick = () => {
  modal.style.display = 'none'
 }

 modal.querySelector('button').onclick = () => {
  let name = modal.querySelector('input')
  let newProject = {
   project: name.value,
   tasks: []
  }
  projectList.push(newProject)
  name.value = ''
  modal.style.display = 'none'
  save()
  display()
  console.log(projectList)
 }
}

document.addEventListener('DOMContentLoaded', () => {
 const input = document.querySelector('#add-task')
 const inpField = input.querySelector('input')
 const textarea = input.querySelector('textarea')
 const date = document.querySelector('#calendar')
 const submit = input.querySelector('button')
 const tasks = document.querySelectorAll('.task')

 retrieve()
 addProject()

 submit.onclick = () =>{
  let task = inpField.value
  let description = textarea.value
  let dueDate = date.valueAsDate
  let optionVal = document.querySelector('select').value

  dueDate = format(new Date(dueDate), "d MMM yyyy")

  for (let i of projectList){
   if (i.index == optionVal){
    let todo = new Todo(task, description, dueDate)
    i.tasks.push(todo)
    save()
    display()
   }
  }
  inpField.value = ''
  textarea.value = ''
  console.log(projectList)
 }

})

export { display }