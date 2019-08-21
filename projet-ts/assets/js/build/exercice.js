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
var Eleve = /** @class */ (function () {
    function Eleve(prenom, age, adresse) {
        this._prenom = "";
        this._age = 0;
        this._adresse = {
            "rue": "",
            "cp": "",
            "ville": "",
            "appartement": ""
        };
        this._listeNotes = [];
        this._moyenne = 0;
        this._languageEtudies = [];
        this.prenom = prenom;
        this.age = age;
        this.adresse = adresse;
    }
    Object.defineProperty(Eleve.prototype, "prenom", {
        set: function (sonPrenom) {
            this._prenom = sonPrenom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "age", {
        set: function (sonAge) {
            this._age = sonAge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "adresse", {
        set: function (sonAdresse) {
            this._adresse = sonAdresse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "note", {
        set: function (saNote) {
            if (saNote >= 0 && saNote <= 20) {
                this._listeNotes.push(saNote);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "moyenne", {
        get: function () {
            return this._moyenne;
        },
        set: function (saMoyenne) {
            this._moyenne = Number(saMoyenne.toFixed(2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "languageEtudies", {
        get: function () {
            return this._languageEtudies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "language", {
        set: function (listLanguage) {
            for (var _i = 0, listLanguage_1 = listLanguage; _i < listLanguage_1.length; _i++) {
                var nomLanguage = listLanguage_1[_i];
                this._languageEtudies.push(nomLanguage);
            }
        },
        enumerable: true,
        configurable: true
    });
    Eleve.prototype.eleve_info = function () {
        if (typeof this._adresse.appartement == "string" || typeof this._adresse.appartement == "number") {
            console.log("Pr\u00E9nom : " + this._prenom + ", \u00E2ge : " + this._age + ", adresse :  appartement n\u00B0" + this._adresse.appartement + ", " + this._adresse.rue + " " + this._adresse.cp + " " + this._adresse.ville);
        }
        else {
            console.log("Pr\u00E9nom : " + this._prenom + ", \u00E2ge : " + this._age + ", adresse :" + this._adresse.rue + " " + this._adresse.cp + " " + this._adresse.ville);
        }
        if (this._languageEtudies.length > 0) {
            console.log("Languages \u00E9tudi\u00E9s : " + this._languageEtudies.join(',') + ".");
        }
    };
    Eleve.prototype.calc_moyenne = function (listeDeNotes) {
        var somme = 0;
        for (var _i = 0, listeDeNotes_1 = listeDeNotes; _i < listeDeNotes_1.length; _i++) {
            var note = listeDeNotes_1[_i];
            somme = somme + note;
        }
        this.moyenne = somme / listeDeNotes.length;
    };
    Eleve.prototype.notes = function () {
        this.calc_moyenne(this._listeNotes);
        console.log("Voici les notes " + this._listeNotes.join(",") + " et la moyenne " + this.moyenne);
    };
    return Eleve;
}());
var NS_Lang;
(function (NS_Lang) {
    var Languages = /** @class */ (function () {
        function Languages() {
            this.listDeLanguages = ["HTML5", "CSS3/SCSS", "JS/TS", "MySQL", "PHP", "JAVA SE"];
        }
        Languages.prototype.list = function () {
            return this.listDeLanguages;
        };
        return Languages;
    }());
    NS_Lang.Languages = Languages;
})(NS_Lang || (NS_Lang = {}));
var eleve1 = new Eleve("Xavier", 34, {
    "rue": "36 rue de la soif",
    "cp": 81600,
    "ville": "GAILLAC",
});
var eleve2 = new Eleve("Daria", 7, {
    "rue": "96 rue de la sec",
    "cp": 81700,
    "ville": "GALHAC",
});
var languageInfo = new NS_Lang.Languages;
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
