<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="assets/styles/datatables.css">
    <?php include_once('inc/scripts.inc.php'); ?>
    <title>Score History</title>
</head>
<body>
<?php
include_once('inc/phpfunc.php');
navigationOutput('Score History');
?>
<div class="scoreboard-container">
    <table class="table">
        <tbody>
        <tr>
            <th id="username">N/A</th>
        </tr>
        <tr>
            <th>TOTAL POINTS</th>
            <th>TOTAL WINS</th>
            <th>TOTAL LOST</th>
            <th>GAMES PLAYED</th>
        </tr>
        <tr>
            <td id="total-game-points">N/A</td>
            <td id="total-game-wins">N/A</td>
            <td id="total-game-loss">N/A</td>
            <td id="total-games-played">N/A</td>
        </tr>
        </tbody>
    </table>
    <table id="score-history-table" class="table center-table-contents display">
    </table>
</div>
<?php footerOutput('Score History') ?>
</body>
</html>