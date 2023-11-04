import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]
let zoeknaam = await userInput.question('Geef de naam die je zoekt: ');

function naamZoeken (namen) {
    let nummer = 0;
    for (let i = 0; i < namen.length; i++) {
        if (zoeknaam == namen[i]) {
            nummer = i + 1;
        } else {
            nummer = -1;
        }
    }
    return nummer;
}

console.log('De naam ' + zoeknaam + ' staat op plaats nummer ' + naamZoeken(namen));

process.exit();