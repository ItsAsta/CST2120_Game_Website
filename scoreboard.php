<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="assets/styles/datatables.css">
    <?php include_once('inc/scripts.inc.php'); ?>
    <title>Scoreboard</title>
</head>
<body>
<?php $currentPage = 'scoreboard'; ?>
<?php include_once('inc/nav-bar.inc.php'); ?>

<div class="scoreboard-container">
    <table class="table">
        <tbody>
        <tr>
            <th id="username">N/A</th>
        </tr>
        <tr>
            <th>TOTAL POINTS</th>
            <th>GAMES PLAYED</th>
        </tr>
        <tr>
            <td id="total-game-points">N/A</td>
            <td id="total-games-played">N/A</td>
        </tr>
        </tbody>
    </table>
    <table id="global-scoreboard-table" class="table center-table-contents display">
    </table>
</div>

<?php include_once('inc/footer.inc.php'); ?>
</body>
</html>