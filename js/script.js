// slider init
$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto : true,
    mode : "fade"
  });
});


// parse images
var bxSlider = document.querySelector(".bxslider");

for(var i = 0; i < contenu.images.length; i++){
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.classList.add("picture");
  bxSlider.appendChild(li);
  li.appendChild(img);
  img.setAttribute("src", contenu.images[i]);
}

// présentation
var title = document.querySelector('.presentation h1');
var presentation = document.querySelector('.presentation p');

title.textContent = contenu.name;
presentation.textContent = contenu.description;

// plats :

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
    btnPlat.textContent = "Ajouter au panier";
    liBouton.appendChild(btnPlat);

}

// map google
google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
});

// gestion du panier


// dropdown panier :
$('.dropdown-toggle').dropdown();
