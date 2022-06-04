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
  // , dueDate, priority
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
 }
}

function setIndex() {
 let count = 0
 for (let i of projectList){
  i.index = count
  count++
 }
}

export { projectList, Todo, setIndex }