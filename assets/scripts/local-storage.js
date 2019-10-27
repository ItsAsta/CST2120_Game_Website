$(document).ready(function() {
        fillGlobalScoreboard();
        console.log("Local Storage Ready");
});


// A function that is called to fill the global scoreboard.
function fillGlobalScoreboard() {
        // We initialise an empty array.
        let dataSet = [];

        // We iterate over the size of the database, so we can find the index of each user.
        for (let i = 0; i < localStorage.length; i++) {
                // Since localStorage.key() takes an int for the index, we'll pass it the index from our for loop.
                let key = localStorage.key(i);

                // We then build an array, which we then feed our dataSet array.
                let build = [getTotalPoints(key), getUsername(key), getTotalGames(key)];

                // Feeds our dataSet array with the build data above.
                dataSet.push(build)
        }

        // That's a plugin which would make our table sortable.
        $('#global-scoreboard-table').DataTable( {
                "order": [[ 0, "desc" ]],
                data: dataSet,
                columns: [
                        { title: "TOTAL POINTS"},
                        { title: "USERNAME"},
                        { title: "GAMES PLAYED"},
                ]
        });
}

// A function to fill our history table.
function fillHistoryTable() {
        // We initialise an empty array called dataSet.
        let dataSet = [];

        // A reverse for loop iterating over how many games the user has.
        for (let i = JSON.parse(localStorage.getItem(getUsernameCookie())).gameDate.length - 1; i >= 0; i--) {
                /*
                   Since we already know the user that is logged in, we'll just use the cookie
                   and iterate over the gamepoints and gamedate array.
                */
                let getGameOutcome = JSON.parse(localStorage.getItem(getUsernameCookie())).gameOutcome[i];
                let getGamePoints = JSON.parse(localStorage.getItem(getUsernameCookie())).gamePoints[i];
                let getGameDate = JSON.parse(localStorage.getItem(getUsernameCookie())).gameDate[i];

                // We then build an array, which we then feed our dataSet array.
                let build = [getGamePoints, getGameOutcome, getGameDate, i + 1];

                // Feeds our dataSet array with the build data above.
                dataSet.push(build)
        }

        // That's a plugin which would make our table sortable.
        $('#score-history-table').DataTable({
                "order": [[3, "desc"]],
                data: dataSet,
                columns: [
                        {title: "POINTS"},
                        {title: "OUTCOME"},
                        {title: "TIME | DATE"},
                        {title: "GAME NO."},
                ]
        });
}

function getTopFive() {
        let points = [];
        let topFive = [];
        let userAmount = localStorage.length;
        if (userAmount > 0) {
                for (let i = 0; i < userAmount; i++) {
                        // Since localStorage.key() takes an int for the index, we'll pass it the index from our for loop.
                        let key = localStorage.key(i);
                        points.push([key, getTotalPoints(key)]);
                }

                points.sort(function (a, b) {
                        return b[1] - a[1];
                });
                        for (let i = 0; i < userAmount; i++) {
                                topFive.push([points[i][0], points[i][1]]);
                        }
        }

        return topFive;
}

// A function with a parameter, which returns how many games a user has when we pass an argument to it.
function getTotalGames(user) {
        return JSON.parse(localStorage.getItem(user)).gameDate.length;
}

// A function with a parameter, which returns the user when we pass an argument to it.
function getUsername(user) {
        return JSON.parse(localStorage.getItem(user)).username;
}

// A function with a parameter, which returns how many total points a user has when we pass an argument to it.
function getTotalPoints(user) {
        let totalPoints = 0;
        for (let i = 0; i < JSON.parse(localStorage.getItem(user)).gamePoints.length; i++) {
                totalPoints += JSON.parse(localStorage.getItem(user)).gamePoints[i];
        }
        return totalPoints;
}
