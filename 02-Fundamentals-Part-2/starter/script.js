'strict mode';
/*
// CODING CHALLENGE 1
let dolphins1 = 44, dolphins2 = 23, dolphins3 = 71
let koalas1 = 65, koalas2 = 54, koalas3 = 49

//syntax for an anonymous arrow function
let calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

const dolphinsAvg = calcAverage(dolphins1, dolphins2, dolphins3)
const koalasAvg = calcAverage(koalas1, koalas2, koalas3)
// console.log(dolphinsAvg, koalasAvg)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    else if (avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    else {
        console.log(`No winners`)
    }
}
checkWinner(dolphinsAvg, koalasAvg)


function calcTip(bill) { //main method of declaratiion
    if (bill >= 50 && bill <= 300) {
        return 0.15 * bill
    }
    else {
        return 0.20 * bill
    }
}

const calcTip = bill => { //arrow
    if (bill >= 50 && bill <= 300) {
        return 0.15 * bill
    }
    else {
        return 0.20 * bill
    }
}


//CODING CHALLENGE 2
const calcTip = bill => //arrow, with ternary operator
(bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill

const total = bill => {
    return bill + calcTip(bill)
}

let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let totals = [total(bills[0]), total(bills[1]), total(bills[2])]

console.log(JSON.stringify(bills))
console.log(JSON.stringify(tips))
console.log(JSON.stringify(totals))
*/

