// Fonction somme------------------------------------------------------------------------------------------
// Créez une fonction qui affiche la somme de deux nombres saisis par l'utilisateur. Commencez par appelez la fonction, et mettez un simple console.log a l'intérieur pour vérifier qu'elle marche bien.
//
// Elle devra :
//
// demander des valeurs à l'utilisateur
// vérifier que ce soit bien des nombres, et dire quelle valeur n'est pas un nombre si il y a un problème
// les transformer en entier
// afficher leur somme dans la console
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.
//


let laSomme = (a = 0, b = 0) => {
  let chiffreSomme1 = 0;
  let chiffreSomme2 = 0;
  let somme = 0;
  let sommeInSpan = document.getElementById('div_somme'); // Afficher des variables dans le DOM

  if (a == 0 && b == 0) {
    chiffreSomme1 = prompt(`Veuillez saisir un premier chiffre : `);
    chiffreSomme2 = prompt(`Veuillez saisir un second chiffre : `);

    while (isNaN(chiffreSomme1) == true || isNaN(chiffreSomme2) == true) { // dans la boucle tant que les valeur entrée ne sont pas de type nombre (tant que isNaN est à true sur l'une des 2 valeurs)

      if (isNaN(chiffreSomme1)) { //si 1er chiffre n'est pas un nombre de type string
        chiffreSomme1 = prompt(`ERREUR, ${chiffreSomme1} n'est pas reconnu. \nVeuillez saisir le 1er nombre en chiffre avec un '.' au lieu de ',': `); //ressaisir valeur 1
      }
      if (isNaN(chiffreSomme2)) { //si 2nd chiffre n'est pas un nombre de type string
        chiffreSomme2 = prompt(`ERREUR, ${chiffreSomme2} n'est pas reconnu. \nVeuillez saisir le 2nd nombre en chiffre avec un '.' au lieu de ',': `); // ressaisir valeur 2
      }

      console.log(`${chiffreSomme1} et ${chiffreSomme2}`) //affichage des 2 valeurs
    }
  } else { //si paramètre dans l'appel de la fonction somme.
    chiffreSomme1 = a;
    chiffreSomme2 = b;
  }

  chiffreSomme1 = Number(chiffreSomme1); //convertir en nombre et prendre l'entier
  chiffreSomme2 = Number(chiffreSomme2); //convertir en nombre et prendre l'entier
  somme = chiffreSomme1 + chiffreSomme2; // faire la somme des 2 valeurs

  if (chiffreSomme1 == 0 && chiffreSomme2 == 0) {
    console.log(`Voici la somme des 2 nombres : ${somme}`);
    sommeInSpan.innerHTML = `( ${chiffreSomme1} + ${chiffreSomme2} ) = La Tête à ToTo!!`;
  } else {
    console.log(`Voici la somme des 2 nombres : ${somme}`);
    sommeInSpan.innerHTML = `( ${chiffreSomme1} + ${chiffreSomme2} ) = ${somme}`; // Afficher des variables dans le DOM
  }
}

// alert(`lancer fonction somme`);
// // laSomme();
//--------------------------------------------------------------------------------------------------

// Fonction planète----------------------------------------------------------------------------------
// Créez une fonction qui affiche la liste des planètes du système solaire.
//
// Elle devra :
//
// contenir un tableau listant toutes les planètes du système solaire
// afficher le nombre total de planètes
// afficher toutes les planètes une par une dans la console en utilisant une boucle
// rajouter le mot "Hello, world !" quand on affiche la Terre dans notre boucle
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.

let planete = (a = [`Mercure`, `Vénus`, `Terre`, `Mars`, `Jupiter`, `Saturne`, `Uranus`, `Neptune`]) => {

  let listePlanete = [];
  let planeteInSpan = document.getElementById('div_planete'); // Afficher des variables dans le DOM

  console.log(`Nombre de planetes: ${a.length}`);

  for (planete of a) { //boucles pour sortir nom des planetes
    if (planete == `Terre`) { //si c'est la terre, ecrire message
      listePlanete.push(`${planete} : Salut les Terriens!!!`); // Afficher des variables dans le DOM
    } else {
      listePlanete.push(`${planete}`); // Afficher des variables dans le DOM

    }
  }
  console.warn(listePlanete.join());
  planeteInSpan.innerHTML = listePlanete.join(); // Afficher des variables dans le DOM

}

