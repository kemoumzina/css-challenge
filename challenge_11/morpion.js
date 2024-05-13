/* le principe du jeux et de verifier les paternes s ils concordent avec le symbole X et O des joueurs 1 et 2 */
const cells=document.querySelectorAll('[data-cell]');
const gameStatus=document.getElementById('gameStatus');
const endGameStatus=document.getElementById('endGameStatus');
const playerOne="X"; const playerTwo="O";
let playerTurn=playerOne;
const winningPatterns = [
   /* les paternes */
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

cells.forEach(cell=> {
    cell.addEventListener('click', playGame, {once:true});

});
function  playGame(e) {
    e.target.innerHTML = playerTurn;

        if (checkWin(playerTurn)) {
          updateGameStatus("wins" + playerTurn);
          return endGame();
             
        }else if (checkDraw()) {
            updateGameStatus("draw");
            return endGame();
        }

    updateGameStatus(playerTurn);
    playerTurn == playerOne ? playerTurn= playerTwo: playerTurn=playerOne;

}
function checkWin(playerTurn) {
    /*faire des tests sur chaque combinaison  et ensuite*/
    return winningPatterns.some(combination=> {
        return combination.every(index =>{
            /*verifier les index*/
            return cells[index].innerHTML == playerTurn;
        });
    });
}
function checkDraw() {
    return [...cells].every(cell=>{
        /*verifier si au tour du joueur 1 ou au tour du joueur 2 */
        return cell.innerHTML==playerOne ||  cell.innerHTML==playerTwo ;
    });
}
function updateGameStatus(status) {
    let statusText ;
    switch (status) {
        case 'X':
            statusText = "Au tour du joueur 2 (O)";
           console.log(status);
            break ; 
        case 'O':
            statusText = "Au tour du joueur 1 (X)";
            break ; 
        case 'winsX':
            statusText = "le joueur 1 (X) a gagné";
            break ; 
        case 'winsO':
            statusText = "le joueur 2 (O) a gagné";
            break ; 
        case 'draw':
            statusText = "Egalite";
            break ; 

    } 
    console.log(statusText);
    gameStatus.innerHTML = statusText;
    endGameStatus.innerHTML = statusText;

}
function endGame() {document.getElementById('gameEnd').style.display = "block"};
function reloadGame() {windows.location.ReloadGame()};

