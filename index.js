/*JS pour charger dynamiquement les images, les titres et les prix des produits de la page accueil*/



   // Récupere les donné de l'API fournit via la fonction fetch
 
    fetch('http://localhost:3000/api/cameras')
    .then(Response => { 
        return Response.json()
    })
    .then(Response => { 
        const mainImage = document.getElementById('banniere');
        mainImage.src = Response[1].imageUrl;
    // crée nos articles et leurs contenue en js via la fonction suivante

        function creatDivContent(title,price,urlimage){ 
            const divMain = document.querySelector('#les-pdt');
            divMain.innerHTML += `<article class="arti2">
            <img src=${urlimage} alt="camera2" id="img2">
            <div class="descri2">
               <p id="titre-cam2">${title}</p>
               <a href="product.html">
               <div class="div-voir"><p>Voir le produit</p></div>
               </a>
               <div class="div-prix2">${price}€</div>
           </div>
         </article>`
        };

    // Boucle qui va répeter la création de nos article en s'executant 5 fois 
        for (i=0; i < Response.length; i++){ 
            creatDivContent(Response[i].name,Response[i].price,Response[i].imageUrl);

        }


    })
 
    /*Le js pour charger les page produit de manière dynamique via le JS*/


    




































