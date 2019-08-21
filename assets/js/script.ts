window.addEventListener("load", function() {

  let projectList = [];

  //recup projectList
  fetch('projects.json')
    .then((result) => {
      result.json()
        .then(function(projects) {
          build(projects);
        });
    });

  //creer les objects
  let build = (projects) => {
    for (let json_project of projects) {
      let project = new Project(json_project);
      projectList.push(project);
      project.displayCard(projectList);
    }
  };

  let buttonTous = document.getElementById("tous");
  let buttonLesFini = document.getElementById("fini");
  let classPasFinis = document.getElementsByClassName("pas_fini");
  let buttonAlpha = document.getElementById("alpha");
  let buttonChrono = document.getElementById("chrono");
  let buttonAntiChrono = document.getElementById("anti-chrono");

  // let elementCard = document.getElementById;

  buttonTous.addEventListener('click', function() {
    for (let element of classPasFinis) {
      element.style.display = "inline-block";
    }
  });

  buttonLesFini.addEventListener('click', function() {
    for (let element of classPasFinis) {
      element.style.display = "none";
    }
  });


  buttonAlpha.addEventListener('click', function() {

    projectList.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    remakeCards(projectList);


  });

  buttonChrono.addEventListener('click', function() {
    projectList.sort(function(a, b) {
      if (a.modif < b.modif) {
        return -1;
      } else if (a.modif > b.modif) {
        return 1;
      } else {
        return 0;
      }
    });
    remakeCards(projectList);
  });

  buttonAntiChrono.addEventListener('click', function() {
    projectList.sort(function(a, b) {
      if (a.modif > b.modif) {
        return -1;
      } else if (a.modif < b.modif) {
        return 1;
      } else {
        return 0;
      }
    });
    remakeCards(projectList);
  });

  let remakeCards = (nouvelleList) => {
    for (let element of nouvelleList) {
      element.removeCard();
    }
    for (let element of nouvelleList) {
      element.displayCard();
    }
  }



});
//TODO faire une methode displayCard et dans click buttonChrono faire remove .card;
// puis refaire un displayCard
