let out = document.getElementById("out")
ringTone = new Audio("for-when-it-rains-112785.mp3")

function check() {
    if (input.value == '') {
        alert("Input your score")
    }
    else if (input.value >= 70) {
        alert("A");
        ringTone.play()
        out.innerHTML =  "A"
    }
    else if (input.value >= 60) {
        alert("B");
        ringTone.play()
        out.innerHTML = "B"
    }
    else if (input.value >= 50) {
        alert("C");
        ringTone.play()
        out.innerHTML = "C"
    }
    else if (input.value >= 40) {
        alert("D");
        ringTone.play()
        out.innerHTML = "D"
    }
    else {
        alert("F");
        ringTone.play()
        out.innerHTML = "FAIL"
    }
}