// let nombre_a: number = 1;
// let nombre_b: number = 2;
// let prenom: string;
// let age: number;
//
// let hello = (prenom: string, age: number): string => {
//   return `Bonjour, je m'appelle ${prenom} et j'ai ${age}ans.`;
// };
// console.log(hello("xavier", 34));
//
//
// let listePrenom = ["xav", "amande", "alice", "Daria"];
//
// let hello_friends = (liste: Array<string>): void => {
//   for (let friend of liste) {
//     console.log(`salut ${friend}!`);
//   }
// };
//
// hello_friends(listePrenom);
//
// let adresse = {
//   "rue": "74 rue de la soif",
//   "cp": 81600,
//   "ville": "GAILLAC",
//   "appartement": 91
// };
//
// let affiche_adresse = (address: { rue: string, cp: string | number, ville: string, appartement?: string | number }) => {
//   if (address.appartement != "") {
//     console.log(`Votre adresse est : ${address.appartement}, ${address.rue} ${address.cp} ${address.ville} `);
//   } else {
//     console.log(`Votre adresse est : ${address.rue} ${address.cp} ${address.ville} `);
//   }
// }
//
// affiche_adresse(adresse);

class Eleve {
  private _prenom = "";
  private _age = 0;
  private _adresse = {
    "rue": "",
    "cp": "",
    "ville": "",
    "appartement": ""
  };
  private _listeNotes = [];
  private _moyenne = 0;
  private _languageEtudies = [];


  set prenom(sonPrenom) {
    this._prenom = sonPrenom;
  }
  set age(sonAge) {
    this._age = sonAge;
  }
  set adresse(sonAdresse) {
    this._adresse = sonAdresse;
  }
  set note(saNote) {
    if (saNote >= 0 && saNote <= 20) {
      this._listeNotes.push(saNote);
    }
  }
  get moyenne() {
    return this._moyenne;
  }
  set moyenne(saMoyenne) {
    this._moyenne = Number(saMoyenne.toFixed(2));
  }

  get languageEtudies() {
    return this._languageEtudies;
  }
  set language(listLanguage) {
    for (let nomLanguage of listLanguage) {
      this._languageEtudies.push(nomLanguage);
    }
  }

  constructor(prenom: string, age: number, adresse: interface_adresse) {
    this.prenom = prenom;
    this.age = age;
    this.adresse = adresse;
  }

  eleve_info() {
    if (typeof this._adresse.appartement == "string" || typeof this._adresse.appartement == "number") {
      console.log(`Prénom : ${this._prenom}, âge : ${this._age}, adresse :  appartement n°${this._adresse.appartement}, ${this._adresse.rue} ${this._adresse.cp} ${this._adresse.ville}`);
    } else {
      console.log(`Prénom : ${this._prenom}, âge : ${this._age}, adresse :${this._adresse.rue} ${this._adresse.cp} ${this._adresse.ville}`);
    }

    if (this._languageEtudies.length > 0) {
      console.log(`Languages étudiés : ${this._languageEtudies.join(',')}.`);
    }
  }

  calc_moyenne(listeDeNotes) {
    let somme = 0;

    for (let note of listeDeNotes) {
      somme = somme + note;
    }
    this.moyenne = somme / listeDeNotes.length;
  }

  notes() {
    this.calc_moyenne(this._listeNotes);
    console.log(`Voici les notes ${this._listeNotes.join(",")} et la moyenne ${this.moyenne}`)
  }
}
interface interface_adresse {
  "rue": string,
  "cp": string | number,
  "ville": string,
  "appartement"?: string | number
}
namespace NS_Lang {
  export class Languages {
    listDeLanguages = ["HTML5", "CSS3/SCSS", "JS/TS", "MySQL", "PHP", "JAVA SE"];
    list(): Array<string> {
      return this.listDeLanguages;
    }
  }
}

let eleve1 = new Eleve("Xavier", 34, {
  "rue": "36 rue de la soif",
  "cp": 81600,
  "ville": "GAILLAC",
});
let eleve2 = new Eleve("Daria", 7, {
  "rue": "96 rue de la sec",
  "cp": 81700,
  "ville": "GALHAC",
});
let languageInfo = new NS_Lang.Languages;
eleve2.language = languageInfo.list();

eleve1.eleve_info();
eleve1.note = 5;
eleve1.note = 15;
eleve1.note = 15;
eleve1.note = 13;
eleve1.note = 19;
eleve1.notes();

eleve2.eleve_info();
eleve2.note = 5;
eleve2.note = 15;
eleve2.note = 18;
eleve2.note = 15;
eleve2.note = 19;
eleve2.notes();
