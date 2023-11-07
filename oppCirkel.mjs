import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question('Wil je de oppervlakte of de omtrek van de cikrel berekenen? ');

async function oppCikrle () {
    let straal = parseFloat(await userInput.question('Geef de straal van de cirkel: '));
    let opp = straal * straal * Math.PI;
    return opp;
}

async function omtrekCikrel () {
    let straal = parseFloat(await userInput.question('Geef de straal van de cirkel: '));
    let omtrek = straal * Math.PI;
    return omtrek;
}

if (keuze == 'oppervlakte') {
    console.log('De oppervlakte van de cikel is ' + await oppCikrle());
} else if (keuze = 'omtrek') {
    console.log('De oppervlakte van de cikel is ' + await omtrekCikrel());
}

process.exit();