function welcomeMessage() {
    alert("Benvenuto!");
}

function cambiaImmagine() {
    let immagine = document.getElementById("foto");
    let srcImmagine = immagine.getAttribute("src");
    if (srcImmagine == "immagini/piscina.jpg") {
        immagine.setAttribute("src", "immagini/polonord.jpg");
    } else {
        immagine.setAttribute("src", "immagini/piscina.jpg");
    }
}


function cambiaFont(a) {
    let paragrafi = document.getElementsByTagName(a);
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontFamily = "Arial";
        paragrafi[i].innerHTML += "<br /> <br />";
    }
}

function nascondi() {
    let tabella = document.getElementById("TabellaNomi");
    tabella.style.visibility = "hidden";
}

function scopri() {
    let tabella = document.getElementById("TabellaNomi");
    tabella.style.visibility = "visible";
}

function cambiaTesto() {
    let celle = document.querySelectorAll("td");
    for (let i = 0; i < celle.length; i++) {
        celle[i].innerText += "ni";
    }
}

function cambioSingolo() {
    let cella = document.querySelector("td");
    cella.align = "center";
}

function verificaCheck() {
    let checkBoxes= document.querySelectorAll("input.selection");
    for (let i = 0; i < checkBoxes.length; i++) {
        console.log(checkBoxes[i].checked)
    }
}