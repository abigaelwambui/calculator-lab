//Create an array that stores the calculation history
const calculationHistory = []

//Function to add numbers
function addNumbers (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input!"
    } else {
        return a + b
    }
}

const x = addNumbers(10, 15)

//Function to subtract numbers
function subtractNumbers (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input!"
    } else {
        return a - b
    }
}

const y = subtractNumbers(30, 10)

//Function to multiply numbers
function multiplyNumbers (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input!"
    } else {
        return a * b
    }
}

const z = multiplyNumbers(4, 6)

//Function to divide numbers
function divideNumbers (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid input!"
    } else if (b === 0) {
        return "Cannot divide by zero!"
    } else {
        return a / b
    }
}    

const r = divideNumbers(26, 13)

//Create objects to store calculations
const addition = {
    operation: "addNumbers",
    operands: [10, 5],
    result: x
}

const subtraction = {
    opperation: "subtractNumbers",
    operands: [30, 10],
    result: y
}

const multipilcation = {
    operation: "multiplyNumbers",
    operands: [4, 6],
    result: z
}

const division = {
    operation: "divideNumbers",
    operands: [26, 13],
    results: r
}

//Add objects to calculation history array
calculationHistory.push(addition, subtraction, multipilcation, division)

console.log(calculationHistory)

