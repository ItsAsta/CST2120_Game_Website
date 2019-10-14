$(document).ready(function(){

    $("#registerForm").hide();
    
    $("#registerBtnForm").click(function () {
        $("#loginForm").hide();
        $("#registerForm").show();
    })
});