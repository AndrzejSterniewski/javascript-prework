function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
    if(argPlayerMove == 'nieznany ruch'){
        printMessage('nieznany ruch, spróbuj ponownie');
    } else {
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    
    if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrałem!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrałem!');
    } else if (argComputerMove == 'kamień' && argPlayerMovee == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    
    if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Jest remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Jest remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Jest remis!');
    }
    }
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

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