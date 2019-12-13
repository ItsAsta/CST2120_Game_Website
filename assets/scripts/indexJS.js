$(document).ready(function () {
    // An on click function that logs out by removing the cookie if the element specified is clicked.
    $("#account-status").click(function () {
        document.cookie = "username=; expires=Thu, 01 Jan 2000 12:12:12 GMT; path=/;"
    });

    console.log("Index Ready")
});

//This function is used to show certain notifications to the user during registering/login.
//It takes 3 parameters. The id of the element in choice, the text you want to display and whether it's a positive or negative error.
function addNotification(id, text, state) {
    const POSITIVE_ALERT_CLASS = "positive-alert";
    const NEGATIVE_ALERT_CLASS = "negative-alert";

    //Display the text we want to display in the element id we passed.
    $(id).text(text);

    //If the state is positive, we'll add a positive notification.
    if (state) {
        //Makes sure to remove any negative alert css classes that we have previously set.
        $(id).removeClass(NEGATIVE_ALERT_CLASS);
        //Adds a positive css class.
        $(id).addClass(POSITIVE_ALERT_CLASS);
    } else {
        $(id).removeClass(POSITIVE_ALERT_CLASS);
        $(id).addClass(NEGATIVE_ALERT_CLASS);
    }
}

// A function to get the username cookie.
function getUsernameCookie() {
    // If the string "username=" is not there, we assume there isn't any cookie, therefore return a null.
    if (document.cookie.indexOf("username=") === -1) {
        return null;
    }

    // Returns the cookie value by splitting the cookie string into an array, then getting the first index, which is the username
    return document.cookie.split("=")[1];
}