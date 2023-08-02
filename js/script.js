let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
    computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = 'nieznany ruch';

if(playerInput == '1') {
    playerMove = 'kamień';
} else if(playerInput == '2') {
    playerMove = 'papier';
} else if(playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

console.log('Gracz wpisał:' + playerInput);

printMessage('Twój ruch to: ' + playerMove);

if(playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch, spróbuj ponownie');
} else {
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}

if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrałem!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrałem!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}


if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Jest remis!');
} else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Jest remis!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Jest remis!');
}

}