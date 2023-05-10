function primeData() {
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", saveData, false);
    displayData();
}

function saveData() {
    var username = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;

    sessionStorage.setItem(username, password);
    displayData();

    username.value = "";
    password.value = "";
}

function displayData() {
    var toDisplay = document.getElementById("display-data");
    toDisplay.innerHTML = "";
    for(var i = 0; i < sessionStorage.length; i++) {
        var tempKey = sessionStorage.key(0);
        var finalKey = sessionStorage.getItem(tempKey);
        toDisplay.innerHTML = "Hi, " +tempKey;
    }
}

function clearData() {
    sessionStorage.clear();
    location.reload();
}

window.addEventListener("load", primeData, false);

