$(document).ready(function() {

        if (getUsernameCookie() !== null) {
                $("#username").text(JSON.parse(localStorage.getItem(getUsernameCookie())).username);
                $("#total-games-played").text(getTotalGames(getUsernameCookie()));
                $("#total-game-points").text(getTotalPoints(getUsernameCookie()));
                fillHistoryTable();
        }
        fillGlobalScoreboard();
        console.log("Local Storage Ready");
});

function fillHistoryTable() {
        var ourTable = '';
        console.log("localstorage size: " + JSON.parse(localStorage.getItem(getUsernameCookie())).gameDate.length);
        for (let i = JSON.parse(localStorage.getItem(getUsernameCookie())).gameDate.length - 1; i >= 0; i--) {
                ourTable +=
                    "<tr><td>" + JSON.parse(localStorage.getItem(getUsernameCookie())).gamePoints[i] +
                    "</td><td>" + JSON.parse(localStorage.getItem(getUsernameCookie())).gameDate[i] +
                    "</td><td>" + (i + 1) + "</td></tr>";
        }

        $(ourTable).insertAfter("#history-table-header");
}

function getTotalGames(user) {
        return JSON.parse(localStorage.getItem(user)).gameDate.length;
}

function getUsername(user) {
        return JSON.parse(localStorage.getItem(user)).username;
}

function getTotalPoints(user) {
        var totalPoints = 0;
        for (let i = 0; i < JSON.parse(localStorage.getItem(user)).gamePoints.length; i++) {
                totalPoints += JSON.parse(localStorage.getItem(user)).gamePoints[i];
        }
        return totalPoints;
}

function fillGlobalScoreboard() {
        var foo = '';
        for (let i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                console.log(key);
                foo +=
                    "<tr><td>" + 1 +
                    "</td><td>" + getUsername(key) +
                    "</td><td>" + getTotalGames(key) +
                    "</td><td>" + getTotalPoints(key) + "</td></tr>";
        }

        $(foo).insertAfter("#scoreboard-table-header");
}

