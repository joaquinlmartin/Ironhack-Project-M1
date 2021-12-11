# Project's name

*Ironhack-Project-M1*

## Description:
It is a video game designed with JS, Html, Css and Canvas. You drive a spaceship through the universe and you must survive as long as possible. You go through obstacles and you have to dodge them. When an enemy appears you must destroy everything you can to survive. Advance, dodge everything and fight with enemies are your tools to survive as long as possible and cross the universe.

## MVP:

Class Game
Class Player
Class Enemy

## Backlog:

Files transitions. Classes and methods definition.

## Data structure
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
### Definition of the different states and their transition (transition functions):

- splashScreen - Presentation, instructions and start button
- gameScreen - Game itself 
- gameoverScreen - If you colision you die (start again)

## Links:

https://github.com/joaquinlmartin/Ironhack-Project-M1 

### Trello 

### Git

### Slides 
