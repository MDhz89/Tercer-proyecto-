
let excusas = [
    "Oh my goodness, you will not believe me, but...",
    "I can't believe this, but...",
    "This might sound crazy, but...",
    "You're not going to believe what happened, but...",
    "I have to tell you something unbelievable, but..."
];
 let excusaelegida=excusas[
    Math.floor(Math.random() * excusas.length) + 1
];

const elementoEscogido= document.getElementById("excusa");

document,addEventListener("DOMContentLoaded", function(){
    
    elementoEscogido.textContent=excusaelegida;
});
   
    