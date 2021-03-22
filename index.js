function login() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (email && password != "") {
        if (email.includes("@gmail.com") && email.length > 10 && !email.includes(" ") && password == "12345678") {
            window.open("home.html");
        } else if (password.length != "12345678") {
            alert("Wrong password");
        } else if (!email.includes("@gmail.com") && email.length <= 10 || !email.includes(" ")) {
            alert("Invalid email.");
        } else {
            alert("Unknown error!");
        }
    } else if (email == "") {
        alert("Kindly provide email address");
    } else if (password == "") {
        alert("Kinly provide your password.")
    } else {
        alert("Unknown error");
    }
}

function create() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let repeat_password = document.querySelector("#repeat_password").value;

    if (email && password && repeat_password != "") {
        if (email.includes("@gmail.com") && email.length > 11 && password === repeat_password && password.length >= 8) {
            alert("Account created successfully!");
            window.open("home.html");
        } else if (!email.includes("@gmail.com")) {
            alert("Invalid email address!");
        } else if (password.length < 8) {
            alert("Password should be 8 or more characters");
        } else if (password != repeat_password) {
            alert("Passwords does not match");
        } else {
            alert("Unknown error!")
        }
    } else if (email || password || repeat_password == "") {
        alert("Provide all the required details")
    } else {
        alert("Unknown error!");
    }
}