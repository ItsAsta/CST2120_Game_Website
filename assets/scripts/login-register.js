$(document).ready(function () {
    // Hides the register form with the id register-form.
    $("#register-form").hide();

    // Slides down our login-form with the id login-form.
    $("#login-form").slideDown(300);

    // If the register link text is clicked, we'll execute a function.
    $("#register-link").on('click', function () {
        // Once the function is executed, execute slideUp function, then execute another function.
        $("#login-form").slideUp(300, function () {
            // The clearNotif() function is executed, followed by another slideDown function.
            clearNotif();
            $("#register-form").slideDown(300);
        });
    });

    // If the login link text is clicked, we'll execute a function.
    $("#login-link").on('click', function () {
        // Once the function is executed, execute slideUp function, then execute another function.
        $("#register-form").slideUp(300, function () {
            // The clearNotif() function is executed, followed by another slideDown function.
            clearNotif();
            $("#login-form").slideDown(300);
        })
    });

    console.log("Login/Register Ready");
});

// Constant letiables to store repetitive non-immutable text.
const LOGIN_ALERT = "#login-alert";
const REGISTER_ALERT = "#register-alert";


function register() {
    // Stores the username and password entered by the user into letiables.
    let username = document.getElementById("register-username").value.toLocaleLowerCase();
    let password = document.getElementById("register-password").value.toLocaleLowerCase();
    let confirmPassword = document.getElementById("register-confirm-password").value.toLocaleLowerCase();

    // A for loop to iterate the local storage.
    for (let i = 0; i < localStorage.length; i++) {
        // While iterating, we'll store the key in a letiable to compare against.
        let key = localStorage.key(i);

        /* Compares the entered username with the username we got in the local storage,
           to check if the username is already taken.
        */
        if (username === JSON.parse(localStorage.getItem(key)).username) {
            addNotification(register(), "Username already taken!", false);
            return;
        }
    }

    /* Checks if username or password is less than 3 characters in length.
       If it returns true, we'll throw an error.
     */
    if (username.length < 3 || password.length < 3) {
        addNotification(REGISTER_ALERT, "Username or Password can't be less than 3 characters!", false);
        return;
    }

    // Make sure all the fields are not empty.
    if (!username || !password || !confirmPassword) {
        addNotification(REGISTER_ALERT, "One or more fields are empty!", false);
        return;
    }

    // Checks if the first and second password match each other for verification.
    if (password !== confirmPassword) {
        addNotification(REGISTER_ALERT, "Passwords are not matching!", false);
        return;
    }

    // If username field is not empty and both password match, then register the account.
    if (username && (password === confirmPassword)) {
        // Initiate a json object to store user information in a letiable.
        let accountObj = {
            "username": "",
            "password": "",
            "gameDate": [],
            "gamePoints": [],
            "gameOutcome": []
        };

        // Store the json object of the user, with the username as a key into the localstorage.
        accountObj.username = username;
        accountObj.password = password;
        localStorage.setItem(username, JSON.stringify(accountObj));

        addNotification(REGISTER_ALERT, "User has been successfully created!", true);
    }
}

function login() {
    // Stores the username and password entered by the user into letiables.
    let username = document.getElementById("login-username").value.toLocaleLowerCase();
    let password = document.getElementById("login-password").value.toLocaleLowerCase();

    if (!username || !password) {
        addNotification(LOGIN_ALERT, "Username or Password field is empty!", false);
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let storageUsername = JSON.parse(localStorage.getItem(key)).username;
        let storagePassword = JSON.parse(localStorage.getItem(key)).password;

        /* If the username matches the username we got store in our local storage, as well as the password,
           then we'll continue logging the user in, else we'll throw an error.
        */
        if (storageUsername === username && storagePassword === password) {
            document.cookie = "username=" + username + ";path=/";
            document.location.replace("index.php");
            return;
        }
    }

    addNotification(LOGIN_ALERT, "Invalid Username or Password!", false);
}

// Cleans the form up when this function is called.
function clearNotif() {
    // removes all classes and text from our error, so that it isn't visible anymore.
    $(REGISTER_ALERT).removeClass("negative-alert");
    $(REGISTER_ALERT).removeClass("positive-alert");
    $(REGISTER_ALERT).text("");

    $(LOGIN_ALERT).removeClass("positive-alert");
    $(LOGIN_ALERT).removeClass("negative-alert");
    $(LOGIN_ALERT).text("");

    // Removes any text we got in our input element.
    $("input").val("");
}

function addStorage() {

}