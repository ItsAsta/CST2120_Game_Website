<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include_once('inc/scripts.inc.php');?>
    <title>Home</title>
</head>
<body>
<?php $currentPage = 'index'; ?>
<?php include_once('inc/nav-bar.inc.php');?>
<script>
    if (getUsernameCookie() !== "") {
        console.log("Broooo yooo " + getUsernameCookie())
    }
</script>
<?php include_once('inc/footer.inc.php');?>
</body>
</html>