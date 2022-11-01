// first I want to create a new array of objects: 

const newArray = [
  {name: 'steve', age: 16},
  {name: 'alan', age: 27},
  {name: 'benito', age: 45},
  {name: 'mackers', age: 45}
]

//filter: new array based on age from the orginal - it is nondestructive, dont want to mutate orginal

/*first see if I can log each object to the console: 
const ages = newArray.filter((callwhatever) => {
console.log(callwhatever);
}) */
// if item returns true it is filtered into new array!


//cool but how might I get this by age for example

const ages = newArray.filter((callwhatever) => {
return callwhatever.age === 45;

})

console.log(ages)

/* filter returned benito and mackers who are both 45, this is because
the return statement in ages was true, I say do you follow.....*/

// and if I log the original array it should remain unchanged right?

console.log(newArray)

//Bingo!


//okay now what about the Map method?
