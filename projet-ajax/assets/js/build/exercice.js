//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/todos
//https://jsonplaceholder.typicode.com/photos
//https://jsonplaceholder.typicode.com/albums
//https://jsonplaceholder.typicode.com/comments
//https://jsonplaceholder.typicode.com/posts
//---------------------------------------------//
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('hello wolf');
  // selecteur users
  let selectHtml = document.getElementById('listUsers');

  fetch('https://jsonplaceholder.typicode.com/users').then(function(result) {
    result.json()

      .then(function(data) {
        for (let utilisateur of data) {
          let nomSelecteur = document.createElement("option");
          nomSelecteur.innerHTML = utilisateur.name;
          nomSelecteur.value = utilisateur.id;
          selectHtml.appendChild(nomSelecteur);
        }
        console.log(data);
      });

  }).catch(function(error) {
    console.error(`une erreur s'est produite.`);
    console.log(error);
  });


  //liste des TODO:
  let buttonTodo = document.getElementById('loadTodo');
  let ulUser = document.getElementById('listTodos');
  let idSelected = selectHtml.value;

  buttonTodo.addEventListener('click', function() {
    idSelected = selectHtml.value;

    console.warn(idSelected);
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + idSelected).then(function(result) {
      result.json()
        .then(function(data) {
          for (let todo of data) {
            let listLi = document.createElement("li");
            listLi.innerHTML = todo.title;

            // listLi.value = utilisateur.completed;
            if (todo.completed) {
              listLi.style.color = 'green';
            }

            ulUser.appendChild(listLi);
          }
          console.log(data);
        });

    }).catch(function(error) {
      console.error(`une erreur s'est produite.`);
      console.log(error);
    });

  })

  // //album photos
  let buttonAlbum = document.getElementById('loadAlbum');
  let ulAlbum = document.getElementById('listAlbum');
  let sectionPhotos = document.getElementById('listPhotos');



  buttonAlbum.addEventListener('click', function() {
    idSelected = selectHtml.value;

    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + idSelected).then(function(result) {
      result.json()
        .then(function(data) {
          for (let album of data) {
            let albumLI = document.createElement('li');
            let linkAlbum = document.createElement('a');
            linkAlbum.innerHTML = album.title;

            //hover style des link
            linkAlbum.onmouseover = function() {
              this.style.textDecoration = "underline";
              this.style.color = "red";
              this.style.cursor = "pointer"
            }
            linkAlbum.onmouseout = function() {
              this.style.textDecoration = "none";
              this.style.color = "black";

            }

            ulAlbum.appendChild(albumLI);
            albumLI.appendChild(linkAlbum);

            linkAlbum.addEventListener('click', function() {
              console.warn(album.id);
              getPhoto(album.id);
            })

          }
        });

    }).catch(function(error) {
      console.error(`une erreur s'est produite.`);
      console.log(error);
    });

    let getPhoto = (idAlbum) => {
      fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + idAlbum).then(function(result) {
        result.json()
          .then(function(data) {
            for (let photo of data) {
              let photoImg = document.createElement('img');

              photoImg.src = photo.thumbnailUrl;
              photoImg.title = photo.title;
              sectionPhotos.appendChild(photoImg);

              photoImg.addEventListener('click', function() {
                window.open(photo.url, '_blank');
              });
            };
          });
      }).catch(function(error) {
        console.error(`une erreur s'est produite.`);
        console.log(error);
      });
    }
  });

  //ARTICLES ET Commentaires
  let buttonArticles = document.getElementById('loadArticles');
  let sectionArticles = document.getElementById('sectionArticles');
  let createArticle = document.createElement('article');

  buttonArticles.addEventListener('click', function() {
    idSelected = selectHtml.value;
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + idSelected).then(function(result) {
      result.json()
        .then(function(data) {
          for (let article of data) {
            let titleArticle = document.createElement('h3');
            let bodyArticle = document.createElement('p');

            titleArticle.innerHTML = article.title;
            titleArticle.style.color = 'green';
            bodyArticle.innerHTML = article.body;

            createArticle.appendChild(titleArticle);
            createArticle.appendChild(bodyArticle);

            sectionArticles.appendChild(createArticle);

            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + article.id).then(function(result) {
              result.json()
                .then(function(data) {
                  for (let comment of data) {
                    let createComment = document.createElement('div');
                    createComment.class = "comments";
                    let createName = document.createElement('h4');
                    let createEmail = document.createElement('h5');
                    let createBody = document.createElement('p');

                    createName.innerHTML = comment.name;
                    createName.style.color = "red";
                    createEmail.innerHTML = comment.email;
                    createBody.innerHTML = comment.body;

                    bodyArticle.appendChild(createName);
                    bodyArticle.appendChild(createEmail);
                    bodyArticle.appendChild(createBody);

                  }
                })
            });
          }
        });
    });
  });


  // effacer todoList au changement de value de selected.
  selectHtml.addEventListener('change', function() {
    while (ulUser.hasChildNodes()) {
      ulUser.removeChild(ulUser.firstChild);
    }

    while (ulAlbum.hasChildNodes()) { //ou ulAlbum.innerHTML ="";
      ulAlbum.removeChild(ulAlbum.firstChild);
    }
    while (sectionPhotos.hasChildNodes()) { //ou ulAlbum.innerHTML ="";
      sectionPhotos.removeChild(sectionPhotos.firstChild);
    }

    while (createArticle.hasChildNodes()) { //ou ulAlbum.innerHTML ="";
      createArticle.removeChild(createArticle.firstChild);
    }


  });

});