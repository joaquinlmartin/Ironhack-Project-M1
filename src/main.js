document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen & Game Screen
  function createSplashScreen() {
    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {
      splashcreen.classList.add('hide');
      let game = document.getElementById('game');
      game.classList.remove('hide');
      game.classList.add('show');
      let canvas = game.querySelector('#nemesis');
      const ctx = canvas.getContext('2d');
      const nemesisGame = new Game({ctx: ctx, ship: new Ship (10, 10, "N"),}, createGameover, createVictory);
      nemesisGame.start();
    });
  }
  // Game Over Screen
  function createGameover() {
    let gameover = document.querySelector('#gameover');
    const canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    gameover.classList.remove('hide');
    gameover.classList.add('show');
    tryAgain();
  }
  
  //Retry game
  function tryAgain() {
    const tryAgain = document.querySelector('#try-again');
    tryAgain.addEventListener('click', function(){
        console.log('me estan pinchando auch');
        let gameover = document.querySelector('#gameover');
        const canvas = document.querySelector('#nemesis');
        gameover.classList.remove('show');
        gameover.classList.add('hide');
        canvas.classList.remove('hide');
        canvas.classList.add('show');
        nemesisGame();
      })
}

  //Win the game
  function createVictory(){
    let win = document.querySelector('#win');
    let canvas = document.querySelector('#nemesis');
    canvas.classList.remove('show');
    canvas.classList.add('hide');
    win.classList.remove('hide');
    win.classList.add('show');
    createVictory();
}

  createSplashScreen();
  // this.soundSplash = new Audio("./audio/Rocket.mp3").play(); Funciona pero no lo dejo activo por cansino.
});