class Sounds {
    constructor() {
        this.cut = new Audio("")
    }
    playCut() {
        this.cut.currentTime = 0;
        // this.cut.muted = true;
        // this.cut.autoplay = false;
        this.cut.play()
    }
}