$(document).ready(function() {
    // if (getUsernameCookie() === null) {
    //     alert("Please login before playing!");
    //     return;
    // }
    $("#user-rock").click(function () {
        userSelection('rock', "user-rock");
    });

    $("#user-paper").click(function () {
        userSelection('paper', "user-paper");
    });

    $("#user-scissor").click(function () {
        userSelection('scissor', "user-scissor");
    });

    $("#confirm-decision").click(function () {
        robotRoll();
    })

});

const SELECT_OPTIONS = [['user-rock', 'user-paper', 'user-scissor'], ['rock', 'paper', 'scissor']];

let userChoice;

function userSelection(name, id) {
    var formatId = "#" + id;

    for (let i = 0; i < SELECT_OPTIONS[0].length; i++) {
        if ($("#" + SELECT_OPTIONS[0][i]).hasClass('selected')) {
            $("#" + SELECT_OPTIONS[0][i]).removeClass('selected');
            $("#" + SELECT_OPTIONS[0][i]).data('selected', false);
            $("#" + SELECT_OPTIONS[0][i]).attr('src', 'assets/resources/' + SELECT_OPTIONS[1][i] + '.png');
        }
    }

    if ($(formatId).data('selected')) {
        $(formatId).removeClass('selected');
        $(formatId).data('selected', false);
        $(formatId).attr('src', 'assets/resources/' + name + '.png');
        return null;
    } else {
        $(formatId).addClass('selected');
        $(formatId).data('selected', true);
        $(formatId).attr('src', 'assets/resources/' + name + '-selected.png');
        return userChoice = name;
    }
}

function robotRoll() {
    let robotChoices = ['rock', 'paper', 'scissor'];

    let randRobotChoice = robotChoices[Math.floor(Math.random()*robotChoices.length)];

    var userScore = parseInt($('#user-score').text());

    var robotScore = parseInt($('#robot-score').text());



    if (userChoice === 'rock') {
        if (randRobotChoice === 'rock') {
            $("#user-score").text(userScore + 3);
            $("#robot-score").text(robotScore + 3);
            updateWinner('draw');
            animateScoreIncrease("#user-score", userScore);
            animateScoreIncrease("#robot-score", robotScore);
        }

        if (randRobotChoice === 'paper') {
            $("#robot-score").text(robotScore + 5);
            updateWinner('robot');
            animateScoreIncrease("#robot-score", robotScore);
        }

        if (randRobotChoice === 'scissor') {
            $("#user-score").text(userScore + 5);
            updateWinner('user');
            animateScoreIncrease("#user-score", userScore);
        }
    }

    if (userChoice === 'paper') {
        if (randRobotChoice === 'paper') {
            alert("It's a DRAW!")
        }

        if (randRobotChoice === 'scissor') {
            alert("Robot WINS!");
        }

        if (randRobotChoice === 'rock') {
            alert("user WINS!");
        }
    }

    if (userChoice === 'scissor') {
        if (randRobotChoice === 'scissor') {
            alert("It's a DRAW!")
        }

        if (randRobotChoice === 'rock') {
            alert("Robot WINS!");
        }

        if (randRobotChoice === 'paper') {
            alert("user WINS!");
        }
    }
}

function updateWinner(winner) {
    var userWins = $('#user-wins').text().replace ( /[^\d.]/g, '' );
    var userLoss = $('#user-loss').text().replace ( /[^\d.]/g, '' );

    var robotWins = $('#robot-wins').text().replace ( /[^\d.]/g, '' );
    var robotLoss = $('#robot-loss').text().replace ( /[^\d.]/g, '' );

    var draws = $('#draws').text().replace ( /[^\d.]/g, '' );

    if (winner === 'user') {
        $("#user-wins").text("WINS: " + (parseInt(userWins) + 1));
        $("#robot-loss").text("LOSS: " + (parseInt(robotLoss) + 1));
    }

    if (winner === 'draw') {
        $("#draws").text("DRAWS: " + (parseInt(draws) + 1));
    }

    if (winner === 'robot') {
        $("#robot-wins").text("WINS: " + (parseInt(robotWins) + 1));
        $("#user-loss").text("LOSS: " + (parseInt(userLoss) + 1));
    }


}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};



function animateScoreIncrease(id, previousPoints) {
    $(id).prop('Counter', previousPoints).animate({
        Counter: $(id).text()
    }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
            $(id).text(Math.ceil(now));
        }
    });
}