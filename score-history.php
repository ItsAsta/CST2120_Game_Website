<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/styles/stylesheet.css">
    <?php include_once('inc/scripts.inc.php');?>
    <title>Score History</title>
</head>
<body>
<?php $currentPage = 'score-history'; ?>
<?php include_once('inc/nav-bar.inc.php');?>
<div class="scoreboard-container">
    <table class="table">
        <tbody>
        <tr>
            <th id="username">#USERNAME</th>
        </tr>
        <tr>
            <th>RANK</th>
            <th>GAMES PLAYED</th>
            <th>TOTAL POINTS</th>
        </tr>
        <tr>
            <td>1</td>
            <td>82</td>
            <td>142</td>
        </tr>
        </tbody>
    </table>
    <table class="table center-table-contents">
        <tbody>
        <tr>
            <th>History</th>
        </tr>
        <tr>
            <th>POINTS</th>
            <th>TIME/DATE</th>
            <th>GAME NO.</th>
        </tr>
        <tr>
            <td>11</td>
            <td>17:39 - 19/10/2019</td>
            <td>5</td>
        </tr>
        <tr>
            <td>11</td>
            <td>17:39 - 19/10/2019</td>
            <td>5</td>
        </tr>
        <tr>
            <td>11</td>
            <td>17:39 - 19/10/2019</td>
            <td>5</td>
        </tr>
        <tr>
            <td>11</td>
            <td>17:39 - 19/10/2019</td>
            <td>5</td>
        </tr>
        <tr>
            <td>11</td>
            <td>17:39 - 19/10/2019</td>
            <td>5</td>
        </tr>
        </tbody>
    </table>
</div>
<?php include_once('inc/footer.inc.php');?>
</body>
</html>