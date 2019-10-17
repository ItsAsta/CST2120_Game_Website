<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include_once('inc/scripts.inc.php');?>
    <title>User</title>
</head>
<body background="assets/resources/form-background.jpg">
<?php $currentPage = 'user'; ?>
<?php include_once('inc/nav-bar.inc.php');?>

<div class="form-container" id="sign-in-form">
    <form>
        <label style="font-weight: bold">SIGN-IN</label>
        <br>
        <input type="text" name="username" placeholder="Username" onfocus="placeholder = ''" onblur="placeholder = 'Username'" style="margin-top: 20px">
        <br>
        <input type="password" name="password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <button type="button">SIGN-IN</button>
        <br>
        <a>Not signed-up?</a>
        <br>
        <a id="sign-up-link" class="clickable-text">Click to sign-up</a>
    </form>
</div>

<div class="form-container" id="sign-up-form">
    <form>
        <label style="font-weight: bold">SIGN-UP</label>
        <br>
        <input type="text" name="username" placeholder="Username" onfocus="placeholder = ''" onblur="placeholder = 'Username'" style="margin-top: 20px">
        <br>
        <input type="password" name="password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <input type="password" name="confirm-password" placeholder="*********" onfocus="placeholder = ''" onblur="placeholder = '*********'">
        <br>
        <button type="button">SIGN-UP</button>
        <br>
        <a>Already signed-up?</a>
        <br>
        <a id="sign-in-link" class="clickable-text">Click to sign-in</a>
    </form>
</div>
</body>
</html>