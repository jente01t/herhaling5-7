import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getallen = [];

for (let i = 0; i < 5; i++) {
    let getal = parseFloat(await userInput.question('Geef een getal: '));
    getallen.push(getal);
}

function gemiddeldeArray (getallen) {
    let gemiddelde = 0;
    for (let i = 0; i < getallen.length; i++) {
        gemiddelde += getallen[i];
    }
    gemiddelde = gemiddelde / getallen.length;
    return gemiddelde;
}

console.log('Het gemiddelde van de getallen is ' + gemiddeldeArray(getallen));

process.exit();