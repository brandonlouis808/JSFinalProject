const imgs = document.querySelectorAll('.gameImg');
console.log(imgs.length);

for(i=0; i < imgs.length; i++){
    var currentImg = imgs[i];
    currentImg.setAttribute('tabindex', '0');
    console.log(i);
}


function displayGame(game){
    var display = document.getElementById("gameDisplay");
    var displayText = document.getElementById("displayText");
    var imageUrl = game.src;
    display.style.backgroundImage = "url('" + imageUrl + " ')";
    displayText.innerHTML = game.alt;
}
function displayLeave(){
    var display = document.getElementById("gameDisplay");
    var displayText = document.getElementById("displayText");
    display.style.backgroundImage = "url('')";
    displayText.innerHTML = "Mouse over a game to see what game it is.";

}

