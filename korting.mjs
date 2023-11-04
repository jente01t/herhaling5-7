import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijzen = [1, 10 , 20 , 30];

function geefKorting (prijzen) {
    for (let i = 0; i < prijzen.length; i++) {
        prijzen[i] = prijzen[i] - (prijzen[i] / 100) * 15;
    }
    return prijzen
}

console.log('De nieuwe prijzen zijn: ' + geefKorting(prijzen));

process.exit();