/*JS pour charger dynamiquement les images de la page accueil*/
var imagebaniere = document.getElementById('banniere')
var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');
var image4 = document.getElementById('img4');



fetch('http://localhost:3000/api/cameras')
.then( Response => {
    console.log(Response);
    return Response.json();
})
.then(Response =>{ 
imagebaniere.src = Response[3].imageUrl;
})


fetch('http://localhost:3000/api/cameras')
.then( Response => {
    console.log(Response);
    return Response.json();
})
.then(Response =>{ 
image1.src = Response[0].imageUrl;
})


fetch('http://localhost:3000/api/cameras')
.then( Response => {
    console.log(Response);
    return Response.json();
})
.then(Response =>{ 
image2.src = Response[1].imageUrl;
})

fetch('http://localhost:3000/api/cameras')
.then( Response => {
    console.log(Response);
    return Response.json();
})
.then(Response =>{ 
image3.src = Response[2].imageUrl;
})

fetch('http://localhost:3000/api/cameras')
.then( Response => {
    console.log(Response);
    return Response.json();
})
.then(Response =>{ 
image4.src = Response[4].imageUrl;
})


/*Test du js pour changer dynamiquement la page Produit*/

var idcam1 = "5be1ed3f1c9d44000030b061";
