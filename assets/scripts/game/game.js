$(document).ready(function () {
    $("#game-login-background").hide();
    $(".main-game-container").hide();

    if (getUsernameCookie() === null) {
        $("#game-login-background").show();
        return;
    } else {
        $(".main-game-container").show();
    }

    if (getUsernameCookie() !== null) {
        $("#username").text(JSON.parse(localStorage.getItem(getUsernameCookie())).username);
        $("#total-game-points").text(getTotalPoints(getUsernameCookie()));
        $("#total-game-wins").text(getOutcomes(getUsernameCookie(), true));
        $("#total-game-loss").text(getOutcomes(getUsernameCookie(), false));
        $("#total-games-played").text(getTotalGames(getUsernameCookie()));
        fillHistoryTable();
    }

    $("#user-rock").click(function () {
        userSelection('rock', "#user-rock");
    });

    $("#user-paper").click(function () {
        userSelection('paper', "#user-paper");
    });

    $("#user-scissor").click(function () {
        userSelection('scissor', "#user-scissor");
    });

    $("#confirm-decision").click(function () {
        robotRoll();
    });


});

let userChoice;

const SELECT_OPTIONS = [['#user-rock', '#user-paper', '#user-scissor'], ['rock', 'paper', 'scissor']];

const USER_SCORE_ID = "#user-score";
const USER_WINS_ID = "#user-wins";
const USER_LOSS_ID = "#user-loss";

const ROBOT_SCORE_ID = "#robot-score";
const ROBOT_WINS_ID = "#robot-wins";
const ROBOT_LOSS_ID = "#robot-loss";

const DRAWS_ID = "#draws";


function userSelection(name, id) {

    for (let i = 0; i < SELECT_OPTIONS[0].length; i++) {
        if ($(SELECT_OPTIONS[0][i]).hasClass('selected')) {
            $(SELECT_OPTIONS[0][i]).removeClass('selected');
            $(SELECT_OPTIONS[0][i]).data('selected', false);
            $(SELECT_OPTIONS[0][i]).attr('src', 'assets/resources/' + SELECT_OPTIONS[1][i] + '.png');
        }
    }

    if ($(id).data('selected')) {
        $(id).removeClass('selected');
        $(id).data('selected', false);
        $(id).attr('src', 'assets/resources/' + name + '.png');
        return null;
    } else {
        $(id).addClass('selected');
        $(id).data('selected', true);
        $(id).attr('src', 'assets/resources/' + name + '-selected.png');
        return userChoice = name;
    }
}

function robotRoll() {
    let robotChoices = ['rock', 'paper', 'scissor'];

    let randRobotChoice = robotChoices[Math.floor(Math.random() * robotChoices.length)];

    animateRobotSelection(randRobotChoice);
    if (userChoice === 'rock') {
        if (randRobotChoice === 'rock') {
            updateWinner('draw');
        }

        if (randRobotChoice === 'paper') {
            updateWinner('robot');
        }

        if (randRobotChoice === 'scissor') {
            updateWinner('user');
        }
    }

    if (userChoice === 'paper') {
        if (randRobotChoice === 'paper') {
            updateWinner('draw');
        }

        if (randRobotChoice === 'scissor') {
            updateWinner('robot');
        }

        if (randRobotChoice === 'rock') {
            updateWinner('user');
        }
    }

    if (userChoice === 'scissor') {
        if (randRobotChoice === 'scissor') {
            updateWinner('draw');
        }

        if (randRobotChoice === 'rock') {
            updateWinner('robot');
        }

        if (randRobotChoice === 'paper') {
            updateWinner('user');
        }
    }
}

function animateRobotSelection(selection) {
    if (selection === 'rock') {
        $("#robot-rock").addClass('selected', sleep(1000).then(() => {
            $("#robot-rock").removeClass('selected');
        }))
    }

    if (selection === 'paper') {
        $("#robot-paper").addClass('selected', sleep(1000).then(() => {
            $("#robot-paper").removeClass('selected');
        }))
    }

    if (selection === 'scissor') {
        $("#robot-scissor").addClass('selected', sleep(1000).then(() => {
            $("#robot-scissor").removeClass('selected');
        }))
    }
}

var userRoundWins = [["#user-rnd-1", "#user-rnd-2", "#user-rnd-3", "#user-rnd-4", "#user-rnd-5"], 0];
var robotRoundWins = [["#robot-rnd-1", "#robot-rnd-2", "#robot-rnd-3", "#robot-rnd-4", "#robot-rnd-5"], 0];
var currentRound = 0;
var tempTotalPoints = 0;

