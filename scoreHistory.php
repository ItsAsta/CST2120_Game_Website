<?php
include_once('inc/phpFunc.php');
headerOutput('Score History', array("assets/styles/stylesheet.css", "assets/styles/datatables.css"));
navigationOutput('Score History');
?>
<div class="leaderboard-container">
    <!-- PERSONAL HISTORY SECTION -->
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

    <!-- GAMES PLAYED HISTORY SECTION -->
    <table id="score-history-table" class="table center-table-contents display">
    </table>
</div>
<?php footerOutput('Score History') ?>