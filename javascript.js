var a = document.getElementById("luz");
var b = document.getElementsByClassName("botoes");
function acende() {
    a.style.backgroundColor = "yellow";
    a.style.boxShadow = "1px 1px 80px white"
    console.log("Acendeu!!!")
    var sound = new Audio();
    sound.src = "mouse-sound.mp3";
    sound.play();
}
function apaga() {
    a.style.backgroundColor = "#191815";
    a.style.boxShadow = "0px 0px 0px white";
    console.log("Apagou!!!");
    var sound = new Audio();
    sound.src = "mouse-sound.mp3";
    sound.play();
}