function updateWinner(winner) {

    var userScore = parseInt($(USER_SCORE_ID).text());
    var robotScore = parseInt($(ROBOT_SCORE_ID).text());

    var userWins = $(USER_WINS_ID).text().replace(/[^\d.]/g, '');
    var userLoss = $(USER_LOSS_ID).text().replace(/[^\d.]/g, '');

    var robotWins = $(ROBOT_WINS_ID).text().replace(/[^\d.]/g, '');
    var robotLoss = $(ROBOT_LOSS_ID).text().replace(/[^\d.]/g, '');


    switch (currentRound) {
        case 0:
            if (winner === 'user') {
                updateTraffic(0, 'user');
            }

            if (winner === 'draw') {
                updateTraffic(0, 'draw');
            }

            if (winner === 'robot') {
                updateTraffic(0, 'robot');
            }
            break;

        case 1:
            if (winner === 'user') {
                updateTraffic(1, 'user');
            }

            if (winner === 'draw') {
                updateTraffic(1, 'draw');
            }

            if (winner === 'robot') {
                updateTraffic(1, 'robot');
            }
            break;

        case 2:
            if (winner === 'user') {
                updateTraffic(2, 'user');
            }

            if (winner === 'draw') {
                updateTraffic(2, 'draw');
            }

            if (winner === 'robot') {
                updateTraffic(2, 'robot');
            }
            break;

        case 3:
            if (winner === 'user') {
                updateTraffic(3, 'user');
            }

            if (winner === 'draw') {
                updateTraffic(3, 'draw');
            }

            if (winner === 'robot') {
                updateTraffic(3, 'robot');
            }
            break;

        case 4:
            if (userRoundWins[1] > robotRoundWins[1]) {
                tempTotalPoints += 25;
                $(USER_SCORE_ID).text(userScore + 25);
                $(USER_WINS_ID).text("WINS: " + (parseInt(userWins) + 1));
                $(ROBOT_LOSS_ID).text("LOST: " + (parseInt(robotLoss) + 1));
                animateScoreIncrease(USER_SCORE_ID, userScore);
                updateStorage(true);
            } else {
                $(ROBOT_SCORE_ID).text(robotScore + 25);
                $(ROBOT_WINS_ID).text("WINS: " + (parseInt(robotWins) + 1));
                $(USER_LOSS_ID).text("LOST: " + (parseInt(userLoss) + 1));
                animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
                updateStorage(false);
            }

            userRoundWins = [["#user-rnd-1", "#user-rnd-2", "#user-rnd-3", "#user-rnd-4", "#user-rnd-5"], 0];
            robotRoundWins = [["#robot-rnd-1", "#robot-rnd-2", "#robot-rnd-3", "#robot-rnd-4", "#robot-rnd-5"], 0];
            currentRound = 0;
            tempTotalPoints = 0;
            document.querySelectorAll('.left-out-of-five-container > div').forEach(e => e.removeAttribute('style'));
            document.querySelectorAll('.right-out-of-five-container > div').forEach(e => e.removeAttribute('style'));
            break;
    }


}

function updateTraffic(round, winner) {
    var draws = $(DRAWS_ID).text().replace(/[^\d.]/g, '');
    var userScore = parseInt($(USER_SCORE_ID).text());
    var robotScore = parseInt($(ROBOT_SCORE_ID).text());

    if (winner === 'draw') {
        tempTotalPoints += 3;
        $(DRAWS_ID).text("DRAWS: " + (parseInt(draws) + 1));
        $(USER_SCORE_ID).text(userScore + 3);
        $(ROBOT_SCORE_ID).text(robotScore + 3);
        animateScoreIncrease(USER_SCORE_ID, userScore);
        animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
        console.log("DRAW!");
        return;
    }

    if (winner === 'user') {
        $(userRoundWins[0][round]).css('background-color', 'green');
        $(robotRoundWins[0][round]).css('background-color', 'red');
        tempTotalPoints += 5;
        userRoundWins[1] += 1;
        $(USER_SCORE_ID).text(userScore + 5);
        animateScoreIncrease(USER_SCORE_ID, userScore);
        console.log("YOU WIN!");
    }

    if (winner === 'robot') {
        $(userRoundWins[0][round]).css('background-color', 'red');
        $(robotRoundWins[0][round]).css('background-color', 'green');
        robotRoundWins[1] += 1;
        $(ROBOT_SCORE_ID).text(robotScore + 5);
        animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
        console.log("YOU LOSE!");
    }

    console.log("GOING UP ONE ROUND");
    currentRound = (round + 1);
}

function updateStorage(win) {
    if (getUsernameCookie() !== null) {
        let obj = JSON.parse(localStorage.getItem(getUsernameCookie()));
        let date = new Date();

        obj.gameDate.push(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        obj.gamePoints.push(tempTotalPoints);

        if (win) {
            obj.gameOutcome.push("WIN");
        } else {
            obj.gameOutcome.push("LOSS");
        }

        let updatedObj = JSON.stringify(obj);
        localStorage.setItem(getUsernameCookie(), updatedObj);
    }
}

function getOutcomes(user, wins) {
    let totalWins = 0;
    let totalLoss = 0;
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

function animateScoreIncrease(id, previousPoints) {
    $(id).prop('Counter', previousPoints).animate({
        Counter: $(id).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(id).text(Math.ceil(now));
        }
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};