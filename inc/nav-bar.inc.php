<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../assets/styles/stylesheet.css">
</head>
<body>
    <div class="nav-bar">
        <ul>
            <li <?php if ($currentPage === 'index') {echo 'id="active"';} ?>><a href="index.php">Home</a></li>
            <li <?php if ($currentPage === 'scoreboard') {echo 'id="active"';} ?>><a href="scoreboard.php">Scoreboard</a></li>
            <div class="nav-bar-right nav-bar-right-container">
                <li <?php if ($currentPage === 'user') {echo 'id="active"';} ?>><a href="user.php">User</a></li>
            </div>
        </ul>
    </div>
</body>
</html>