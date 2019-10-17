$(document).ready(function() {
    $("#sign-up-form").hide();
    $("#sign-in-form").slideDown(1000);

    $("#sign-up-link").on('click', function () {
        $("#sign-in-form").slideUp(1000, function () {
            $("#sign-up-form").slideDown(1000);
        });

    });

    $("#sign-in-link").on('click', function () {
        $("#sign-up-form").slideUp(1000, function () {
            $("#sign-in-form").slideDown(1000);
        })

    });

    console.log("Ready")
});