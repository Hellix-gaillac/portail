document.addEventListener("DOMContentLoaded", function(event) { //chargement du script aprés chargement de la page
  //let appels des id html
  let buttonGo = document.querySelector('#go');
  let buttonStop = document.querySelector('#stop');
  let idCarreSelector = document.querySelector('#carre ');
  let idConteneurSelector = document.querySelector('#conteneur');
  let idX = document.querySelector('#x');
  let idY = document.querySelector('#y');

  //let
  let carrePositionX = 0; //variable point par defaut du carré
  let carrePositionY = 0; //variable point par defaut du carré

  let positionX = 50; //variable parametre changeX()
  let positionY = 250; //variable parametre changeY()

  let directionX = 1; //paramètre qui varie entre -1et-2 ou entre 1 et 2
  let directionY = 1; //paramètre qui varie entre -1et-2 ou entre 1 et 2
  let coefDirection = 1;
  let stopTimeout = false;


  //const
  const MIN = 0;
  const WIDTH_CONTENEUR = window.getComputedStyle(idConteneurSelector, null).getPropertyValue("width");
  const MAX = Number(WIDTH_CONTENEUR.replace("px", ""));
  console.log(`taille du conteneur : ` + WIDTH_CONTENEUR);

  const CYCLE = 1;
  const TAILLE_CARRE_PX = window.getComputedStyle(idCarreSelector, null).getPropertyValue("width");
  const TAILLE_CARRE = Number(TAILLE_CARRE_PX.replace("px", ""));
  console.log(`taille du carré : ` + TAILLE_CARRE_PX);
  // const BORDER_RADIUS_CONTENEUR = TAILLE_CARRE / 2;
  // BORDER_RADIUS_CONTENEUR TODO a renvoyer dans html

  const LIMITE_CONTENEUR = MAX - TAILLE_CARRE;
  console.log(`taille du LIMITE_CONTENEUR : ` + LIMITE_CONTENEUR);

  //traitement des input HTML
  // positionX = idX.value;
  // positionY = idY.value;
  // console.log(`X : ${positionX} ; Y : ${positionY}`);
  //fonction bouton Go
  buttonGo.addEventListener('click', function() {
      stopTimeout = false; //fonction au clic sur boutton go
      run(); // fonction run avec Timeout inclus


      // //fonction run avec setInterval
      // let interval = setInterval(run(), CYCLE);//run sans Timeout
      //
      // let changeXEtY = window.setInterval(run, CYCLE); // changement des valeurs x et y
      //
      // buttonStop.addEventListener('click', function() {
      //   clearInterval(changeXEtY);
      // });
      // //FIN fonction run avec setInterval

    }
    // , {
    //   once: true
    // }
  );
  //FIN fonction button go

  //fonction bouton stopTimeout true
  buttonStop.addEventListener('click', function() {
    stopTimeout = true;
  });
  //FIN fonction bouton stop true

  // fonction run
  let run = () => {

    if (checkValue(positionX) == true && checkPosition(positionX) == true) { //verifie si x est à l'interieur du conteneur
      positionX = positionX + directionX; //incrémentation de x
      changeX(positionX); // envoie la nouvelle valeur de x


    } else { //si carré en dehors des limite de direction;
      randomCoef();
      changeDirectionX();
      positionX = positionX + directionX; //incrementtation
      changeX(positionX); // envoie la nouvelle valeur de x
    }

    if (checkValue(positionY) == true & checkPosition(positionY) == true) { //verifie si y est à l'interieur du conteneur
      positionY = positionY + directionY; //incrémentation de y
      changeY(positionY); // envoie la nouvelle valeur de y


    } else { //si carré en dehors des limite changement de direction ;
      randomCoef();
      changeDirectionY();
      positionY = positionY + directionY; //incrementtation
      changeY(positionY); // envoie la nouvelle valeur de x
    }

    if (stopTimeout == false) {
      timeout();
    }

  }
  // FIN fonction run

  // fonction parametre entre max and min
  let checkValue = (Value = 0) => {
    if (Value >= MIN && Value <= MAX) {
      return true;
    } else {
      return false;
    }
  }
  //FIN checkValue

  //fonction change position x
  let changeX = (positionX = 0) => {
    document.querySelector('#carre ').style.bottom = positionX + 'px';
  }
  //FIN fonction change position x

  //fonction change position y
  let changeY = (positionY = 0) => {
    document.querySelector('#carre ').style.left = positionY + 'px';
  }
  //FIN fonction change position

  // fonction limite de la surface de deplacement du carré
  let checkPosition = (Position = 0) => {
    if (Position < LIMITE_CONTENEUR) {
      return true;
    } else {
      return false;
    }
  }
  //FIN fonction limite de la surface de deplacement du carré

  //fonction direction //avec coeffDirection
  let changeDirectionX = () => {
    if (directionX >= 0) {
      directionX = -coefDirection;
    } else {
      directionX = coefDirection;
    }
  }

  let changeDirectionY = () => {
    if (directionY >= 0) {
      directionY = -coefDirection;
    } else {
      directionY = coefDirection;
    }
  }
  //FIN fonction direction //avec coeffDirection

  //fonction randomCoef de direction
  let randomCoef = () => {
    coefDirection = Math.random() + 1.08;
  }
  //FIN fonction randomCoef de direction
  // fonction timeout
  let timeout = () => {
    setTimeout(function() {
      run();
    }, CYCLE);
  }
  // FIN fonction timeout



});