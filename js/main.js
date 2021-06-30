var arr = Array("سبحان الله", "الحمد لله", "لا إله الا الله", "الله أكبر");
var index = 0;
document.getElementById("buttonText").innerText = arr[index];

function increasCounter() {
    index = (index + 1) % 4;
    document.getElementById("buttonText").innerText = arr[index];
    switch (index) {
        case 1:
            document.getElementById("outterCircle").style = "clip-path: polygon(50% 0%, 100% 0, 100% 50%, 100% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 0);";
            break;
        case 2:
            document.getElementById("outterCircle").style = "clip-path: polygon(50% 0%, 100% 0, 100% 50%, 100% 100%, 50% 100%, 49% 100%, 49% 50%, 50% 0);";
            break;
        case 3:
            document.getElementById("outterCircle").style = "clip-path: polygon(50% 0%, 100% 0, 100% 49%, 100% 100%, 50% 100%, 0 100%, 0 52%, 50% 50%);";
            break;
        case 0:
            document.getElementById("outterCircle").style = "clip-path: polygon(50% 30%, 68% 30%, 60% 47%, 60% 59%, 43% 63%, 49% 69%, 49% 50%, 45% 39%);";
            counter = document.getElementById("counter").innerText;
            counter++;
            document.getElementById("counter").innerText = counter;
            vibreate(70);
            break;
    }
}

function vibreate(ms) {
    navigator.vibrate(ms);
}