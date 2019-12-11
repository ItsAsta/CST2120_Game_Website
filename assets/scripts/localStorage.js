$(document).ready(function () {
    //Function that fills our global leaderboard table.
    fillGlobalLeaderboard();
    console.log("Local Storage Ready");
});


// A function that is called to fill the global leaderboard.
function fillGlobalLeaderboard() {
    // We initialise an empty array.
    let dataSet = [];

    // We iterate over the size of the database, so we can find the index of each user.
    for (let i = 0; i < localStorage.length; i++) {
        // Since localStorage.key() takes an int for the index, we'll pass it the index from our for loop.
        let key = localStorage.key(i);

        // We then build an array, which we then feed our dataSet array.
        let build = [getTotalPoints(key), getOutcome(key, true), getOutcome(key, false), getUsername(key), getTotalGames(key)];

        // Feeds our dataSet array with the build data above.
        dataSet.push(build)
    }

    // That's a plugin which would make our table sortable.
    $('#global-leaderboard-table').DataTable({
        "order": [[0, "desc"]],
        data: dataSet,
        columns: [
            {title: "TOTAL POINTS"},
            {title: "TOTAL WINS"},
            {title: "TOTAL LOST"},
            {title: "USERNAME"},
            {title: "GAMES PLAYED"},
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

//A function that will return the top 5 users of our site.
function getTopFive() {
    //Two array variables.
    let points = [];
    let topFive = [];
    //A variable that stores the amount of user's we have got stored in our local storage.
    let userAmount = localStorage.length;

    //If we have got more than 0 users, which confirms that our local storage is not empty.
    if (userAmount > 0) {

        //A for loop to iterate over all our users.
        for (let i = 0; i < userAmount; i++) {
            // Since localStorage.key() takes an int for the index, we'll pass it the index from our for loop.
            let key = localStorage.key(i);
            //We then push each users total points into our points array.
            points.push([key, getTotalPoints(key)]);
        }

        //This will sort all the points from the highest to the lowest.
        points.sort(function (a, b) {
            return b[1] - a[1];
        });

        //We then used that to find out who the top 5 users are, by using a for loop to iterate up to 5.
        for (let i = 0; i < Math.min(5, userAmount); i++) {
            //pushes the top 5 user's name and their respective points into our points array variable.
            topFive.push([points[i][0], points[i][1]]);
        }
    }
    //We then return our topFive array value, so that we can use it else where.
    return topFive;
}

// A function with a parameter, which returns how many games a user has when we pass an argument to it.
function getTotalGames(user) {
    if (localStorage.length > 0) {
        return JSON.parse(localStorage.getItem(user)).gameDate.length;
    }
}

// A function with a parameter, which returns the user when we pass an argument to it.
function getUsername(user) {
    if (localStorage.length > 0) {
        return JSON.parse(localStorage.getItem(user)).username;
    }
    return null;
}

// A function with a parameter, which returns how many total points a user has when we pass an argument to it.
function getTotalPoints(user) {
    let totalPoints = 0;
    if (localStorage.length > 0) {
        for (let i = 0; i < JSON.parse(localStorage.getItem(user)).gamePoints.length; i++) {
            totalPoints += JSON.parse(localStorage.getItem(user)).gamePoints[i];
        }
        return totalPoints;
    }
    return null;
}

//This function is used to display the outcome for the user, the total wins and loses.
//It has 2 parameters, the user's name and a boolean whether they want to get the wins or loses.
function getOutcome(user, wins) {
    let totalWins = 0;
    let totalLoss = 0;
    if (localStorage.length > 0) {
        for (let i = 0; i < JSON.parse(localStorage.getItem(user)).gameOutcome.length; i++) {
            if (JSON.parse(localStorage.getItem(user)).gameOutcome[i] === "WIN") {
                totalWins += 1;
            } else {
                totalLoss += 1;
            }
        }

        if (wins) {
            return totalWins;
        } else {
            return totalLoss;
        }
    }
    return null;
}
