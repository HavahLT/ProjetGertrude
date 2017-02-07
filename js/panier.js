//gere affichage et rafraichissement du panier
//------------------------------------
function initPanier(){
console.log('initpanier');
  function addToCart(e){
    // appeler le parent de this :
    //console.log("looking this" + this.parentElement.parentElement.dataset.id);
    console.log('closest' , $(this).closest('.item').attr('data-id'));

    // appeler la fonction addSelected :
    console.log('avant : ' + JSON.stringify(contenu.carte));
    addSelected(this.parentElement.dataset.id)
    console.log('apres : ' + JSON.stringify(contenu.carte));

  }
  $('.courses').on("click", addToCart);
}
