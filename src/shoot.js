class Shoot {
    constructor(posX = 0, posY = 0, speed = 100) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.startMove();   
    }
    move() {
        this.posX = this.posX + this.speed;
    }
    startMove() {
        setInterval(() => {
            this.move();
        }, 1000);
    }
    //   _Shot( x, y, array, img) {
//     this.posX = x;
//     this.posY = y;
//     this.image = img;
//     this.speed = shotSpeed;
//     this.identifier = 0;
//     this.add = function () {
//         array.push(this);
//     };
//     this.deleteShot = function (idendificador) {
//         arrayRemove(array, idendificador);
//     };
// }
}