let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

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
        printGameOver
      );
 
      nemesisGame.start();

    });
  }
  // Game Over Screen
  function printGameOver() {
    let gameOver = document.getElementById('gameover');
    let canvas = document.querySelector('#nemesis');
    canvas.style = 'display: none';
    gameOver.style = 'display: block';
  }

  createSplashScreen();
});

