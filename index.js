    for(let i=0;i<=6;i++){
        document.querySelectorAll("button")[i].addEventListener("click", function dru() {
            this.style.color="white";
           var butt=this.innerHTML;   
           sound(butt);   
           anime(butt);     
           });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    anime(event.key);
});
    
function sound(key) {
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();           
            break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;
        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "k":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;
        case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
        // default: alert("sheat! here we go again");
    }
}

function anime(sameKey) {
    var but = document.querySelector("."+sameKey);
    but.classList.add("pressed");

    setTimeout(function() {
        but.classList.remove("pressed"),100
    })

}
