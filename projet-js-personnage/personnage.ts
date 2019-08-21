//TODO compteur de round


class Personnage {
  private _nom = "";
  private _vie = 0;
  private _attaque = 0;
  private _defense = 0;
  private _existe = false;

  get nom() {
    return this._nom;
  }

  set nom(name) {
    if (name != "") {
      this._nom = name;
    } else {
      console.log(`Veuillez saisir un nom valide`);
    }
  }

  get vie() {
    return this._vie;
  }

  set vie(health) {
    if (health > 0 && health <= 100) {
      this._vie = health;
    } else if (health <= 0) {
      this._vie = 0;
      this.existe = false;
      console.log(`%cLe personnage ${this.nom} est MORT`, `background: tomato; color: white`);
    }
  }

  get attaque() {
    return this._attaque;
  }

  set attaque(attack) {
    if (attack >= 20 && attack <= 100) {
      this._attaque = attack;
    }
  }

  get defense() {
    return this._defense;
  }

  set defense(protect) {
    if (protect >= 20 && protect <= 100) {
      this._defense = protect;
    }
  }

  get existe() {
    return this._existe;
    console.warn(this._existe);
  }

  set existe(living) {
    if (living == true || living == false) {
      this._existe = living;
    }
  }

  constructor(nom = "", vie = 0, attaque = 0, defense = 0) {
    if (nom != "" && nom != null) {
      this.nom = nom;
      console.log('Nouveau Personnage ' + this.nom + ' créer');
      this.existe = true;
      this.vie = Personnage.nombreAleatoire();
      this.attaque = Personnage.nombreAleatoire();
      this.defense = Personnage.nombreAleatoire();

    } else {
      console.error('SAISIR le Nom du personnage !!!!!!!!! ');
    }
  }

  info() {
    console.warn(`Son Nom est : ${this.nom} ; Il a ${this.attaque} point d'attaque, ${this.defense} point de defense. ET ${this.vie} point de vie ,`);
  }

  attaquer(defenseur) {
    console.log(`%cNouvelle attaque de ${this.nom}  sur ${defenseur.nom}`, `background: blue; color: white`);

    if (this.attaque > defenseur.defense) {
      defenseur.vie = defenseur.vie - 10;

    } else if (this.attaque == defenseur.defense) {
      defenseur.vie = defenseur.vie - 5;

    } else if (this.attaque < defenseur.defense) {
      this.vie = this.vie - 5;
    }
    // this.info();
    // defenseur.info();
  }
  static nombreAleatoire() {
    return Math.round(Math.random() * (101 - 20) + 20);
  }
}

class Match {
  nbrJoueur;
  players = [];
  tour = 1;
  winner;

  nbrJoueur = Number(prompt(`Saisir un nombre de nombre de joueurs`));

  constructor() {
    this.creationPersonnage();
    this.run();
    this.win();

  }

  creationPersonnage() {
    let nomPlayer = "";
    let perso;

    for (let i = 0; i < this.nbrJoueur; i++) {
      while (this.verifierNom(nomPlayer) == false || nomPlayer == "") {
        nomPlayer = prompt(`Saisir un Nom de personnage`);
      }
      this.verifierNom(nomPlayer);
      perso = new Personnage(nomPlayer);

      perso.info();
      this.players.push(perso);
    }
  }

  verifierNom(newName) {
    let nomEstDifferent = true;

    for (let player of this.players) {
      if (player.nom === newName) {
        return false;
      } else {
        nomEstDifferent = true;
      }
    }
    return nomEstDifferent;
  }

  run() {
    let continueGame = false;

    for (let a = 0; a < this.nbrJoueur; a++) {
      if (this.players[a].existe) {
        for (let b = 0; b < this.nbrJoueur; b++) {
          if (b != a && this.players[a].existe && this.players[b].existe) {
            console.log(`Round : ${this.tour}`);
            this.players[a].attaquer(this.players[b]);
            this.tour++;
            if (this.players[a].existe && this.players[b].existe) {
              continueGame = true
            }
          }
        }
      }
    }
    if (continueGame) {
      this.run();
    } else {
      for (let player of this.players) {
        if (player.existe) {
          this.winner = player;
        }
      }
    }
  }

  win() {
    console.log(`%c${this.winner.nom} GAGNE LE MATCH!!!`, `background: green; color: white`);
    this.winner.info();
  }

}








}

let match = new Match();
