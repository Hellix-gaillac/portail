class TodoList {
  list = [];
  user = '';
  todo = '';

  titleHTML;
  inputHTML;
  buttonHTML;
  listHTML;


  constructor(user = '', todo = '') {
    if (user == '') {
      console.error(`veuillez saisir un nom`);
    } else {
      this.user = user;
      console.warn(user);
      this.createTitleHTML();
      this.createInputHTML();
      this.createButtonHTML();

    }
  }

  add(this.inputHTML.value = "") {
    if (this.inputHTML.value === '') {
      console.error('erreur de saisi');
      return false;

    } else {
      this.list.push(this.inputHTML.value);
      console.warn('saisi ok');
      this.createListHTML();
      this.createTodoHTML();
      this.viderInput();

      return true;

    }
  }
  createTitleHTML() {
    this.titleHTML = document.createElement("h2"); // rajout d'un titre en JS
    this.titleHTML.innerHTML = `Liste de ` + this.user;
    document.body.appendChild(this.titleHTML);
  }

  createInputHTML() {
    this.inputHTML = document.createElement("INPUT");//création de l'input liste
    this.inputHTML.setAttribute("type", "text");//definition des attributs input
    this.inputHTML.setAttribute("value", "");
    this.inputHTML.setAttribute("id", "todoText");
    document.body.appendChild(this.inputHTML);//placer le input à la fin du html
  }

  createButtonHTML() {
    this.buttonHTML = document.createElement("BUTTON");//création du bouton ajout liste
    this.buttonHTML.setAttribute("id", "addTodo");
    document.body.appendChild(this.buttonHTML);//placer le input à la fin du html

    document.getElementById("addTodo").innerHTML = "Ajouter à la liste";
    document.getElementById('addTodo').addEventListener('click', () => {//reagir au click du bouton ajout
      this.add(this.inputHTML.value);
    });
  }

  createListHTML() {
    this.listHTML = document.createElement("OL");//création du bouton ajout liste
    this.listHTML.setAttribute("id", "olTodo");
    document.body.appendChild(this.listHTML);//placer le input à la fin du html
  }

  createTodoHTML() {
    let createLi = document.createElement("LI");//création du  liste dans ol
    document.body.appendChild(createLi);//placer le input à la fin du html
    createLi.innerHTML = this.inputHTML.value;// ecriture supprimer+valueInput

    let deleteSpan = document.createElement("SPAN");//création d'un span pour supprimer la li
    deleteSpan.innerHTML = '<i class="far fa-trash-alt"></i>';
    createLi.appendChild(deleteSpan);

    let todoIndex = this.list.indexOf(this.inputHTML.value);

    let buttonDelete = document.querySelector("SPAN");
    buttonDelete.addEventListener('click', function() {
      console.error(`click sur delete`);
      this.list.remove();
    });

  }

  viderInput() {
    (document.querySelector('#todoText') as HTMLInputElement).value = "";
  }
  remove() {
    console.log(todoIndex);
  }
}
