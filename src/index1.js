import { projectList, Todo } from './logic'

function displayMenu() {
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

function setIndex() {
 let count = 0
 for (let i of projectList){
  i.index = count
  count++
 }
}

function addProject() {
 const add = document.querySelector('#plus')
 const modal = document.querySelector('#modal-bg')
 const exit = modal.querySelector('img')

 add.onclick = () => {
  modal.style.display = 'flex'
 }
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
  modal.style.display = 'none'
  // displayMenu()
  display()
  console.log(projectList)
 }
}

function display() {
 displayMenu()
 setIndex()
  
  
  document.querySelector('#projects').innerHTML = ''
  
  
  
  for (let i of projectList){
   const div = document.createElement('div')
   const div2 = document.createElement('div')
   const h3 = document.createElement('h3')
   

   div.setAttribute('data-index', i.index)
   div.className = 'project'
   h3.innerHTML = i.project
   div2.className = 'tasks'
   for (let j of i.tasks){
    const div3 = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')

    div3.className = 'task'
    p.innerHTML = j.title
    img.setAttribute('src', 'cross.png')

    div3.append(p)
    div3.append(img)
    div2.append(div3)
   }
   div.append(h3)
   div.append(div2)
   document.querySelector('#projects').append(div)
   
   
   
  }
  // document.querySelector('#add-task').append(menu)

  // const plus = document.createElement('img')
  // plus.setAttribute('src', 'cross.png')
  // plus.setAttribute('id', 'plus')
  const plus = document.createElement('p')
  plus.innerHTML = '+'
  plus.setAttribute('id', 'plus')
  document.querySelector('#projects').append(plus)

 }

document.addEventListener('DOMContentLoaded', () => {

 const input = document.querySelector('#add-task')
 const inpField = input.querySelector('input')
 
 
 const submit = input.querySelector('button')


 // displayMenu()
 display()
 // setIndex
 addProject()
 

 // document.querySelectorAll('p').forEach

 submit.onclick = () =>{
  const div = document.createElement('div')
  const p = document.createElement('p')
  const img = document.createElement('img')
  let task = inpField.value
  let optionVal = document.querySelector('select').value

  for (let i of projectList){
   if (i.index == optionVal){

    let todo = new Todo(task, '')
    i.tasks.push(todo)
    display()
    // alert()
    // p.innerHTML = task
    // img.setAttribute('src', 'cross.png')
    // div.className = 'task'

    // div.append(p)
    // div.append(img)
    // document.querySelector(`[data-index="${i.index}"]`).querySelector('.tasks').append(div)
    // tasks.append(div)

   }
  }
  inpField.value = ''
  console.log(projectList)
  
  
 }

})