let practiceArray = ["red", "orange", "yellow", "green"]
let practiceObject = {Dad: "Tony", Mimi: "Aline", Daughter: "Zaza", daughter: "Freya"};


console.log("For In loops through the properties, not the values.")
console.log("For In through an array:")
for (let thingy in practiceArray) {
	console.log(thingy);
  } 

console.log("For In through an object:")
for (let thingy in practiceObject) {
	console.log(thingy);
  } 