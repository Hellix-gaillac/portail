document.addEventListener("DOMContentLoaded", function(event) {
  let httpsApi = "https://api.themoviedb.org";
  let versionApi = "3"
  let searchApi = "search";
  let searchType = "movie"
  let apiKey = "api_key=ff0a56845ff38ff284ed35c8b0bb956b";
  let languageApi = "&language=fr-FR";

  let buttonOk = document.getElementById('ok');
  let searchInput = document.getElementById('search');
  let articleFilm = document.getElementById('film');

  let valueSearch;
  let urlApi = `${httpsApi}/${versionApi}/${searchApi}/${searchType}?${apiKey}&query=`;
  let urlSearch = urlApi + valueSearch;


  buttonOk.addEventListener('click', function() {
    valueSearch = searchInput.value;
    console.log(valueSearch);
    valueSearch = encodeURIComponent(valueSearch);

    urlSearch = urlApi + valueSearch;
    searchMovie(urlSearch);
  });


  let searchMovie = (valueSearch) => {
    //effacer recherce précédente
    while (articleFilm.hasChildNodes()) {
      articleFilm.removeChild(articleFilm.firstChild);
    }

    //affichage de la recherche
    fetch(valueSearch).then(function(result) {
      result.json()

        .then(function(data) {
          console.log(data);
          //cadre tous les résultats
          let divResults = document.createElement('div');
          divResults.class = 'tous-resultats';
          articleFilm.appendChild(divResults);

          //cadre 1er resultat
          let divFilm1 = document.createElement('div');
          divFilm1.class = 'film1';
          articleFilm.appendChild(divFilm1);

          //affichage tous les resultats
          let tableauResult = data.results;
          let resultAllFilm = document.createElement('div');

          resultAllFilm.class = 'tous-les-films';
          divResults.appendChild(resultAllFilm);

          let creationFieldset = document.createElement('fieldset');
          creationFieldset.style.margin = "10px";
          creationFieldset.style.padding = "10px";

          resultAllFilm.appendChild(creationFieldset);
          let creationLegend = document.createElement('legend');
          creationLegend.innerHTML = 'All of results';
          creationFieldset.appendChild(creationLegend);

          for (let chaqueFilm of tableauResult) {

            let creationButton = document.createElement('button');
            creationButton.innerHTML = chaqueFilm.title;
            creationButton.style.margin = "2px";
            creationButton.style.padding = "2px";

            creationButton.addEventListener('click', function() {
              urlSearch = urlApi + chaqueFilm.title;
              searchMovie(urlSearch);
            })

            creationFieldset.appendChild(creationButton);
          };

          // affichage 1er résultat
          let titleFilm = document.createElement('h3');
          let dateFilm = document.createElement('p');
          let imgFilm = document.createElement('img');
          let resumeFilm = document.createElement('p');

          let index0Tableau = data.results[0];

          titleFilm.innerHTML = index0Tableau.original_title;
          dateFilm.innerHTML = 'Sortie en salle : ' + new Date(index0Tableau.release_date).toLocaleDateString('fr-FR');
          imgFilm.src = "https://image.tmdb.org/t/p/w200" + index0Tableau.poster_path;
          resumeFilm.innerHTML = index0Tableau.overview;

          if (index0Tableau.title != "") {
            divFilm1.appendChild(titleFilm);
          } else {
            divFilm1.appendChild(`il n'y a pas de correspondance pour ce titre`);
          };
          if (index0Tableau.release_date != "") {
            divFilm1.appendChild(dateFilm);
          } else {
            divFilm1.appendChild(`il n'y a pas de date de sortie pour ce titre`);
          };
          if (index0Tableau.poster_path != "") {
            divFilm1.appendChild(imgFilm);
          } else {
            divFilm1.appendChild(`il n'y a pas d'affiche de film pour ce titre`);
          };
          if (index0Tableau.overview) {
            divFilm1.appendChild(resumeFilm);
          } else {
            divFilm1.appendChild(`il n'y a pas de résumé pour ce titre `);
          };

        })

    }).catch(function(error) {
      alert(`Not result Found`);
    });
  }



});