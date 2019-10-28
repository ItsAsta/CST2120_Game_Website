<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include('inc/scripts.inc.php'); ?>
    <title>Home</title>
</head>
<body>
<?php
include_once('inc/phpfunc.php');
navigationOutput('Home');
?>
<div id="game-login-background">
    <button onclick="document.location.href = 'login-register.php'" class="game-login-btn">LOGIN</button>
</div>
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
            <span id="user-wins">WINS: 0</span>
            <span id="user-loss">LOSSES: 0</span>
        </div>
    </div>

    <div class="center-game-container">
        <div class="left-out-of-five-container">
            <div id="user-rnd-1" class="circle"></div>
            <div id="user-rnd-2" class="circle"></div>
            <div id="user-rnd-3" class="circle"></div>
            <div id="user-rnd-4" class="circle"></div>
            <div id="user-rnd-5" class="circle"></div>
        </div>
        <div class="right-out-of-five-container">
            <div id="robot-rnd-1" class="circle"></div>
            <div id="robot-rnd-2" class="circle"></div>
            <div id="robot-rnd-3" class="circle"></div>
            <div id="robot-rnd-4" class="circle"></div>
            <div id="robot-rnd-5" class="circle"></div>
        </div>
        <span id="draws" style="margin-top: 114%">DRAWS: 0</span>
        <button id="confirm-decision" class="confirm-decision-btn">CONFIRM DECISION!</button>
    </div>

    <!--  ROBOT SECTION  -->
    <div class="right-image-container">
        <div class="option-wrapper">
            <img id="robot-rock" src="assets/resources/rock.png" alt="ROCK">
        </div>

        <div class="option-wrapper">
            <img id="robot-paper" src="assets/resources/paper.png" alt="PAPER">
        </div>

        <div class="option-wrapper">
            <img id="robot-scissor" src="assets/resources/scissor.png" alt="SCISSOR">
        </div>
        <div class="score-container">
            <p id="robot-score" class="game-score">0</p>
            <label class="game-score-label">POINTS</label>
            <span id="robot-wins">WINS: 0</span>
            <span id="robot-loss">LOSSES: 0</span>
        </div>
    </div>
</div>
<input type="text" placeholder="Username" id="username-input" style="margin-left: 25px">
<button onclick="removeUser()">REMOVE</button>
<?php footerOutput('Home') ?>
</body>
</html>