// alert(`debut de la fonction planete`);
// planete();

// Fonction personnage---------------------------------------------------------------------------------
// Créez une fonction personnage qui affiche les caractéristiques d'un personnage
//
// Elle devra :
//
// contenir un objet "perso", ayant les propriétés "nom", "age" et "métier", avec les valeurs que vous désirez
// affiche le nom, l'âge et le métier du personnage en accédant directement aux propriétés de l'objet
// affiche le nom, l'âge et le métier du personnage en bouclant sur toutes les propriétés de l'objet
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.


let perso = (a = 'Wolfgang', b = '30', c = 'Berger') => {
  let persoInSpan = document.getElementById('div_personnage'); // Afficher des variables dans le DOM

  let personnage = { //perso d'origine ( proto)
    "nom": a,
    "age": b,
    "metier": c
  }

  console.log(`Je m'appelle ${personnage.nom}, j'ai ${personnage.age} an(s) , mon travail est ${personnage.metier}`);

  persoInSpan.innerHTML = `Je m'appelle ${perso.nom}, j'ai ${perso.age} an(s) , mon travail est ${perso.metier}`; // Afficher des variables dans le DOM

  for (property in perso) { //boucle pour ecrire toutes les proprietes et valeurs
    console.log(`propriété : ${property} , valeur : ${perso[property]}`);
  }
}

// alert();
// perso();

// Fonction date-------------------------------------------------------------------------------------------
// Créez une fonction date qui utilisera l'objet Date natif de Javascript.
//
// Elle devra :
//
// afficher le contenu d'une variable dont la valeur est un objet Date JS natif initialisé par défaut
// stocker le jour le mois et l'année de votre objet Date dans des variables distinctes (jour/mois/année)
// afficher la date sous la forme jour-mois-année dans la console en utilisant vos variables
// utiliser une méthode de l'objet Date pour afficher la date sous sa forme "locale" directement (sans passer par les variables jour/mois/année)
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.
let date = (a = new Date().getDate(), b = new Date().getMonth() + 1, c = new Date().getFullYear()) => { //TODO remplacer les parametre par new Date(a,b,c);

  let laDate = new Date();
  let leJour = a;
  let leMois = b;
  let lAnnee = c;
  let dateInSpan = document.getElementById('div_date');



  console.log(`La date du jour est :${leJour} / ${leMois} / ${lAnnee}`);
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }
  console.warn(laDate.toLocaleDateString('fr-FR', options));

  dateInSpan.innerHTML = ` L'annversaire du personnage :` + leJour + '/' + leMois + '/' + lAnnee + `; Aujourd'hui nous sommes : ` +
    laDate.toLocaleDateString('fr-FR', options) + '; en date js: ' + laDate;

  // Afficher des variables dans le DOM
}
// alert();
// date();
//
// Fonctions + gestion des événements-------------------------------------------------------------------------
// Important : pour cet exercice, vous devez coder les événements directement dans votre script JS, interdit de les mettre dans les balises HTML.
//
//
// Mettre en place un écouteur
// Mettez un événement en place dans votre script, qui ne se déclenchera que quand la totalité de votre page web sera entièrement chargée. Faites en sorte que cet événement affiche "Ok toute la page est chargée" lorsqu'il s'active. Vous pouvez vérifier ça en alourdissant artificiellement votre page en rajoutant ces images dans le code HTML :
//
// Une fois que vous avez constaté cet effet, pensez à supprimer les images. C'était juste pour vous montrer.
//
// Cet événement est très important si on veux manipuler le DOM, car il permet d'attendre que toute la page soit entièrement chargée avant d'exécuter le JS.


// window.onload = function() {
//   console.log('javascript exécuté lorsque la page est chargée...');
// }

// Appeler une fonction avec un écouteur
//
// Dans votre événement "ma page est chargée", mettez en place des écouteurs pour chaque bouton de votre page HTML. Faites en sorte que évenement "click" sur un bouton exécute la fonction associée : bouton somme = fonction somme, bouton personnage = fonction personnage, etc... Testez le résultat dans votre page web.

