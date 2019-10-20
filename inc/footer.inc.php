<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../assets/styles/stylesheet.css">
</head>
<body>

<div class="footer">
    <div class="footer-container-left">
        <h2>NAVIGATE</h2>
        <div class="footer-nav">
            <ul>
                <li <?php if ($currentPage === 'index') {echo 'id="active"';} ?>><a href="index.php">Home</a></li>
                <li <?php if ($currentPage === 'score-history') {echo 'id="active"';} ?>><a href="score-history.php">Score History</a></li>
                <li <?php if ($currentPage === 'scoreboard') {echo 'id="active"';} ?>><a href="scoreboard.php">Scoreboard</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-container-right">
        <a>Yeeet</a>
    </div>
</div>
</body>
</html>
