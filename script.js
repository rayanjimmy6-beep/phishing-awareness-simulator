function checkAnswer() {
    let score = 0;

    if(document.getElementById("c1").checked) score++;
    if(document.getElementById("c2").checked) score++;
    if(document.getElementById("c3").checked) score++;

    document.getElementById("result").innerHTML =
        "Score: " + score + "/3";
}
