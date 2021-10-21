//let time = 5000,
currentImageIndex = 0,
images = document.querySelectorAll("div#slider img")
max = images.length;
var msg = document.querySelector("div#imgtexto")
var subt = document.querySelector("div#texto2")
  function nextimage() {
       images[currentImageIndex].classList.remove("selected")
       currentImageIndex++
       if(currentImageIndex >= max)
       currentImageIndex = 0
       msg.innerHTML= `O Console mais potente da Historiá!`
       subt.innerHTML = `O Xbox Series x é o console mais potente até o Momento.`
       var Mortalt = document.querySelector("divtextoimg2")
       if(currentImageIndex == 0) {
        msg.innerHTML= `O Console mais potente da Historiá!`
        subt.innerHTML = `O Xbox Series x é o console mais potente até o Momento.`
        var add = window.document.querySelector("div#gamesadd").style.display= 'none'
        var add2 = window.document.querySelector("div#gamesadd2").style.display= 'none'
       }else if(currentImageIndex == 1) {
         msg.innerHTML= ''
         subt.innerHTML= ''
         var Mortalt = window.document.querySelector("div#textoimg2").style.display= 'block'
         var subMortal = window.document.querySelector("div#subMortal").style.display= 'block'
       }else if(currentImageIndex == 2) {
        msg.innerHTML= ''
        subt.innerHTML= ''
        var Mortalt = window.document.querySelector("div#textoimg2").style.display= 'none'
        var subMortal = window.document.querySelector("div#subMortal").style.display= 'none'
        var ninten = window.document.querySelector("div#nitentext").style.display= 'block'
       }else if(currentImageIndex == 3) {
        msg.innerHTML= ''
        subt.innerHTML= ''
        var ninten = window.document.querySelector("div#nitentext").style.display= 'none'
        var add = window.document.querySelector("div#gamesadd").style.display= 'block'
        var add2 = window.document.querySelector("div#gamesadd2").style.display= 'block'
       }
      images[currentImageIndex].classList.add("selected")
  } 

function start() {
    setInterval(() => {
        nextimage()
    }, time);
}

document.addEventListener("load", start())

function opensidemenu() {
  document.getElementById("side-menu").style.width = '250px';
}
function closesidemenu() {
  document.getElementById("side-menu").style.width = '0';
}