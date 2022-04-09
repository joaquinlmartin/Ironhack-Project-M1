const shipSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 201, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 201, // Le digo cuántos píxeles tiene que coger de height
    posX: 0, // En qué x del archivo tiene que empezar a coger personaje
    posY: 0 // En qué y del archivo tiene que empezar a coger personaje
  };
  shipSprite.sprite.src = "./images/nave.png";

  const enemySprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 444, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 444, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  enemySprite.sprite.src = "./images/5be1e7c76242d-a0fc2dc026d37b4a29dabc9fe8611521.png";  

  const stonesSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 456, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 456, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  stonesSprite.sprite.src = "./images/tl4o9us75i1ekd3ulcuhof0035.png";

  const shootSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 121, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 121, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  shootSprite.sprite.src = "./images/02.png";

  const shootEnemySprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 121, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 121, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  shootEnemySprite.sprite.src = "./images/01.png";

  const boostSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    w: 121, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 121, // Le digo cuántos píxeles tiene que coger de height
    posX: 1, // En qué x del archivo tiene que empezar a coger personaje
    posY: 1 // En qué y del archivo tiene que empezar a coger personaje
  };
  // let randomStones = Math.floor(Math.random() * this.shootSprites.length);
  boostSprite.sprite.src = "./images/22.png";