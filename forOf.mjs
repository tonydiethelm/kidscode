let practiceArray = ["red", "orange", "yellow", "green"]
let practiceObject = {Dad: "Tony", Mimi: "Aline", Daughter: "Zaza", daughter: "Freya"};


console.log("For Of loops through the values, not the properties.")
console.log("For Of through an array:")
for (let thingy of practiceArray) {
	console.log(thingy);
  } 

console.log("For Of through an object doesn't work:")
for (let thingy of practiceObject) {
	console.log(thingy);
  } 