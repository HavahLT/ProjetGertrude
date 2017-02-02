var contenu = {
  name: 'La bonne bouffe',
  description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',
  images: [
    'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
    'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
    'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
    'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg'
  ],
  baseline: 'La promo7 vous régale',
  addresse: '51, rue de Vincennes',
  codePostale: '93100',
  ville: 'Montreuil',
  carte: [
    {
      id: 1,
      name: 'Poulet aux morilles',
      image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
      description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
      price: '23 €'
    },
    {
      id: 2,
      name: 'Tagine aux pruneaux',
      image:'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
      description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
      price: '18 €'
    },
    {
      id: 3,
      name: 'Salade de saison',
      image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
      description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
      price: '14 €'
    }
  ]

}
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

    // creation du li pour : titre, img, description, prix, bouton
    var liTitre = document.createElement('li');
    createListe.appendChild(liTitre);
    var liDesc = document.createElement('li');
    createListe.appendChild(liDesc);
    var liImg = document.createElement('li');
    createListe.appendChild(liImg);
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

    // creation de l'image du plat
    var carteImage = document.createElement('img');
    carteImage.classList.add('img-food');
    carteImage.setAttribute("src", contenu.carte[j].image);
    liImg.appendChild(carteImage);

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
/*

google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
});

*/

// gestion du panier
