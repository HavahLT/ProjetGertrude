var resultatsPlats = document.querySelector('.resultats-plats');

for(var j = 0; j < contenu.carte.length; j++ ){

    // creation du ul dans lequel va s'insérer les li :
    var divPlats = document.querySelector('.resultats-plats');
    var createListe = document.createElement('ul');
    createListe.classList.add('plat-liste');
    divPlats.appendChild(createListe);;

    // creation de l'image du plat
    var carteImage = document.createElement('img');
    carteImage.classList.add('img-food');
    carteImage.classList.add('center-block');
    carteImage.setAttribute("src", contenu.carte[j].image);
    createListe.appendChild(carteImage);

    // creation du li pour : titre, img, description, prix, bouton
    var liTitre = document.createElement('li');
    createListe.appendChild(liTitre);
    var liDesc = document.createElement('li');
    createListe.appendChild(liDesc);
    var liPrix = document.createElement('li');
    createListe.appendChild(liPrix);
    var liBouton = document.createElement('li');
    liBouton.classList.add('courses');
    createListe.appendChild(liBouton);

    // creation du titre du plat
    var carteTitre = document.createElement('h2');   carteTitre.classList.add('nom-plat');
    carteTitre.textContent = contenu.carte[j].name;
    liTitre.appendChild(carteTitre);

    // creation de la description du plat
    var carteDescr = document.createElement('p');
    carteDescr.classList.add('food-description');
    carteDescr.textContent = contenu.carte[j].description;
    liDesc.appendChild(carteDescr);

    // creation du prix du plat
    var cartePrix = document.createElement('p');
    cartePrix.classList.add('food-price');
    cartePrix.textContent = contenu.carte[j].price;
    liPrix.appendChild(cartePrix);

    // creation du bouton ajouter au panier
    var btnPlat = document.createElement('button');
    btnPlat.classList.add('bouton-plat');
    btnPlat.classList.add('center-block');
    btnPlat.textContent = "Ajouter au panier";
    liBouton.appendChild(btnPlat);

}
// on execute cette fonction qui n'existe pas encore mais qui est présente dans panier.js
initPanier();
