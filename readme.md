# Project's name

*Ironhack-Project-M1*

## Description:
It is a game designed with JS, Html and Css, working with Canvas. You drive a spaceship through the universe and you must survive as long as possible. You go through obstacles and you have to dodge or destroy them. When an enemy appears you must destroy everything you can to survive. Advance, dodge everything, using boost and fight with enemies are your tools to survive as long as possible and cross the universe to survie to this journey.

## MVP:

Class Game
Class Ship
Class Enemy
Class Stones
Class Shoot
Class Shootenemy
Class Sounds
Class Score
Class Powerups
Class Boost
Main
Assets

## Class Game

```
    this.ctx = options.ctx;
    this.ship = options.ship;
    this.enemy = [];
    this.stones = [];
    this.shoots = [];
    this.shootsEnemy = [];
    this.posX = options.posX;
    this.posY = options.posY;
    this.speed = speed; 
  ```

## States transitions:

- SplashScreen - Presentation, instructions and start button
- GameScreen - Game (One level) 
- GameoverScreen - If you colision you die (start again)
- Victory Screen - You have reached the target points to win the game!

## Backlog:

- Animations (Included)
- Advanced Styles (Included)
- Scores (Included) 
- More Levels
- Movement Screen effect
- Enemy and Stones ship explode animations 

## Errors:

- Scores in Game Over Screen, Scores in Victory Screen
- Retry button in Victory Screen
- Stones rotation 
- class Scores
- drawScore
- Lives refresh counter
- class Sounds
- shoot Colisions
- lives to 0

## Links:

Github: https://github.com/joaquinlmartin/Ironhack-Project-M1
