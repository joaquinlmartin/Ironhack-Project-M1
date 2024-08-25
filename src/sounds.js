class Sounds {
    constructor() {
        this.soundGame = new Audio("./audio/Nemesis.mp3");
        this.soundStoneExplosion = new Audio("./audio/Rock break.mp3");
        this.soundSplash = new Audio("./audio/Rocket.mp3");
    }
    soundSplash() {
        this.soundSplash.currentTime = 0;
        this.soundSplash.play();
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