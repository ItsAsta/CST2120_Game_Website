<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include('inc/scripts.inc.php'); ?>
    <!--    <script type="text/javascript" src="assets/scripts/phaser.js"></script>-->
    <script type="text/javascript" src="assets/scripts/game/game.js"></script>
    <title>Home</title>
</head>
<body>
<div class="banner-container">
    <h1 style="text-align: center; padding-top: 30px; font-weight: bold">LOGO PLACE HOLDER</h1>
</div>
<?php
include_once('inc/phpfunc.php');
navigationOutput('Home');
?>
<div class="main-game-container">
    <div class="left-image-container">
        <div class="option-wrapper">
            <img id="human-rock" src="assets/resources/rock.png">
            <p>ROCK</p>
        </div>

        <div class="option-wrapper">
            <img id="human-paper" src="assets/resources/paper.png">
            <p>PAPER</p>
        </div>

        <div class="option-wrapper">
            <img id="human-scissor" src="assets/resources/scissor.png">
            <p>SCISSOR</p>
        </div>
    </div>
    <div class="right-image-container">
        <img id="robot-rock" src="assets/resources/rock.png">
        <img id="robot-paper" src="assets/resources/paper.png">
        <img id="robot-scissor" src="assets/resources/scissor.png">
    </div>

    <button id="check-selection" style="margin-top: 25px">CHECK SELECTION</button>

</div>
<?php leftFooterOutput('Home') ?>
</body>
</html>