<?php
include_once('inc/phpFunc.php');
headerOutput('Login', array("assets/styles/stylesheet.css", "assets/styles/formStylesheet.css"));
navigationOutput('Login');
?>
    <body background="assets/resources/form-background.jpg">

    <!-- LOGIN FORM SECTION -->
    <div class="main-form-container" id="login-form">
        <form>
            <label style="font-weight: bold">LOGIN</label>
            <br>
            <div id="login-alert"></div>
            <input id="login-username" type="text" name="username" placeholder="Username" onfocus="placeholder = ''"
                   onblur="placeholder = 'Username'" style="margin-top: 20px">
            <br>
            <input id="login-password" type="password" name="password" placeholder="*********"
                   onfocus="placeholder = ''" onblur="placeholder = '*********'">
            <br>
            <button onclick="login()" type="button">LOGIN</button>
            <br>
            <a>Not registered?</a>
            <br>
            <a id="register-link" class="clickable-text">Click to register</a>
        </form>
    </div>

    <!-- REGISTER FORM SECTION -->
    <div class="main-form-container" id="register-form">
        <form>
            <label style="font-weight: bold">REGISTER</label>
            <br>
            <div id="register-alert"></div>
            <div class="left-form-container">
                <input id="register-first-name" type="text" name="first-name" placeholder="First name"
                       onfocus="placeholder = ''" onblur="placeholder = 'First name'" style="margin-top: 18px">
                <br>
                <input id="register-last-name" type="text" name="last-name" placeholder="Last name"
                       onfocus="placeholder = ''" onblur="placeholder = 'Last name'">
                <br>
                <input id="register-address" type="text" name="address" placeholder="Address"
                       onfocus="placeholder = ''" onblur="placeholder = 'Address'">
                <br>
                <input id="register-postcode" type="text" name="postcode" placeholder="Postcode"
                       onfocus="placeholder = ''" onblur="placeholder = 'Postcode'">
            </div>
            <div class="right-form-container">
                <br>
                <input id="register-username" type="text" name="username" placeholder="Username"
                       onfocus="placeholder = ''"
                       onblur="placeholder = 'Username'">
                <br>
                <input id="register-password" type="password" name="password" placeholder="*********"
                       onfocus="placeholder = ''" onblur="placeholder = '*********'">
                <br>
                <input id="register-confirm-password" type="password" name="confirm-password" placeholder="*********"
                       onfocus="placeholder = ''" onblur="placeholder = '*********'">
                <br>
                <input id="register-email" type="tel" name="email" required placeholder="Email"
                       onfocus="placeholder = ''" onblur="placeholder = 'Email'">
            </div>

            <br>
            <button onclick="register()" type="button">REGISTER</button>
            <br>
            <a>Already registered?</a>
            <br>
            <a id="login-link" class="clickable-text">Click to login</a>
        </form>
    </div>
<?php footerOutput('Login') ?>