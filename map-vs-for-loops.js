

// Map vs. For Loop Practice

// Below are exercises to get you seeing the differences between using a map and a for loop. Beneath each prompt write the code to fulfill the exercise requirement.


// Exercise 1
// Consider this variable:
var nums = [1, 2, 3, 4, 5]
// Write a for loop that saves the result of each number multiplied by 5 to another array.

var numsByfive = []
for(var index=0; index<nums.length; index++) {
	numsByfive.push(nums[index]*5)
	}
	console.log(numsByfive)

// Exercise 2
// Use a map on the nums array that saves the result of each number multiplied by 5 to another array.

//variable = multByFive, array nums is "mapped", numbers in array is multipled by five. function x = integer times five
var multByFive = nums.map(x => x * 5)
console.log(multByFive)

// Exercise 3
// Consider this variable:
var numbers = [11, 22, 33, 44, 55, 66]
// Write a for loop that saves all numbers in the numbers array that are evenly divisible by 3 into another array.

//var = new array "numsDividethree"
var numsDividethree = []
//index=0 meaning starting from "0" position, index length is up to what array has
for(var index=0; index<numbers.length; index++) {
	//if items in array "numbers" have a remainder of zero when divided by three
	if (numbers[index] % 3 === 0) {
	//then push items in the array "numbers" to new array "numsDividethree"
	numsDividethree.push(numbers[index])
	}
}
console.log(numsDividethree)


// Exercise 4
// Use map on the numbers array to save any numbers from the array that are evenly divisible by 3 into another array.

// variable = divBythree, array "numbers" is filtered out for any numbers that has remainder equal to zero (divisible) by three
var divBythree = numbers.filter(x => x % 3 === 0);

console.log(divBythree);


// Exercise 5
// Consider this variable:
var toons = [{name: "Tom", animal: "cat"},
						{name: "Jerry", animal: "mouse"},
						{name: "Bugs", animal: "rabbit"},
						{name: "Daffy", animal: "duck"},
						{name: "Felix", animal: "cat"},
						{name: "Oswald", animal: "rabbit"}]
// Write a for loop that saves all cat characters to another array.

var newArray = []
for(var i=0; i < toons.length; i++){
  if(toons[i].animal === 'cat'){
    newArray.push(toons[i])
  }
}

console.log(newArray)

// Exercise 6
// Use map on the toons array to save all rabbit characters to another array.

var rabbits = toons.filter(x => x.animal == "rabbit")
console.log(rabbits)


var rabbits = toons.filter((x) => {
 return x.animal === "rabbit"
	}
)
console.log(rabbits)


// Exercise 7
// Write a for loop to save the names of each character to another array.

var newArray = []
for(i=0; i < toons.length; i++){
		//newArray is an array of strings, pushing the value of name attributes to the newArray
    newArray.push(toons[i].name)
  }


// Exercise 8
// Use map on the toons array to save a description of each character to another array.

var toons = [{name: "Tom", animal: "cat"},
						{name: "Jerry", animal: "mouse"},
						{name: "Bugs", animal: "rabbit"},
						{name: "Daffy", animal: "duck"},
						{name: "Felix", animal: "cat"},
						{name: "Oswald", animal: "rabbit"}]

var characters = toons.map((x) => {
	return x.animal
	}
)

var characters = toons.map(x => x.animal)
console.log(characters)


// Exercise 9
// Consider this variable:
var people = [{firstName: "Alan", lastName: "Grant"},
							{firstName: "Ellie", lastName: "Sattler"},
							{firstName: "Ian", lastName: "Malcolm"}]
// Write a for loop that creates a new object for every person that has a key value for firstName, lastName, and fullName and saves each new object into another array.
//object is a pair of attributes, in between {}, key value is assigned to attribute

//creating blank array
var newName = []
//for loop, creating an array combining objects by pulling them from variable "people"
for(var i=0; i < people.length; i++) {
		//new variable "person" storing new objects that features key values, saving it into the new array. created new object by combining two key values = fullName
		var person = {}
			person.firstName = people[i].firstName
			person.lastName = people[i].lastName
			person.fullName = people[i].firstName + " " + people[i].lastName
			newName.push(person)
  }


// Exercise 10
// Refactor the above code to use a map on the people array to achieve the same result.

var newName = people.map((x) => {
	return x.firstName
	return x.lastName
	return x.fullName
	}
)

var characters = toons.map(x => x.animal)
console.log(characters)


// Exercise 11
// Consider this function:
function addTitle(person){
  return "Dr. " + person.firstName + " " + person.lastName
}
// Write a for loop that iterates through each person in the people array and stores the result of addTitle on each element to another array.

// Exercise 12
// Use map on the run addTitle on each element in the people array and store the result of each call into another array.
