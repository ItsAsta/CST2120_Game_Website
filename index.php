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
    <!--    <h1 style="text-align: center; padding-top: 30px; font-weight: bold">LOGO PLACE HOLDER</h1>-->
</div>
<?php
include_once('inc/phpfunc.php');
navigationOutput('Home');
?>
<div class="main-game-container">
    <div class="left-image-container">
        <div class="option-wrapper">
            <img id="user-rock" src="assets/resources/rock.png" alt="ROCK">
            <p>ROCK</p>
        </div>

        <div class="option-wrapper">
            <img id="user-paper" src="assets/resources/paper.png" alt="PAPER">
            <p>PAPER</p>
        </div>

        <div class="option-wrapper">
            <img id="user-scissor" src="assets/resources/scissor.png" alt="SCISSOR">
            <p>SCISSOR</p>
        </div>
        <div class="score-container">
            <p id="user-score" class="game-score">0</p>
            <label class="game-score-label">POINTS</label>
<!--            <hr>-->
            <span id="user-wins">WINS: 0</span>
            <span id="user-loss">LOSS: 0</span>
<!--            <hr>-->
        </div>
    </div>

    <div class="center-game-container">
<!--        <hr>-->
        <span id="draws">DRAWS: 0</span>
<!--        <hr>-->
        <button id="confirm-decision" class="confirm-decision-btn">CONFIRM DECISION!</button>
    </div>

    <!--  ROBOT SECTION  -->
    <div class="right-image-container">
        <div class="option-wrapper">
            <img class="robot-selection" id="robot-rock" src="assets/resources/rock.png" alt="ROCK">
        </div>

        <div class="option-wrapper">
            <img class="robot-selection" id="robot-paper" src="assets/resources/paper.png" alt="PAPER">
        </div>

        <div class="option-wrapper">
            <img class="robot-selection" id="robot-scissor" src="assets/resources/scissor.png" alt="SCISSOR">
        </div>
        <div class="score-container">
            <p id="robot-score" class="game-score">0</p>
            <label class="game-score-label">POINTS</label>
<!--            <hr>-->
            <span id="robot-wins">WINS: 0</span>
            <span id="robot-loss">LOSS: 0</span>
<!--            <hr>-->
        </div>
    </div>
</div>
<?php leftFooterOutput('Home') ?>
</body>
</html>