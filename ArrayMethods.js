// first I want to create a new array of objects: 

const newArray = [
  {name: 'steve', age: 16},
  {name: 'alan', age: 27},
  {name: 'benito', age: 45},
  {name: 'mackers', age: 45}
]

//filter: new array based on age from the orginal - it is nondestructive, dont want to mutate orginal

//first see if I can log each object to the console: 
const ages = newArray.filter((callwhatever) => {
console.log(callwhatever);
})

//cool but how might I get this by age for example
