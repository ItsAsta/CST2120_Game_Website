<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include_once('inc/scripts.inc.php'); ?>
    <title>Score History</title>
</head>
<body>
<?php $currentPage = 'score-history'; ?>
<?php include_once('inc/nav-bar.inc.php'); ?>
<div class="scoreboard-container">
    <table class="table">
        <tbody>
        <tr>
            <th id="username">N/A</th>
        </tr>
        <tr>
            <th>RANK</th>
            <th>GAMES PLAYED</th>
            <th>TOTAL POINTS</th>
        </tr>
        <tr>
            <td>N/A</td>
            <td id="total-games-played">N/A</td>
            <td id="total-game-points">N/A</td>
        </tr>
        </tbody>
    </table>
    <table class="table center-table-contents">
        <tbody>
        <tr>
            <th>History</th>
        </tr>
        <tr id="history-table-header">
            <th>POINTS</th>
            <th>TIME | DATE</th>
            <th>GAME NO.</th>
        </tr>
        </tbody>
    </table>
</div>
<button style="margin: auto; display: block" onclick="addStorage()">ADD TO TABLE</button>
<button style="margin: auto; display: block" id="clearData">CLEAR STORAGE</button>
<?php include_once('inc/footer.inc.php'); ?>
</body>
</html>