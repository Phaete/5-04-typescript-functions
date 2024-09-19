/*
function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(5, 20))

// one-line function
const add = (a: number, b: number):number => a + b
// Only works though, if the function returns a one-line value
// else, use {} after the =>
const add2 = (a: number, b: number):number => {
    console.log("Adding...")
    return a+b
}

console.log(add(2,3))
console.log(add2(2,3))

// functions that use the "function" term will be hoisted, others not
// function add(a:number, b:number):number will be hoisted,
// const add = (a:number, b:number):number = a+b will NOT be hoisted
// Hoisted means that the function is available before it is declared
// declared in e.g. line 20, it is available from line 1

const numbersArray:number[] = [1,2,3,4,5]
const doubleNumbers:number[] = numbersArray.map(num => num*2)

console.log(numbersArray)
console.log(doubleNumbers)

const evenNumbers:number[] = numbersArray.filter(num =>num%2 === 0)
console.log(evenNumbers)

numbersArray.sort()

*/
// Challenges

const numbers:number[] = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.map(num => num*2))

const strings:string[] = ["one", "two", "three", "four", "twentytwo"]
console.log(strings.filter(str => str.length > 5))
console.log(numbers.reduce((accumulator, current) => accumulator + current, 0))
console.log(numbers.some(num => num > 10))

// bonus
const list:number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sortedList:number[] = list.sort((a, b) => a-b) // a-b is asc, b-a is desc
console.log(sortedList)
const squaredList:number[] = sortedList.map(num => num*num)
console.log(squaredList)
const slicedList:number[] = squaredList.slice(2, 9)
console.log(slicedList)
const filteredList:number[] = slicedList.filter(num => num%4 !== 0)
console.log(filteredList)
const sumOfRest:number = filteredList.reduce((accumulator, current) => accumulator + current, 0)
console.log(sumOfRest)