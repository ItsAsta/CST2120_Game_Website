$(document).ready(function () {
    // Hides the register form with the id register-form.
    $("#register-form").hide();

    // Slides down our login-form with the id login-form.
    $("#login-form").slideDown(300);

    // If the register link text is clicked, we'll execute a function.
    $("#register-link").on('click', function () {
        // Once the function is executed, execute slideUp function, then execute another function.
        $("#login-form").slideUp(300, function () {
            // The clearHtml() function is executed, followed by another slideDown function.
            clearHtml();
            $("#register-form").slideDown(300);
        });
    });

    // If the login link text is clicked, we'll execute a function.
    $("#login-link").on('click', function () {
        // Once the function is executed, execute slideUp function, then execute another function.
        $("#register-form").slideUp(300, function () {
            // The clearHtml() function is executed, followed by another slideDown function.
            clearHtml();
            $("#login-form").slideDown(300);
        })
    });

    //A function which is called to change the navigation bar from login/register to logout.
    changeNav();

    // An on click function that logs out by removing the cookie.
    $("#account-status").click(function () {
        document.cookie = "username=; expires=Thu, 01 Jan 2000 12:12:12 GMT; path=/;"
    });

    $("#clearData").click(function () {
        localStorage.clear();
        console.log("Cleared storage - Size: " + localStorage.length);
    });

    console.log("Login/Register Ready");
});

// Constant variables to store repetitive non-immutable text.
const LOGIN_ALERT = "#login-alert";
const REGISTER_ALERT = "#register-alert";

const POSITIVE_ALERT_CLASS = "positive-alert";
const NEGATIVE_ALERT_CLASS = "negative-alert";

function register() {
    // Stores the username and password entered by the user into variables.
    var username = document.getElementById("register-username").value.toLocaleLowerCase();
    var password = document.getElementById("register-password").value.toLocaleLowerCase();
    var confirmPassword = document.getElementById("register-confirm-password").value.toLocaleLowerCase();

    // A for loop to iterate the local storage.
    for (let i = 0; i < localStorage.length; i++) {
        // While iterating, we'll store the key in a variable to compare against.
        var key = localStorage.key(i);

        /* Compares the entered username with the username we got in the local storage,
           to check if the username is already taken.
        */
        if (username === JSON.parse(localStorage.getItem(key)).username) {
            $(REGISTER_ALERT).text("Username already taken!");
            $(REGISTER_ALERT).removeClass(POSITIVE_ALERT_CLASS);
            $(REGISTER_ALERT).addClass(NEGATIVE_ALERT_CLASS);
            return;
        }
    }

    /* Checks if username or password is less than 3 characters in length.
       If it returns true, we'll throw an error.
     */
    if (username.length < 3 || password.length < 3) {
        $(REGISTER_ALERT).text("Username or Password can't be less than 3 characters!");
        $(REGISTER_ALERT).removeClass(POSITIVE_ALERT_CLASS);
        $(REGISTER_ALERT).addClass(NEGATIVE_ALERT_CLASS);
        return;
    }

    // Make sure all the fields are not empty.
    if (!username || !password || !confirmPassword) {
        $(REGISTER_ALERT).text("One or more fields are empty!");
        $(REGISTER_ALERT).removeClass(POSITIVE_ALERT_CLASS);
        $(REGISTER_ALERT).addClass(NEGATIVE_ALERT_CLASS);
        return;
    }

    // Checks if the first and second password match each other for verification.
    if (password !== confirmPassword) {
        $(REGISTER_ALERT).text("Passwords are not matching!");
        $(REGISTER_ALERT).removeClass(POSITIVE_ALERT_CLASS);
        $(REGISTER_ALERT).addClass(NEGATIVE_ALERT_CLASS);
        return;
    }

    // If username field is not empty and both password match, then register the account.
    if (username && (password === confirmPassword)) {
        // Initiate a json object to store user information in a variable.
        var accountObj = {
            "username": "",
            "password": "",
            "gameDate": [],
            "gamePoints": []
        };

        // Store the json object of the user, with the username as a key into the localstorage.
        accountObj.username = username;
        accountObj.password = password;
        localStorage.setItem(username, JSON.stringify(accountObj));

        $(REGISTER_ALERT).text("User has been successfully created!");
        $(REGISTER_ALERT).removeClass(NEGATIVE_ALERT_CLASS);
        $(REGISTER_ALERT).addClass(POSITIVE_ALERT_CLASS);
    }
}

function login() {
    // Stores the username and password entered by the user into variables.
    var username = document.getElementById("login-username").value.toLocaleLowerCase();
    var password = document.getElementById("login-password").value.toLocaleLowerCase();

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storageUsername = JSON.parse(localStorage.getItem(key)).username;
        var storagePassword = JSON.parse(localStorage.getItem(key)).password;

        /* If the username matches the username we got store in our local storage, as well as the password,
           then we'll continue logging the user in, else we'll throw an error.
        */
        if (storageUsername === username && storagePassword === password) {
            $(LOGIN_ALERT).text("Logged in");
            document.cookie = "username=" + username + ";path=/";
            $(LOGIN_ALERT).removeClass(NEGATIVE_ALERT_CLASS);
            $(LOGIN_ALERT).addClass(POSITIVE_ALERT_CLASS);
            return;
        }
    }

    $(LOGIN_ALERT).text("Invalid Username or Password!");
    $(LOGIN_ALERT).removeClass(POSITIVE_ALERT_CLASS);
    $(LOGIN_ALERT).addClass(NEGATIVE_ALERT_CLASS);
}

// Cleans the form up when this function is called.
function clearHtml() {
    // removes all classes and text from our error, so that it isn't visible anymore.
    $(REGISTER_ALERT).removeClass(NEGATIVE_ALERT_CLASS);
    $(REGISTER_ALERT).removeClass(POSITIVE_ALERT_CLASS);
    $(REGISTER_ALERT).text("");

    $(LOGIN_ALERT).removeClass(POSITIVE_ALERT_CLASS);
    $(LOGIN_ALERT).removeClass(NEGATIVE_ALERT_CLASS);
    $(LOGIN_ALERT).text("");

    // Removes any text we got in our input element.
    $("input").val("");
}

// A function to get the username cookie.
function getUsernameCookie() {
    // If the word "username=" is not there, we assume there isn't any cookie.
    if (document.cookie.indexOf("username=") < 0) {
        return null;
    }

    // Returns the cookie value, by splitting the cookie string into an array, and getting the first index.
    return document.cookie.split("=")[1];
}

// A function to change the status of the navigation bar, whether we logged in or not.
function changeNav() {
    // Checks if the username cookie is there or not. Returns null if it isn't.
    if (getUsernameCookie() !== null) {
        // Change the "a" element text under the id "account-status"
        $("#account-status a").text("Logout");
        // Adds a new href attribute.
        $("#account-status a").attr("href", "index.php");
    } else {
        $("#account-status a").text("Login/Register");
        $("#account-status a").attr("href", "login-register.php");
    }
}

function addStorage() {

    console.log(localStorage.length);

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var obj = JSON.parse(localStorage.getItem(key));
        var date = new Date();

        obj.gameDate.push(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        obj.gamePoints.push(Math.floor(Math.random() * 100));

        var updatedObj = JSON.stringify(obj);
        localStorage.setItem(key, updatedObj);
    }
}