import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand: ');
let jaar = parseFloat(await userInput.question('Geef een jaartal: '));

function dagenInDeMaand (maand, jaar) {
    switch (maand) {
        case 'januari':
        case 'maart':
        case 'mei':
        case 'juli':
        case 'augustus':
        case 'oktober':
        case 'december':
            console.log(maand + ' heeft 31 dagen.');
        break;
        case 'april':
        case 'juni':
        case 'september':
        case 'december':
            console.log(maand + ' heeft 30 dagen.');
        break;
        case 'februari':
            if (jaar % 4 == 0 || jaar % 400 == 0 && jaar != 100) {
                console.log('Februari heeft 29 dagen.');
            } else {
                console.log('Februari heeft 28 dagen.');
            }
        break;
        default:
            console.log('Deze maand ken ik niet.')
    }
}

dagenInDeMaand(maand, jaar);

process.exit();