class Shoot {
    constructor(posX, posY, speed = 20) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
    }
    move() {
        this.posX = this.posX + this.speed;
    }
    goAttack(){
        const id = setInterval(() => {      
            if (this.posX <= 0) {   
                this.posX = 610;
                clearInterval(id)
            }
            this.move();   
        }, 500);  
    }
    // didShootCollide(enemy) {
    //     //Seleccionamos los 4 laterales del disparo
    //     const shootLeft = this.posX;
    //     const shootRight = this.posX + 5;
    //     const shootTop = this.posY;
    //     const shootBottom = this.posY + 5;
    
    //     //Seleccionamos los 4 laterales del enemigo
    //     const enemyLeft1 = enemy.posX;
    //     const enemyRight1 = enemy.posX + 25;
    //     const enemyTop1 = enemy.posY;
    //     const enemyBottom1 = enemy.posY + 25;
    
    //     //Comprobamos si el enemigo ha entrado dentro del disparo por cualquiera de los 4 costados
    //     const crossLeft1 = enemyLeft1 <= shootRight && enemyLeft1 >= shootLeft;
    //     const crossRight1 = enemyRight1 >= shootLeft && enemyRight1 <= shootRight;
    //     const crossBottom1 = enemyBottom1 >= shootTop && enemyBottom1 <= shootBottom;
    //     const crossTop1 = enemyTop1 <= shootBottom && enemyTop1 >= shootTop;
    
    //     //Solo cuando 1 condición de verticalidad y 1 de horizontalidad se cumplen, podemos considerar que nnuestros cuadrados han  colisionado
    //     if ((crossLeft1 || crossRight1) && (crossTop1 || crossBottom1)) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
}