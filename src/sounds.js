class Sounds {
    constructor() {
        this.ctx = options.ctx;
        this.soundGame = new Audio("./audio/Nemesis.mp3");
        this.soundStoneExplosion = new Audio("./audio/Rock break.mp3");
    }
    playStones() {
        this.soundStoneExplosion.currentTime = 0;
        this.soundStoneExplosion.play();
    }
    playSoundGame() {
        this.soundGame.currentTime = 0;
        this.soundGame.play();
    }
}