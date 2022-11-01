// from lesson on destructuring; 

const person = {
  firstName: "BigDave",
  age: 30,
  favColor: "green",
}
const names = person.firstName;

// how do you get the first name from the object and store?

console.log(names)

// now do the same for favoorite color, and log both. 

const colors = person.favColor;

console.log(names, colors);



// okay now create an array and restructure some stuff from that like:) then i'll log to the console


const newArray = [55, 65, 75, 85, 45];

// i'll try to log the first 4 numbers: 

const [a, b, c, d] = newArray

console.log(a, b, c, d)

//cool
