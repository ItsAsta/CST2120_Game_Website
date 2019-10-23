
    <div class="nav-bar">
        <ul>
            <li <?php if ($currentPage === 'index') {echo 'id="active"';} ?>><a href="index.php">Home</a></li>
            <li <?php if ($currentPage === 'score-history') {echo 'id="active"';} ?>><a href="score-history.php">Score History</a></li>
            <li <?php if ($currentPage === 'scoreboard') {echo 'id="active"';} ?>><a href="scoreboard.php">Scoreboard</a></li>
                <li id="account-status" <?php if ($currentPage === 'login-register') {echo 'id="active"';} ?>>
                    <a></a>
                </li>
        </ul>
    </div>