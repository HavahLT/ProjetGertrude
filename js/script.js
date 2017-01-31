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
    },
    {
      id: 4,
      name: 'Tourte au c*c*',
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

//

//var carte = document.querySelector('.carte');
var carteListe = document.querySelector('.carte-liste li');

for(var j = 0; j < contenu.carte.length; j++ ){

    var carteTitre = document.createElement('h2');   carteTitre.classList.add('nom-plat');
    carteListe.appendChild(carteTitre);
    carteTitre.textContent = contenu.carte[j].name;

    var carteImage = document.createElement('img');
    carteImage.classList.add('img-food');
    carteImage.setAttribute("src", contenu.carte[j].image);
    carteListe.appendChild(carteImage);

    var carteDescr = document.createElement('p');
    carteDescr.classList.add('food-description');
    carteListe.appendChild(carteDescr);
    carteDescr.textContent = contenu.carte[j].description;

    var cartePrix = document.createElement('p');
    cartePrix.classList.add('food-price');
    carteListe.appendChild(cartePrix);
    cartePrix.textContent = contenu.carte[j].price;

}

google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
});
