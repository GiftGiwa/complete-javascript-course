//9
/*let js = 'amazing'
if (js === 'amazing') alert('JavaScript is FUN!')
40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10)

//Fundamentals pt1

//values and variables
let country = 'USA'
let continent = 'North America'
let population = 329500000
console.log(country)
console.log(continent)
console.log(population)

//data types 
let isIsland = false
let language
console.log(isIsland)
console.log(language)

let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof 56)

//CODING CHALLENGE 1
// BMI = mass / height ** 2 = mass / (height * height)

const markM = 78
const johnM = 92
const markH = 1.69
const johnH = 1.95

const markBMI = markM / (markH ** 2)
const johnBMI = johnM / (johnH ** 2)
const markHigherBMI = markBMI > johnBMI

console.log(markBMI, johnBMI, markHigherBMI)

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's")
}

// w/ template literal
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

// it's considered a safe practice to solely rely on == instead of ===

//CODING CHALLENGE 3
let dolphins1 = 96, dolphins2 = 108, dolphins3 = 89
let koalas1 = 88, koalas2 = 91, koalas3 = 110
let dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalasAvg = (koalas1 + koalas2 + koalas3) / 3;
console.log(dolphinsAvg, koalasAvg);

/*if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins win!")
} else if (dolphinsAvg === koalasAvg) {
    console.log("Draw")
} else {
    console.log("Koalas win!")
}

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) { //bonus 1
    console.log('Dolphins win!')
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log('Koalas win!')
} else {
    console.log('Draw')
}

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) { //bonus 1
    console.log('Dolphins win!')
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log('Koalas win!')
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
    console.log('Draw')
} else {
    console.log('No trophy')
}

//CODING CHALLENGE 4
let bill = 430;
let tip = ((bill >= 50 && bill <= 300) ? 0.15 : 0.20) * bill

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/