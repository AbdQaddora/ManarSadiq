function increasCounter() {
    counter = document.getElementById("counter").innerText;
    counter++;
    vibreate(100);
    document.getElementById("counter").innerText = counter;
}

function vibreate(ms) {
    navigator.vibrate(ms);
}