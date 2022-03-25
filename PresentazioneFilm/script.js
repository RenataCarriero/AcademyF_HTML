function change() {

    let inputs = document.querySelectorAll("input[type='text']")
    let buttonsSubscription = document.querySelectorAll("input[type='submit']")

    buttonsSubscription[0].disabled = ""

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            buttonsSubscription[0].disabled = "disabled"
            break;
        }
    }
}

function subscribe() {
    let buttons = document.querySelectorAll("input[type='submit']")
    let nome = document.querySelector("input[type='text']").value
    localStorage.setItem("nome", nome);
    buttons[1].disabled = "";
}


function unsubscribe() {
    let buttons = document.querySelectorAll("input[type='submit']")
    window[localStorage]
    localStorage.clear();
    buttons[1].disabled = "disabled";
    let nome = document.querySelector("input[type='text']")
    nome.style.display = ""
}

function checkSubscription(IsHome) {
    let buttons = document.querySelectorAll("input[type='submit']")

    if (IsHome == true && localStorage.getItem("nome") !== null) {
        alert("Benvenuto/a " + localStorage.getItem("nome"))
        return false;
    }

    if (IsHome == false && localStorage.getItem("nome") !== null) {
        let nome = document.querySelector("input[type='text']")
        nome.style.display = "none"
        buttons[0].disabled = "disabled";
        buttons[1].disabled = "";
        return false;
    }
    else {
        buttons[0].disabled = "disabled";
    }
}