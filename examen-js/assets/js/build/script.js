document.addEventListener("DOMContentLoaded", function(event) {
  console.log('hello wolf');
  //création balise main
  let mainPage = document.createElement('main');
  document.body.appendChild(mainPage);

  //cadre div Search
  let divSearch = document.createElement('div');
  // divSearch.class = 'search';
  mainPage.appendChild(divSearch);

  //cadre div résultat
  let divResults = document.createElement('div');
  // divResults.class = 'resultat';
  mainPage.appendChild(divResults);

  // création bouton de récupération des villes
  let createButtonGenerate = document.createElement('button');
  createButtonGenerate.innerHTML = 'Récupérer liste des villes';
  divSearch.appendChild(createButtonGenerate);

  //création select villes
  let inputSelect = document.createElement('select');
  divSearch.appendChild(inputSelect);

  //liste des villes
  let tableauVilles = ['Toulouse', 'Paris', 'Marseille', 'Le Cap', 'Berlin', 'Pékin', 'Buenos Aires', 'Sydney', 'Washington'];

  //écouteur bouton et creation options des ville dans createSelect
  createButtonGenerate.addEventListener('click', function() {
    let optionDefaut = document.createElement('option');
    optionDefaut.innerHTML = 'choix de la ville';
    inputSelect.appendChild(optionDefaut);

    for (ville of tableauVilles) {
      let optionVille = document.createElement('option');
      optionVille.innerHTML = ville;
      optionVille.id = ville.toLowerCase();
      inputSelect.appendChild(optionVille);
    }
  });

  //API const
  // const urlApi = 'https://samples.openweathermap.org/data/2.5/weather?q='
  const urlApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const keyApi = '&appid=34940536e19bff701b43dd5ba2afdcb9';
  const keyApi1 = '&appid=0b7f09b5d7d1bda7b634c89d9737ca56';
  const unityApi = '&units=metric';



  // fetch de la ville selectionnée
  inputSelect.addEventListener('change', function() {
    while (divResults.hasChildNodes()) {
      divResults.removeChild(divResults.firstChild);
    }

    console.log(inputSelect.value);
    console.log(urlApi + inputSelect.value + keyApi + unityApi);

    fetch(urlApi + inputSelect.value + keyApi + unityApi)
      .then(function(result) {
        result.json()
          .then(function(data) {
            afficheVille(data.name);
            afficheIcon(data.weather);
            afficheCoordonee(data.coord);
            afficheTemperature(data.main);
            afficheVent(data.wind);
            afficheDate(data.dt);



          })
      });


    let afficheVille = (ville) => {

      let createVille = document.createElement('h3');
      createVille.id = 'name';
      createVille.innerHTML = ville;
      divResults.appendChild(createVille);
    };

    let afficheCoordonee = (coord) => {

      let createCoord = document.createElement('div');
      createCoord.id = 'coord';
      createCoord.innerHTML = `longitude : ${coord.lon}, latitude ${coord.lat}`;
      divResults.appendChild(createCoord);
    };

    let afficheIcon = (tabWeather) => {
      let idWeather;
      const urlIcon = 'http://openweathermap.org/img/w/';
      const urlIconType = '.png';

      for (objet of tabWeather) {
        idWeather = objet.icon;
      };

      let createDivIcon = document.createElement('div');
      let createImgIcon = document.createElement('img');

      createDivIcon.id = 'icon';
      createImgIcon.src = urlIcon + idWeather + urlIconType;
      divResults.appendChild(createDivIcon);
      createDivIcon.appendChild(createImgIcon);

    };

    let afficheVent = (vent) => {
      let vitVent = vent.speed * 3.6;
      let createVitVent = document.createElement('div');
      createVitVent.id = 'vitVent';
      createVitVent.innerHTML = `vitesse du vent : ${vitVent.toFixed(2)} km/h`;
      divResults.appendChild(createVitVent);


      let dirVent = vent.deg;
      console.log(`directionvent ${dirVent} degrés`);

      let createDirVent = document.createElement('div');
      createDirVent.id = 'dirVent';
      createDirVent.innerHTML = `Direction du vent ${dirVent} degrés`;
      divResults.appendChild(createDirVent);

      //TODO fleche orientée
      let divGirouette = document.createElement('div');
      divGirouette.id = 'div-girouette';
      divResults.appendChild(divGirouette);

      let createGirouette = document.createElement('div');
      createGirouette.id = "girouette";
      createGirouette.style.transform = `rotate(${dirVent}deg)`;
      divGirouette.appendChild(createGirouette);




    };

    let afficheTemperature = (temperature) => {
      console.log(`temp en c ${temperature.temp}`);
      let createTemperature = document.createElement('div');
      createTemperature.id = 'temperature';
      createTemperature.innerHTML = `Température : ${temperature.temp} °C`;
      divResults.appendChild(createTemperature);

    };

    let afficheDate = (dateMs) => {
      console.warn(dateMs);
      let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }

      let date = new Date(dateMs * 1000).toISOString();
      let dateRecup = new Date(date);
      let dateLocale = dateRecup.toLocaleDateString('fr-FR', options);

      let createDate = document.createElement('div');
      createDate.id = 'date';
      createDate.innerHTML = `Date du relevé : ${dateLocale}`;
      divResults.appendChild(createDate);
    };



  });









});