# Project's name

*Ironhack-Project-M1*

## Description:
It is a game designed with JS, Html, Css and Canvas. You drive a spaceship through the universe and you must survive as long as possible. You go through obstacles and you have to dodge or destroy them. When an enemy appears you must destroy everything you can to survive. Advance, dodge everything and fight with enemies are your tools to survive as long as possible and cross the universe to survie to this journey.

## MVP:

Class Game
Class Ship 
Class Enemy
Class Stones
Class Shoot
Class Sounds

## Backlog:

- Animations
- Styles
- Scores

## Data structure

- None
#### class Game

```
    this.ctx = options.ctx;
    this.Boss = [];
    this.ship = options.ship;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.posX = options.posX;
    this.posY = options.posY;
    this.stones = undefined; 
    this.speed = speed; 
  ```

## States & States Transitions

-None
### Definition of the different states and their transition (transition functions):

- SplashScreen - Presentation, instructions and start button
- GameScreen - Game itself
- GameoverScreen - If you colision you die (start again)

## Links:

Github: https://github.com/joaquinlmartin/Ironhack-Project-M1
