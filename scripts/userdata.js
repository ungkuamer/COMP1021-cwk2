function primeData() {
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", saveData, false);
}

function saveData() {
    var username = document.getElementById("floatingInput").value;
    var password = document.getElementById("floatingPassword").value;

    sessionStorage.setItem(username, password);
    displayData();

    username.value = "";
    password.value = "";
}

window.addEventListener("load", primeData, false);

