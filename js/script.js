{
const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

    const displayResult = function(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == argPlayerMove) {
            printMessage('Jest remis!');
        } else {
            printMessage('Przegrałeś!');
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);

    console.log('Gracz wpisał:' + playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
    
}

const playRock = document.getElementById('play-rock');
const playPaper = document.getElementById('play-paper');
const playScissors = document.getElementById('play-scissors');

playRock.addEventListener('click', function(){
    playGame(1);
});
playPaper.addEventListener('click', function(){
    playGame(2);
});
playScissors.addEventListener('click', function(){
    playGame(3);
});

}