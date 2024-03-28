let out = document.getElementById("out")
ringTone = new Audio("ASAP.mp3")
ringTone1 = new Audio("Winner.mp3")
ringTone1 = new Audio("filtered-928FBE93-D046-4E4D-8F54-E1DD196E299E.mp3")
ringTone2 = new Audio("No cast me .mp3")
ringTone3 = new Audio("Looser.mp3")

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
        ringTone1.play()
        out.innerHTML = "B"
    }
    else if (input.value >= 50) {
        alert("C");
        ringTone2.play()
        out.innerHTML = "C"
    }
    else if (input.value >= 40) {
        alert("D");
        ringTone3.play()
        out.innerHTML = "D"
    }
    else {
        alert("F");
        ringTone3.play()
        out.innerHTML = "FAIL"
    }
}