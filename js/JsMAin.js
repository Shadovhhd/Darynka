var Button = document.getElementById("submit");
var spinner = document.querySelector(".spinner");
var foto = document.querySelector(".darynka");
var FotoRandom = ["img/photo2.png", "img/photo3.png", "img/photo1.jpg","img/photo4.png","img/photo5.png"];
var i = 0;    
function myLoop () {           //  create a loop function
  setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    var rand = Math.floor(Math.random() * FotoRandom.length);
    foto.src = FotoRandom[rand];      
     i++;                     //  increment the counter
     if (i < 10) {            //  if the counter < 10, call the loop function
        myLoop(); 
                    //  ..  again which will trigger another 
     }else{
      foto.style.filter = " blur(0px)";
     }                        //  ..  setTimeout()
  }, 200)
}

function seeButton(){
  
}

document.querySelector("#submit").onclick = function () {

  Button.remove();
  spinner.style.display = "block";
  setTimeout(function () {
    spinner.style.display = "none";
    foto.style.display = "block";
    setTimeout(function () {
     myLoop();
     

    }, 200);
  }, 1500);

}