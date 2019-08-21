class Meuble {
  private _dimension = {
    longueur: 0,
    largeur: 0,
    hauteur: 0
  };
  private _type = '';
  private _couleur = '';
  private _matiere = '';
  private _prix = 0;
  private _volume = 0;

  constructor(type) {
    this._type = type;
  }

  set couleur(couleurChoisie) {//ROUGE,JAUNE,VERT
    couleurChoisie = couleurChoisie.toLowerCase();

    if (couleurChoisie == 'rouge' || couleurChoisie == 'jaune' || couleurChoisie == 'vert') {
      this._couleur = couleurChoisie;
    } else {
      console.log(`Choisir entre rouge, jaune, vert`);
    }
  }

  set matiere(matiereChoisie) {//BOIS FER PLASTIQUE
    matiereChoisie = matiereChoisie.toLowerCase();

    if (matiereChoisie == 'bois' || matiereChoisie == 'fer' || matiereChoisie == 'plastique') {
      this._matiere = matiereChoisie;
    } else {
      console.log(`choisir entre bois, fer et plastique`);
    }
  }

  set prix(prixMeuble) {
    if (isNaN(prixMeuble)) {
      console.log(`entrez un nombre`);
    } else if (prixMeuble >= 0) {
      this._prix = Number(prixMeuble);
    } else {
      console.log(`entrez un nombre positif`);
    }
    // if (prixMeuble >= 0 && !isNaN(prixMeuble){//fonctionne aussi
    //   this._prix = prixMeuble;
    // }
  }

  set dimension(lesDimensions) {
    if (typeof lesDimensions !== 'objet') {
      console.log(`dimensionnez avec un objet js`);
    } else if (lesDimensions.longueur > 0 && lesDimensions.longueur <= 1000 && typeof lesDimensions.longueur == 'number') {
      console.log(`longueur entre 0 et 1000`);
    } else if (lesDimensions.largeur > 0 && lesDimensions.largeur <= 1000 && typeof lesDimensions.largeur == 'number') {
      console.log(`largeur entre 0 et 1000`);
    } else if (lesDimensions.hauteur > 0 && lesDimensions.hauteur <= 1000 && typeof lesDimensions.hauteur == 'number') {
      console.log(`hauteur entre 0 et 1000`);
    } else {
      this._dimension = lesDimensions;
    }
  }

  volume = () => {
    this._volume = laDimension.longueur * laDimension.largeur * laDimension.hauteur;
  }
}

}



}
let meuble1 = new Meuble('table');
meuble1.couleur = 'Vert';
meuble1.matiere = 'fER';
meuble1.prix = '100';
meuble1.dimension = {
  longueur: 120,
  largeur: 53,
  hauteur: 20
};

console.log(meuble1);
