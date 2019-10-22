<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="assets/styles/login-register-stylesheet.css"
    <?php include_once('inc/scripts.inc.php');?>
    <title>Login/Register</title>
</head>
<body background="assets/resources/form-background.jpg">
<?php $currentPage = 'login-register'; ?>
<?php include_once('inc/nav-bar.inc.php');?>

<div class="form-container" id="login-form">
    <form>
        <label style="font-weight: bold">LOGIN</label>
        <br>
        <div id="login-alert"></div>
        <input id="login-username" type="text" name="username" placeholder="Username" onfocus="placeholder = ''" onblur="placeholder = 'Username'" style="margin-top: 20px">
        <br>
        <input id="login-password" type="password" name="password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <button onclick="login()" type="button">LOGIN</button>
        <br>
        <a>Not registered?</a>
        <br>
        <a id="register-link" class="clickable-text">Click to register</a>
    </form>
</div>

<div class="form-container" id="register-form">
    <form>
        <label style="font-weight: bold">REGISTER</label>
        <br>
        <div id="register-alert"></div>
        <input id="register-username" type="text" name="username" placeholder="Username" onfocus="placeholder = ''" onblur="placeholder = 'Username'" style="margin-top: 20px">
        <br>
        <input id="register-password" type="password" name="password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <input id="register-confirm-password" type="password" name="confirm-password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <button onclick="register()" type="button">REGISTER</button>
        <br>
        <a>Already registered?</a>
        <br>
        <a id="login-link" class="clickable-text">Click to login</a>
    </form>
</div>
<?php include_once('inc/footer.inc.php');?>
</body>
</html>