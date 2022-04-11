document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen & Game Screen
  function createSplashScreen() {
    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {
      menu.classList.add('hide');
      const game = document.getElementById('game');
      game.classList.remove('hide');
      game.classList.add('show');
      let canvas = game.querySelector('#nemesis');
      const ctx = canvas.getContext('2d');
      const nemesisGame = new Game(
        {
          ctx: ctx,
          ship: new Ship (10, 10, "N"),
        },
        gameOver, victory
      );
 
      nemesisGame.start();

    });
  }
  // Game Over Screen
  function gameOver() {
    // let gameOver = document.getElementById('#gameover');
    let gameover = document.querySelector('#gameover');
    let canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    gameover.classList.remove('hide');
    gameover.classList.add('show');
    tryAgain();
  }
  
  //Retry game
  function tryAgain() {
    const tryAgain = document.querySelector('#retry');
    tryAgain.addEventListener('click', function(){
        let gameOver = document.querySelector('#gameover');
        gameOver.classList.remove('show');
        gameOver.classList.add('hide');
        nemesisGame();
      })
}

  //Win the game
  function victory(){
    let win = document.querySelector('#win');
    let canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    win.classList.remove('hide');
}
  createSplashScreen();
});

