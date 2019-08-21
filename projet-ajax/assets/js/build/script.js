console.log("Debut du script");

// setTimeout(function() {
//   console.log("Ce message s'affiche trois secondes après l'execution du script");
//
// }, 3000);
//
// function heure() {
//   let date = new Date();
//   console.log(date.toLocaleTimeString());
// }
// //heure()
// setInterval(heure, 1000);
//-----------------------------------------------//
//
// let ajax = (url, success, error) => { //déclaration de la function
//   let req = new XMLHttpRequest(); //instantation de l'objet XHR
//   req.open('GET', url, true); //paramètre de l'objet via méthode open
//   req.onreadystatechange = (aEvt) => { //ecoute evenement sur l'objet
//     if (req.readyState == 4) { //statue 4 de l'évenement = données reçues
//       if (req.status == 200) { // Status 200 HTTP = tout est ok
//         success(req.responseText);
//       } else {
//         error(req);
//       }
//     }
//   };
//   req.send(null); // Envoie de la requete
// }
// ajax('https://jsonplaceholder.typicode.com/users', function(response) {
//   console.log(response);
// }, function(req) {
//   console.error('Erreur');
//   console.log(req);
// })
//
//--------------------------------------------------//


// //PROMESSES
// function attendre(ms) {
//   let attente = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(`Le temps d'attente est ${ms} milliseconde`);
//     }, ms);
//
//     setTimeout(function() {
//       reject(`Le temps d'attente est trop long`);
//     }, 3000);
//   });
//   return attente;
// }
//
// function affiche(message) {
//   console.log(message);
// }
//
// function tropLong(message) {
//   console.log(message);
// }
//
// attendre(4000).then(affiche).catch(tropLong);
//
//
//---------------------------------------//
//FETCH--------------------------------------//
document.addEventListener("DOMContentLoaded", function(event) { //chargement du script aprés chargement de la page

  //   let data = 9;
  //   document.getElementById('list').addEventListener("click", function() {
  //     fetch('https://jsonplaceholder.typicode.com/users').then(function(result) {
  //       console.warn('Données récupérées!');
  //       result.json()
  //         .then(function(data) {
  //           console.warn('Données jsonisées!');
  //
  //           for (let user of data) {
  //             let todo = document.createElement("p");
  //             todo.innerHTML = user.name;
  //             todo.innerHTML += " : " + user.username + ",<br/>";
  //             todo.innerHTML += "email :" + user.email + "<br/>" + "<br/>" + "<br/>";
  //             document.body.appendChild(todo);
  //           }
  //           console.log(data);
  //         });
  //     }).catch(function(error) {
  //       console.error(`une erreur s'est produite.`);
  //       console.log(error);
  //     });
  //     console.log(typeof data, data);
  //   });
  // }, {
  //   once: true

  fetch('https://jsonplaceholder.typicode.com/users').then(function(result) {
    console.warn('Données récupérées!');
    result.json()
      .then(function(data) {
        console.warn('Données jsonisées!');

        for (let user of data) {
          let todo = document.createElement("p");
          todo.innerHTML = user.name;
          todo.innerHTML += " : " + user.username + ",<br/>";
          todo.innerHTML += "email :" + user.email + "<br/>" + "<br/>" + "<br/>";
          document.body.appendChild(todo);
        }
        console.log(data);
      });
  }).catch(function(error) {
    console.error(`une erreur s'est produite.`);
    console.log(error);
  });
  console.log(typeof data, data);

});






console.log("Fin du script");