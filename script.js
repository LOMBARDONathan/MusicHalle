//aficher donner console

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)

    afficherInstruments(data)
    afficherconseils(data.promesses)
    afficherServices(data.services)

  })
//partie produits
function afficherInstruments(data) {
  data.produits.forEach(produit => {
    let nomInstrument = produit.nom
    let descInstrument = produit.description
    let imgInstrument = produit.imageurl
    console.log(imgInstrument)
    console.log(descInstrument)
    console.log(nomInstrument)

    document.getElementById("produits").innerHTML += 
      `
    <div class="flex">
        <div class="w-100">
        <img class="w-20 brd-radieux" src="${imgInstrument}" alt="">
        <h4>${nomInstrument}</h4>
        <p>${descInstrument}</p>
        <a href="">En savoir plus</a>
        </div>
    </div>
    `

  });
}
//partie conseils/ambiance et sélection électique
function afficherconseils(conseils) {
  // conseils c'est le tableau
  console.log(conseils)
// j'ai mis une position pour chercher la position [0,1,2] qui équivalent à la ligne ou se situe ce que l'on veut que le JavaScript cherche et prenne, et étant donné que le i ne fait pas partie de mon data.json j'ai du agir ainsi
  document.getElementById("conseils").innerHTML += ` 
  

<div class="flex space-between bg-brown w-100 txt-white">
  <div class="w-33 pdngdiv">
      <i class="ph ph-globe-hemisphere-west pdng"></i>
      <p>${conseils[0]}</p>
  </div>
  <div class="w-33">
      <i class="ph ph-handshake pdng"></i>
      <p>${conseils[1]}</p>
  </div>
  <div class="w-33">
      <i class="ph ph-hand-heart pdng"></i>
     <p>${conseils[2]}</p>
  </div>
      
</div>
>
`}

//partie service
function afficherServices(service) {
  // service c'est le tableau
  console.log(service)

  document.getElementById("services").innerHTML += `

<div class="flex space-between bg-service">
  <div class="">
      <i class="ph ph-guitar"></i>
      <p>${service[0].description}</p>
  </div>
  <div>
      <i class="ph ph-wrench"></i>
      <p>${service[1].description}</p>
  </div>
  <div>
      <i class="ph ph-hand-heart"></i>
     <p>${service[2].description}</p>
  </div>
      
</div>
`}
//partie témoignages
function afficherCommentaires(data) {
  data.temoignages.forEach(temoignages => {
    let nomTemoignages = temoignages.nom
    let prestTemoignages = temoignages.prestation
    let commTemoignages = temoignages.commentaire
    let noteTemoignages = temoignages.note
    console.log(noteTemoignages)
    console.log(nomTemoignages)
    console.log(prestTemoignages)
    console.log(commTemoignages)


    document.getElementById("temoignages").innerHTML +=
      `
    <div class="bg-hautfooter carte2">
         <h4>${nomTemoignages}</h4>
         <p>${prestTemoignages}</p>
         <p>${commTemoignages}</p>
    </div>
    <div>
         <i>${noteTemoignages}</i>
    </div>
    `



    //bonus étoile
    //let result;
    //if (note >= 5 ) {
    //result = "";
    //} else {
    //result = "";
    //}
    //return result;
  })
}