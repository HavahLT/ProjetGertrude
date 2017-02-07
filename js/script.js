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



// map google
/*
google.maps.event.addDomListener(window, "resize", function() {
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center);
});
*/


// dropdown panier :
$('.dropdown-toggle').dropdown();
