$(document).ready(function() {
    if (getUsernameCookie() !== null) {
        alert("Please login before playing!");
        return;
    }
    $("#human-rock").click(function () {
        humanDecision('rock', "human-rock");
    });

    $("#human-paper").click(function () {
        humanDecision('paper', "human-paper");
    });

    $("#human-scissor").click(function () {
        humanDecision('scissor', "human-scissor");
    });

    $("#check-selection").click(function () {
        robotChoose();
    })

});

const SELECT_OPTIONS = [['human-rock', 'human-paper', 'human-scissor'], ['rock', 'paper', 'scissor']];

let humanChoice;

function humanDecision(name, id) {
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
        return humanChoice = name;
    }
}

function robotChoose() {
    let robotChoices = ['rock', 'paper', 'scissor'];

    let randRobotChoice = robotChoices[Math.floor(Math.random()*robotChoices.length)];

    if (humanChoice === 'rock') {
        if (randRobotChoice === 'rock') {
            alert("It's a DRAW!")
        }

        if (randRobotChoice === 'paper') {
            alert("Robot WINS!");
        }

        if (randRobotChoice === 'scissor') {
            alert("Humans WINS!");
        }
    }

    if (humanChoice === 'paper') {
        if (randRobotChoice === 'paper') {
            alert("It's a DRAW!")
        }

        if (randRobotChoice === 'scissor') {
            alert("Robot WINS!");
        }

        if (randRobotChoice === 'rock') {
            alert("Humans WINS!");
        }
    }

    if (humanChoice === 'scissor') {
        if (randRobotChoice === 'scissor') {
            alert("It's a DRAW!")
        }

        if (randRobotChoice === 'rock') {
            alert("Robot WINS!");
        }

        if (randRobotChoice === 'paper') {
            alert("Humans WINS!");
        }
    }

    console.log("Human Choice: " + humanChoice);
    console.log("Robot Choice: " + randRobotChoice);
}