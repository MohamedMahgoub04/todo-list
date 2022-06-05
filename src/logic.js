import { display } from './index'

let projectList = [{
 project: 'Default project',
 tasks: [
  {title: 'Water the plants', description: '', dueDate: '18 Jun 2022'},
  {title: 'Feed the dog', description: 'Chicken breast and bone', dueDate: '18 Jun 2022'},
  {title: 'Do the dishes', description: '', dueDate: '18 Jun 2022'}
 ]
// },{
//  project: 'Web development',
//  tasks: [
//   {title: 'Learn react', description: ''},
//   {title: 'Learn npm and yarn', description: ''},
//   {title: 'Learn MongoDB', description: ''}
//  ]
// }, {
//  project: 'University',
//  tasks: [
//   {title: 'Study for biology midterm exam', description: ''},
//   {title: 'Prepare the chemistry presentation', description: ''}
//  ]
}]

class Todo {
 constructor(title, description, dueDate, priority){
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
 }
}

function setIndex() {
 let projCount = 0
 for (let i of projectList){
  i.index = projCount
  projCount++
  let taskCount = 0
  for (let j of i.tasks){
   j.index = taskCount
   taskCount++
  }
 }
}

function save() {
 localStorage.setItem("Todo", JSON.stringify(projectList))
}

function retrieve() {
 let data = localStorage.getItem('Todo')
 console.log(data)
 projectList = JSON.parse(data)
 if (projectList == null){
  projectList = [{
  project: 'Default project',
  tasks: [
   {title: 'Water the plants', description: '', dueDate: '18 Jun 2022'},
   {title: 'Feed the dog', description: 'Chicken breast and bone', dueDate: '18 Jun 2022'},
   {title: 'Do the dishes', description: '', dueDate: '18 Jun 2022'}
  ]
 // },{
 //  project: 'Web development',
 //  tasks: [
 //   {title: 'Learn react', description: ''},
 //   {title: 'Learn npm and yarn', description: ''},
 //   {title: 'Learn MongoDB', description: ''}
 //  ]
 // }, {
 //  project: 'University',
 //  tasks: [
 //   {title: 'Study for biology midterm exam', description: ''},
 //   {title: 'Prepare the chemistry presentation', description: ''}
 //  ]
 }]
  console.log('Fail')
  display()
 } else {
  console.log('Success')
  display()
 }
}

export { projectList, Todo, setIndex, save, retrieve }