window.addEventListener("load", function(event) {

  let titre = document.createElement("h1"); // rajout d'un titre en JS
  titre.innerHTML = `Je suis un titre créé en Javascript`;
  document.body.appendChild(titre);

  // console.log('javascript exécuté lorsque la page est chargée...');
  let buttonSomme = document.getElementById('somme');
  let buttonPlanete = document.getElementById('planete');
  let buttonPerso = document.getElementById('personnage');
  let buttonDate = document.getElementById('date');
  let buttonAffichageDom = document.getElementById('dom');
  let buttonModifDom = document.getElementById('dom_modif');
  let buttonModifStyle = document.getElementById('style');

  buttonSomme.addEventListener('click', function() {
    laSomme();
  });

  buttonPlanete.addEventListener('click', function() {
    planete(['Le messager des Dieux', 'L’étoile du Berger',
      'Planete Bleu', 'Planete Rouge', 'La géante', 'Le seigneur des anneaux', 'la 7e ',
      'La planète couchée'
    ]);
  });

  buttonPerso.addEventListener('click', function() {
    let namePerso = prompt('Saisir nom du personnage');
    let agePerso = prompt(`Saisir l'âge`);
    let metierPerso = prompt(`Saisir le métier`);

    if (namePerso == null || namePerso == 0 || agePerso == null || agePerso == 0 || metierPerso == null || metierPerso == 0) {
      perso(); //si pas de valeurs saisi, mettre paramètre de defaut
    } else {
      perso(namePerso, agePerso, metierPerso);
    }
  });

  buttonDate.addEventListener('click', function() {
    let jourAnnif = prompt(`saisir le numéro du jour du mois`);
    let moisAnnif = prompt(`saisir le mois en chiffre`);
    let anneeAnnif = prompt(`saisir l'année en chiffre`);

    if (jourAnnif == null || jourAnnif == 0 || moisAnnif == null || moisAnnif == 0 || anneeAnnif == null || anneeAnnif == 0) {
      date();
    } else {
      date(jourAnnif, moisAnnif, anneeAnnif);
    }
  });

  buttonAffichageDom.addEventListener('click', function() {
    affichageDom();
  });

  buttonModifDom.addEventListener('click', function() {
    modifDom();
  }, {
    once: true //limite à un seul click.. pour les li
  });

  buttonModifStyle.addEventListener('click', function() {
    modifStyle('green', '20px', 'visible');
  });
});

// Fonctions + manipulation du DOM----------------------------------------------------------------------------------
//
// Fonction dom
// Créez une fonction dom qui va lire certains éléments de votre contenu HTML.
//
// Elle devra :
//
// afficher le texte de la balise ayant l'id 'titre2'
// afficher le nombre de balises ayant la classe 'titre'
// afficher le texte de toutes les balises ayant la classe 'titre'
// afficher le texte de toutes les balises 'li'
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.
let affichageDom = () => {
  let affichageIdTitre2 = document.getElementById('titre2');
  let affichageIdTitre = document.getElementById('titre1');
  let affichageClassTitre = document.getElementsByClassName('titre');
  let affichageTagLi = document.getElementsByTagName('li');

  console.log(`Voici les id 'titre2 :'${affichageIdTitre2.innerHTML}`);
  console.log(`Voici les id 'titre1 :'${affichageIdTitre.innerHTML}`);

  for (let element of affichageClassTitre) {
    console.log(`Voici les class 'titre' :'${element.innerHTML}`);
  }
  for (let element of affichageTagLi) {
    console.log(`Voici les tag 'li' : ${element.innerHTML}`);
  }
}

