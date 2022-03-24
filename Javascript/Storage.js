function getStorage() {
    /*let storageName = "";*/
    //if (document.getElementById("local").checked == true) {
    //    storageName = "localStorage";
    //} else {
    //    storageName = "sessionStorage";
    //}
    let storageName = (document.getElementById("local").checked == true) ? "localStorage" : "sessionStorage";

    if (storageName in window && window[storageName] != null) {
        return window[storageName];
    } else {
        return null;
    }
    
}

function save() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    storage.setItem(key, value);
}


function readAll() {
    let storage = getStorage();
    let elements = "";
    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        let value = storage.getItem(key);
        let item = "chiave: " + key + " valore: " + value + " \n";
        elements += item;
    }
    alert(elements);
}

function deleteAll() {
    let storage = getStorage();
    storage.clear();
}

function remove() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    storage.removeItem(key);
    document.getElementById("result").innerHTML = "Eliminato item con chiave " + key;
}

function getElemento() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value= storage.getItem(key);
    document.getElementById("result").innerHTML = "Il valore con chiave " + key + " è " + value;
}