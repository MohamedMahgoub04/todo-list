// function Todo(title, description, dueDate, priority){

//  this.title = title
//  this.description = description
//  this.dueDate = dueDate
//  this.priority = priority

// }

let projectList = [{
 index: 0,
 project: 'Default project',
 tasks: [
  {title: 'Water the plants', description: ''},
  {title: 'Feed the dog', description: ''},
  {title: 'Do the dishes', description: ''}
 ]
},{
 index: 1,
 project: 'Web development',
 tasks: [
  {title: 'Learn react', description: ''},
  {title: 'Learn npm and yarn', description: ''},
  {title: 'Learn MongoDB', description: ''}
 ]
}, {
 index: 2,
 project: 'University',
 tasks: [
  {title: 'Study for biology midterm exam', description: ''},
  {title: 'Prepare the chemistry presentation', description: ''}
 ]
}]

class Todo {
 constructor(title, description){
  // , dueDate, priority
  this.title = title
  this.description = description
  // this.dueDate = dueDate
  // this.priority = priority
 }
 

}

export { projectList, Todo }