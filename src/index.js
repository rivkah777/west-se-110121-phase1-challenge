fetch ("http://localhost:3000/images/1")
.then((response) => response.json())
.then ((flataData) => flataGram(flataData));
   

function flataGram(card){
    const name = document.querySelector("#card-title");
   name.textContent = card.name;
    const image = document.querySelector("#card-image");
    image.src = card.image;
}   
