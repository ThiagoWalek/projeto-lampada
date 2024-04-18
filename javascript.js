var a = document.getElementById("luz");
var b = document.getElementsByClassName("botoes");
function acende() {
    a.style.backgroundColor = "yellow";
    a.style.boxShadow = "1px 1px 80px white"
    console.log("Acendeu!!!")
}
function apaga() {
    a.style.backgroundColor = "#191815";
    a.style.boxShadow = "0px 0px 0px white"
    console.log("Apagou!!!")
}