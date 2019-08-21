class Project {

  private _id = '';
  private _title = '';
  private _img = '';
  private _link = '';
  private _skill = [];
  private _modif = '';
  private _dateAffichee = '';

  private _card;
  private _cardHeader;
  private _cardHeaderH3;
  private _cardImg;
  private _cardSkill;
  private _cardBodyButton;
  private _cardButton;
  private _cardFooter;
  private _cardFooterContent;

  get modif() {
    return this._modif;
  }
  get title() {
    return this._title;
  }

  constructor(project) {
    this._id = project.id;
    this._title = project.title;
    this._img = project.img;
    this._link = project.link;
    this._skill = project.skill;
    this._modif = project.modif;
  }

  card() {

    this._card = document.createElement("DIV");
    this._card.setAttribute("class", "card");

    if (this._link == "") {
      this._card.classList.add("pas_fini");
    }

    let cardBox = document.getElementById("projects");
    cardBox.appendChild(this._card);

  }
  removeCard() {
    let cardBox = document.getElementById("projects");
    while (cardBox.hasChildNodes()) {
      cardBox.removeChild(cardBox.firstChild);
    }
  }

  cardHeader() {
    this._cardHeader = document.createElement("DIV");
    this._cardHeader.setAttribute("class", "card-header");

    this._card.appendChild(this._cardHeader);
    this._cardHeaderH3 = document.createElement("H3");
    this._cardHeaderH3.innerHTML = this._title;
    this._cardHeader.appendChild(this._cardHeaderH3);
  }

  cardImg() {
    this._cardImg = document.createElement("IMG");
    this._cardImg.src = this._img;
    // this._cardImg.setAttribute("src", this._img);
    if (this._img != "") {
      this._cardImg.setAttribute("class", "card-img-top p-2");
      this._card.appendChild(this._cardImg);
    };
  }

  cardSkill() {
    if (this._skill.length >= 1) {
      this._cardSkill = document.createElement("UL");
      this._cardSkill.setAttribute("class", "list-group list-group-flush");

      this._card.appendChild(this._cardSkill);

      for (let skill of this._skill) {
        let skillLi = document.createElement("LI");
        skillLi.innerHTML = skill;
        skillLi.setAttribute("class", "list-group-item");

        this._cardSkill.appendChild(skillLi);
      }
    }
  }

  cardButton() {
    this._cardBodyButton = document.createElement("DIV");
    this._cardBodyButton.setAttribute("class", "card-body text-center");
    this._card.appendChild(this._cardBodyButton);

    if (this._link == "") {
      this._cardButton = document.createElement("P");
      this._cardButton.innerHTML = "En cours de réalisation";
      this._cardButton.setAttribute("class", "text-warning");
      this._cardBodyButton.appendChild(this._cardButton);
    } else {
      this._cardButton = document.createElement("A");
      this._cardButton.innerHTML = "Voir le projet";
      this._cardButton.setAttribute("class", "btn btn-primary");
      this._cardButton.setAttribute("href", this._link);
      this._cardBodyButton.appendChild(this._cardButton);
    }
  }

  cardFooter() {
    let laDate = new Date(this._modif);

    let options = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }

    this._cardFooter = document.createElement("DIV");
    this._cardFooter.setAttribute("class", "card-footer bg-light text-muted");
    this._card.appendChild(this._cardFooter);

    this._cardFooterContent = document.createElement("SMALL");

    if (this._modif != '') {
      this._dateAffichee = laDate.toLocaleDateString('fr-FR', options);
    } else {
      this._dateAffichee = 'non renseignée';
    }

    this._cardFooterContent.innerHTML = "Dernière modification : " + this._dateAffichee;
    this._cardFooter.appendChild(this._cardFooterContent);

  }
  displayCard() {

    this.card();
    this.cardHeader();
    this.cardImg();
    this.cardSkill();
    this.cardButton();
    this.cardFooter();
  }


}
