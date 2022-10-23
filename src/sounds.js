class Sounds {
    //Hacer que funcione
    constructor() {
        this.cut = new Audio("./audio/Nemesis.mp3");
        this.soundGame = new Audio("./audio/Nemesis.mp3");
    }
    playCut() {
        this.cut.currentTime = 0;
        this.cut.play();
    }
    playSoundGame() {
        this.soundGame.currentTime = 0;
        this.soundGame.play();
    }
}