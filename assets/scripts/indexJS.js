$(document).ready(function() {
    // An on click function that logs out by removing the cookie.
    $("#account-status").click(function () {
        document.cookie = "username=; expires=Thu, 01 Jan 2000 12:12:12 GMT; path=/;"
    });

    $("#clearData").click(function () {
        localStorage.clear();
        console.log("Cleared storage - Size: " + localStorage.length);
    });

    console.log("Index Ready")
});

function removeUser() {
    localStorage.removeItem(getUsernameCookie());
}

function addNotification(id, text, state) {
    const POSITIVE_ALERT_CLASS = "positive-alert";
    const NEGATIVE_ALERT_CLASS = "negative-alert";

    if (state) {
        $(id).text(text);
        $(id).removeClass(NEGATIVE_ALERT_CLASS);
        $(id).addClass(POSITIVE_ALERT_CLASS);
    } else {
        $(id).text(text);
        $(id).removeClass(POSITIVE_ALERT_CLASS);
        $(id).addClass(NEGATIVE_ALERT_CLASS);
    }
}

// A function to get the username cookie.
function getUsernameCookie() {
    // If the string "username=" is not there, we assume there isn't any cookie.
    if (document.cookie.indexOf("username=") < 0) {
        return null;
    }

    // Returns the cookie value by splitting the cookie string into an array, then getting the first index.
    return document.cookie.split("=")[1];
}

// A function to change the status of the navigation bar, whether we logged in or not.
function changeNav() {
    // Checks if the username cookie is there or not. Returns null if it isn't.
    if (getUsernameCookie() !== null) {
        // Change the "a" element text under the id "account-status"
        $("#account-status a").text("Logout");
        // Adds a new href attribute.
        $("#account-status a").attr("href", "login-register.php");
    } else {
        $("#account-status a").text("Login/Register");
        $("#account-status a").attr("href", "login-register.php");
    }
}