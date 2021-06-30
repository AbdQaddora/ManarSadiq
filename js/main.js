var arr = Array("سبحان الله" , "الحمد لله" , "لا إله الا الله" , "الله أكبر");
var index = 0;
document.getElementById("buttonText").innerText = arr[index];
function increasCounter() {
    counter = document.getElementById("counter").innerText;
    counter++;
    vibreate(70);
    index = (index + 1) % 4;
    document.getElementById("buttonText").innerText = arr[index];
    document.getElementById("counter").innerText = counter;
}

function vibreate(ms) {
    navigator.vibrate(ms);
}