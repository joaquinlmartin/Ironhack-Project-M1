const shipSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 201, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 201, // Le digo cuántos píxeles tiene que coger de height
    posX: 0, // En qué x del archivo tiene que empezar a coger personaje
    posY: 0 // En qué y del archivo tiene que empezar a coger personaje
  };
  shipSprite.sprite.src = "./images/Ship Player.png";

  const enemySprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 444, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 444, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  enemySprite.sprite.src = "./images/Ship Enemy.png";  

  const stonesSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 456, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 456, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  stonesSprite.sprite.src = "./images/Stones White.png";

  const powerupSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 456, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 456, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  powerupSprite.sprite.src = "./images/Box.png";

  const shootSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 121, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 121, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  shootSprite.sprite.src = "./images/Shoot Player.png";

  const shootEnemySprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 121, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 121, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  shootEnemySprite.sprite.src = "./images/Shoot Enemy.png";

  const boostSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 80, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 122, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  boostSprite.sprite.src = "./images/Boost Light.png";

  const canvasSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 1280, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 720, // Le digo cuántos píxeles tiene que coger de height
    posX: 130, // En qué x del archivo tiene que empezar a coger personaje
    posY: 130 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  canvasSprite.sprite.src = "./images/Space Game.jpg";