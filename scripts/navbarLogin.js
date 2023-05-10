function statusDisplay() {
    if (sessionStorage.length>0) {
        var username = sessionStorage.key(0);
        var toWrite = "<button type='button' class='btn btn-link' id='undecorated-link-bold'>"+"Hello, "+username+"!"+"</button>";
        toWrite += `
        <button type="button" class="btn btn-outline-dark" onclick="clearData()">Logout</button>
        `;
    } else {
        var toWrite = `
        <button type="button" onclick="location.href='joinus.html';" class="btn btn-dark">Join Us</button>
        <button type="button" onclick="location.href='signin.html';" class="btn btn-link" id="undecorated-link">Login</button>
        `;
    }

    userState.innerHTML = toWrite;
}

var userState = document.getElementById("user-login-state");
statusDisplay();

