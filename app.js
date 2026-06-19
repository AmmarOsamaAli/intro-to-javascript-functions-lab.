//Excersise 1: maxOfTwoNumbers -> using decleration fucntion

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2)
        return num1
    else if (num2 > num1)
        return num2
    else {
        return console.log("Number 1 is Equal to Number2")
    }
}

console.log(`Excersise 1 Result: ${maxOfTwoNumbers(5, 9)}`)
console.log(`===============================================`)



//Excersise 2: isAdult() -> using expression function

const isAdult = function (age) {
    if (age >= 18)
        return "Adult"
    else if (age < 18 && age > 0)
        return "Minor"
    else {
        return "ERROR: please enter a postive number for the age"
    }
}

console.log(`Excersise 2 Result: ${isAdult(16)}`)
console.log(`===============================================`)



//Excersise 3: isCharAVowel() -> using arrow function
const isCharAVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        return "True"
    else {
        return "False"
    }
}

console.log('Exercise 3 Result:', isCharAVowel("e"));
console.log(`===============================================`)



//Excersise 4: generateEmail() -> using decleration fucntion
function generateEmail(name, domain) {
    return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("ammarali", "javascript.com"));
console.log(`===============================================`)



//Excersise 5: greetUser() -> expression function
const greetUser = function (name, time) {
    return `Good ${time}, ${name}!`
}

console.log("Excersise 5 Result:", greetUser("Yousif", "Night"))
console.log(`===============================================`)



//Excersise 6: maxOfThree() -> using arrow function
const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3)
        return num1
    else if (num2 >= num1 && num2 >= num3)
        return num2
    else if (num3 >= num1 && num3 >= num2)
        return num3
}

console.log('Exercise 6 Result:', maxOfThree(10, 6, 8));
console.log(`===============================================`)



//Excersise 7: calculateTip() -> using decleration fucntion
function calculateTip(bill, tipPercentage) {
    if (bill < 0 || tipPercentage < 0)
        return "Please provide a postive value"
    let tip = bill / 100 * tipPercentage
    return tip
}

console.log('Exercise 7 Result:', calculateTip(100, 50));
console.log(`===============================================`)



//Excersise 8: convertTemperature() -> expression function
const convertTemperature = function (temprature, degree) {
    if (degree === "C" || degree === "c")
        return temprature = (temprature * 9 / 5) + 32
    else if (degree === "F" || degree === "f")
        return temprature = (temprature - 32) * 5 / 9
    else {
        return "Please enter F or C"
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "F"));
console.log(`===============================================`)



//Excersise 9: basicCalculator() -> using arrow function
const basicCalculator = (num1, num2, operation) => {
    if (operation === "add")
        return num1 + num2
    else if (operation === "subtract")
        return num1 - num2
    else if (operation === "multiply")
        return num1 * num2
    else if (operation === "divide")
        return num1 / num2
    else {
        return "Please provide one of the following operations. add, subtract, multiply, or divide"
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));
console.log(`===============================================`)


//Level Up

//Excersise 10: calculateGrade() -> using decleration function
function calculateGrade(score) {
    if (score >= 90)
        return "A"
    else if (score < 90 && score >= 80)
        return "B"
    else if (score < 80 && score >= 70)
        return "C"
    else if (score < 70 && score >= 60)
        return "D"
    else if (score < 60 && score >= 0)
        return "F"
    else
        return "Please enter a Positive Number"
}

console.log('Exercise 10 Result:', calculateGrade(89));
console.log(`===============================================`)



//Excersise 11: createUsername() -> using expression function
const createUsername = function (firstName, lastName) {
    let sliceFirstName = firstName.slice(0, 3)
    let sliceLastName = lastName.slice(0, 3)
    let charCount = firstName.length + lastName.length
    return `${sliceFirstName}, ${sliceLastName}, ${charCount}`
}

console.log('Exercise 11 Result:', createUsername("Ammar", "Ali"));
console.log(`===============================================`)



//Excersise 12: numArgs() -> using arrow function
const numArgs = (...args) => {
    let count = 0
    for (let i = 0; i < args.length; i++) {
        count++
    }
    return count
}

console.log('Exercise 12 Result:', numArgs("hello", "hi", 5, "ammar"));
console.log(`===============================================`)