// Fonction dom_modif------------------------------------------------------------
// Créez une fonction dom_modif qui va modifier certains éléments de votre contenu HTML.
//
// Elle devra :
//
// changer le contenu du h1 en 'Bienvenue'
// changer le contenu du h2 en 'Exo JS'
// changer le contenu paragraphe en 'Voici quelques fonctions exécutées en javascript.'
// changer le contenu de chaque point (li) de la liste en "Liste 1", "Liste 2", etc...
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.
let modifDom = () => {

  document.getElementById('titre1').innerHTML = 'Bienvenue'; // pas pue remplacer TagNames h1
  document.getElementById('titre2').innerHTML = 'EXO JS';
  document.getElementById('paragraphe1').innerHTML = 'Voici quelques fonctions exécutées en javasript.';

  let modifLi = document.getElementsByTagName('li');
  for (let element of modifLi) {
    element.innerHTML = 'liste' + element.innerHTML;
  }
}
// Fonction style---------------------------------------------------------------------------------------------------
// Créez une fonction style qui va permettre d'accéder aux propriétés CSS des éléments de votre page HTML.
//
// Elle devra :
//
// aligner le titre 1 au centre de la page
// mettre en rouge tous les éléments ayant la classe 'titre'
// mettre une bordure 'solid 1px black' et un padding '10px' au paragraphe
// faire disparaître la liste
// Appelez cette fonction dans votre script pour vérifier qu'elle fonctionne, puis commentez l'appel à la fonction avant de passer à l'exercice suivant.

let modifStyle = (colorStyle = 'tomato', paddingStyle = '10px', visibilityStyle = 'hidden') => {
  let styleIdTitre1 = document.getElementById('titre1');
  let styleClassTitre = document.getElementsByClassName('titre');
  let styleTagParagraphe = document.getElementsByTagName('p');
  let styleTagLi = document.getElementsByTagName('li');

  styleIdTitre1.style.textAlign = 'center';

  for (let element of styleClassTitre) {
    element.style.color = colorStyle;
  };

  for (let element of styleTagParagraphe) {
    element.style.border = 'solid 1px black';
    element.style.padding = paddingStyle;
  };
  for (let element of styleTagLi) {
    element.style.visibility = visibilityStyle; //si on veux garder l'emplacement div
    // element.style.display = 'none';//si suppréssion de l'emplacement div
  };
}

// Afficher des variables dans le DOM--------------------------------------------------------------------
// Modifier vos fonctions "somme", "planete", "personnage" et "date", afin que chacune d'elle affiche ses résultats non plus dans la console, mais dans sa balise span HTML associée (fonction somme modifie le contenu de div_somme, fonction planete modifie le contenu de div_planete, etc...).

// -----------OK---------------

// Fonctions avec paramètres----------------------------------------------------------------------------
// Ajouter la notion de paramètre dans vos fonctions. Pour ceux qui en sont la, appelez moi avant de commencer l'exercice.
//
// Fonction somme :
//
// ajoutez des paramètres a et b dans la déclaration de la fonction somme()
// leur donner des valeurs par défaut égales à zéro
// faire en sorte que les valeurs demandées à l'utilisateur (prompt) ne s'active que si a = 0 et b = 0, sinon, on utilise les valeurs des paramètres
// appelez votre fonction sans paramètre (ex : somme())
// appelez votre fonction avec paramètres (ex : somme(3,7))

//--------------OK----------------------
// Fonction planète :
//
// ajoutez un paramètre listOfPlanet à votre fonction planete
// donner lui comme valeur par défaut un tableau qui contient la liste des planètes du système solaire (listOfPlanet = ["Mercure", "Vénus", ....])
// appelez votre fonction sans paramètre (ex : planete())
// appelez votre fonction avec  paramètres (ex : planete(["planete1", "planete2", "planete3", "planete3"]))
// voici une liste d'exoplanètes potentiellement habitables si vous le souhaitez
//
//
// => Faire pareil avec les fonctions personnage()

//-----------------OK----------------------------
//et date().
//-------------------A revoir-----------------------
// => variabiliser la couleur dans la fonction style() (ou les autres propriétés CSS)
//
//
//
// Attention : quand vous appelez vos fonctions via un événement "click", le addEventListener "rajoute" un paramètre à l'appel de vos fonctions. C'est l'objet qui représente l’événement. Suivant la syntaxe que vous avez retenu pour vos écouteurs, cela peut faire bugger vos appels de fonctions (somme, date, etc...). Merci de m'avertir si vous rencontrer ce bug, je vous expliquerai ça individuellement.