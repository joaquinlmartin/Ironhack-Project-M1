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
    w: 201, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    h: 201, // Le digo cuántos píxeles tiene que coger de height
    posX: 0, // En qué x del archivo tiene que empezar a coger personaje
    posY: 0 // En qué y del archivo tiene que empezar a coger personaje
  };
  shipSprite.sprite.src = "./images/ew-free-sprites-blue-spaceship-sprayt-kosmicheskiy-korabl-11563255232nrdoiuuizj.png";  