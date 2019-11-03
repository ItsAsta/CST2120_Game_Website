$(document).ready(function () {
    //Hide the login interface on load
    $("#game-login-background").hide();
    //Hide the game interface on load
    $(".main-game-container").hide();

    //We check if there isn't a cookie. If there isn't then it means that the user is not logged in.
    if (getUsernameCookie() === null) {
        // If the statement above is true, we'll show the login interface.
        $("#game-login-background").show();
        return;
    } else {
        //Otherwise we'll display the game.
        $(".main-game-container").show();
    }

    //This if statement checks if we got a username cookie by checking whether it's not null.
    if (getUsernameCookie() !== null) {
        //If the if statement returns true, we'll fill out the logged in user details.
        $("#username").text(JSON.parse(localStorage.getItem(getUsernameCookie())).username);
        $("#total-game-points").text(getTotalPoints(getUsernameCookie()));
        $("#total-game-wins").text(getOutcome(getUsernameCookie(), true));
        $("#total-game-loss").text(getOutcome(getUsernameCookie(), false));
        $("#total-games-played").text(getTotalGames(getUsernameCookie()));

        //A function that will fill out the user's history table.
        fillHistoryTable();
    }

    //The functions below are ID's of element that once clicked, they'll execute a function. I'll be commenting them.

    $("#user-rock").click(function () {
        //If the element of that ID is clicked, we'll execute the User selection function.
        userSelection('rock', "#user-rock");
    });

    $("#user-paper").click(function () {
        userSelection('paper', "#user-paper");
    });

    $("#user-scissor").click(function () {
        userSelection('scissor', "#user-scissor");
    });

    //The confirm decision element is a button that once a user clicks, it'll make the robot roll a random choice.
    $("#confirm-decision").click(function () {
        // A function that is execute to make the robot make a random choice of the 3 available options.
        robotRoll();
    });


});

//A variable that will hold our user's choice. Which we can then use across our game.
let userChoice;

//Below are constants. A constant doesn't change their value. Therefore it's all capitalise with the type const.
const SELECT_OPTIONS = [['#user-rock', '#user-paper', '#user-scissor'], ['rock', 'paper', 'scissor']];

const USER_SCORE_ID = "#user-score";
const USER_WINS_ID = "#user-wins";
const USER_LOSS_ID = "#user-loss";

const ROBOT_SCORE_ID = "#robot-score";
const ROBOT_WINS_ID = "#robot-wins";
const ROBOT_LOSS_ID = "#robot-loss";

const DRAWS_ID = "#draws";

//This function is execute, it has 2 parameters. Name of the individual e.g. user or robot. Then the element id.
function userSelection(name, id) {

    //We iterate over all the available options that the player can choose from.
    for (let i = 0; i < SELECT_OPTIONS[0].length; i++) {
        //We check whether the user has previously selected an option by checking if it has a class called Selection.
        if ($(SELECT_OPTIONS[0][i]).hasClass('selected')) {
            //If the if statement returns true, we'll remove the selected class
            //so that there isn't multiple selections displayed.
            $(SELECT_OPTIONS[0][i]).removeClass('selected');
            //using DATA, we can store whether the user has clicked the option or not.
            // Then we can determine what option the user has selected.
            $(SELECT_OPTIONS[0][i]).data('selected', false);
            //Finally, we'll change the image to another image, so it adds more emphasis to what the user has selected.
            $(SELECT_OPTIONS[0][i]).attr('src', 'assets/resources/' + SELECT_OPTIONS[1][i] + '.png');
        }
    }

    //We check if the element has previously been selected.
    if ($(id).data('selected')) {
        //If it returns true, we'll remove the selected class.
        $(id).removeClass('selected');
        //We then change the DATA function back to false, which means that the user hasn't selected anything.
        $(id).data('selected', false);
        //We change our image back to the default state.
        $(id).attr('src', 'assets/resources/' + name + '.png');
        //Returns a null value, which means we haven't got a value.
        return null;
    } else {
        //Otherwise, we'll add the selected class.
        $(id).addClass('selected');
        //Return that the specific element has been selected.
        $(id).data('selected', true);
        //Change the image to the selected image.
        $(id).attr('src', 'assets/resources/' + name + '-selected.png');
        //Stores the users name into our userChoice variable.
        return userChoice = name;
    }
}

//This function is responsible of making the robot select a random choice.
function robotRoll() {
    //An array variable with the 3 options that the robot can select from.
    let robotChoices = ['rock', 'paper', 'scissor'];

    //We create a random variable which will select a random choice from our array above.
    let randRobotChoice = robotChoices[Math.floor(Math.random() * robotChoices.length)];

    //This function is called which will animate the option selected.
    animateRobotSelection(randRobotChoice);

    //Below are a few if statements which check what option the user has selected.
    if (userChoice === 'rock') {
        if (randRobotChoice === 'rock') {
            //Updates the winner when the if statements return true.
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

//This function is responsible of animating what the robot has chosen.
function animateRobotSelection(selection) {
    //Few if statements that will return true according to what the robot has selected.
    if (selection === 'rock') {
        //If the if statement returns true, we'll add the selected class, then remove the class after 1 second has passed.
        //This will create an animation.
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

//These 2 array variables are used to track what round we are on, so that we can show the wins and loses.
let userRoundWins = [["#user-rnd-1", "#user-rnd-2", "#user-rnd-3", "#user-rnd-4", "#user-rnd-5"], 0];
let robotRoundWins = [["#robot-rnd-1", "#robot-rnd-2", "#robot-rnd-3", "#robot-rnd-4", "#robot-rnd-5"], 0];

//Global variables to store current round and temporary total points, which will be used for our history table.
let currentRound = 0;
let tempTotalPoints = 0;

//This function updates who the winner is, and has 1 parameter which you can pass who the winner is to.
function updateWinner(winner) {

    //These 2 variables will get the user and the robot's score.
    //Using parseInt, we can convert the score from string to integer.
    let userScore = parseInt($(USER_SCORE_ID).text());
    let robotScore = parseInt($(ROBOT_SCORE_ID).text());

    //These 2 variables will get the user and the robot's wins and losses.
    //We then use replace to remove all characters, so that we are only left with an integer.
    let userWins = $(USER_WINS_ID).text().replace(/[^\d.]/g, '');
    let userLoss = $(USER_LOSS_ID).text().replace(/[^\d.]/g, '');

    let robotWins = $(ROBOT_WINS_ID).text().replace(/[^\d.]/g, '');
    let robotLoss = $(ROBOT_LOSS_ID).text().replace(/[^\d.]/g, '');


    //A switch case statement with a current round parameter. The rounds start from 0 and increases from there.
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
            //An if statement checking whether the user has got more points than the robot.
            if (userRoundWins[1] > robotRoundWins[1]) {
                //If the if statement returns true, we'll add an additional 25 points to the points.
                tempTotalPoints += 25;
                $(USER_SCORE_ID).text(userScore + 25);
                //We'll add a win to the user, and a loss to the robot.
                $(USER_WINS_ID).text("WINS: " + (parseInt(userWins) + 1));
                $(ROBOT_LOSS_ID).text("LOST: " + (parseInt(robotLoss) + 1));
                //We then call this function which will animate the points increase.
                animateScoreIncrease(USER_SCORE_ID, userScore);
                //This function will update our local storage with a win for the user.
                updateStorage(true);
            } else {
                //Otherwise, we'll give an additional 25 points to the robot.
                $(ROBOT_SCORE_ID).text(robotScore + 25);
                //Give the robot a win, then the user a loss.
                $(ROBOT_WINS_ID).text("WINS: " + (parseInt(robotWins) + 1));
                $(USER_LOSS_ID).text("LOST: " + (parseInt(userLoss) + 1));
                //We then call this function which will animate the points increase.
                animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
                //This function will update our local storage with a loss for the user.
                updateStorage(false);
            }

            //We'll then reset our variables back to their default values, so we can track our next game.
            userRoundWins = [["#user-rnd-1", "#user-rnd-2", "#user-rnd-3", "#user-rnd-4", "#user-rnd-5"], 0];
            robotRoundWins = [["#robot-rnd-1", "#robot-rnd-2", "#robot-rnd-3", "#robot-rnd-4", "#robot-rnd-5"], 0];
            currentRound = 0;
            tempTotalPoints = 0;
            //This will remove all style attributes under the specified class.
            //In this case, left-out-of-five-container and right-out-of-five-container.
            document.querySelectorAll('.left-out-of-five-container > div').forEach(e => e.removeAttribute('style'));
            document.querySelectorAll('.right-out-of-five-container > div').forEach(e => e.removeAttribute('style'));

            //Break will break out of the switch case statement.
            break;
    }
}

//The game has a set of traffic light looking diagram, which will show who the winner of each round is.
//We got 2 parameters. Round, which is what round we are currently on, to determine what round we are on next.
//Then we got a winner parameter, which we will feed it with the winner. Whether the user or robot.
function updateTraffic(round, winner) {
    //A variable that will take the draws element value and then replace all characters, leaving us with integers.
    let draws = $(DRAWS_ID).text().replace(/[^\d.]/g, '');

    //These variables will store the user and the robot's score, then we use parseInt to turn it from a string into an integer.
    let userScore = parseInt($(USER_SCORE_ID).text());
    let robotScore = parseInt($(ROBOT_SCORE_ID).text());

    //If the passed argument for the winner is DRAW, we'll add 3 points for both the user and the robot.
    if (winner === 'draw') {
        //Adds 3 points to our temporary total points variable.
        tempTotalPoints += 3;
        //Increases the draws element value by 1.
        $(DRAWS_ID).text("DRAWS: " + (parseInt(draws) + 1));
        //Adds 3 points for both the user and the robot.
        $(USER_SCORE_ID).text(userScore + 3);
        $(ROBOT_SCORE_ID).text(robotScore + 3);

        //Animates both scores.
        animateScoreIncrease(USER_SCORE_ID, userScore);
        animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
        //An empty return to prevent the code from continuing below.
        return;
    }

    //If the winner is the user.
    if (winner === 'user') {
        //If the statement returns true, we'll change the traffic colour to green or red.
        //The user gets green for the win, and the robot gets red for the loss.
        $(userRoundWins[0][round]).css('background-color', 'green');
        $(robotRoundWins[0][round]).css('background-color', 'red');
        //Gives the user 5 additional points for the win.
        tempTotalPoints += 5;
        //Gives the user a win by adding 1 to the current value of the variable.
        userRoundWins[1] += 1;
        //Changes the score element value.
        $(USER_SCORE_ID).text(userScore + 5);
        //Animates the score increase.
        animateScoreIncrease(USER_SCORE_ID, userScore);
    }

    if (winner === 'robot') {
        $(userRoundWins[0][round]).css('background-color', 'red');
        $(robotRoundWins[0][round]).css('background-color', 'green');
        robotRoundWins[1] += 1;
        $(ROBOT_SCORE_ID).text(robotScore + 5);
        animateScoreIncrease(ROBOT_SCORE_ID, robotScore);
    }

    //This variable is used to identify what round we are currently on.
    currentRound = (round + 1);
}

//This function will update our local storage whether the user has won or not.
function updateStorage(win) {
    //We need to make sure the user is logged in before we do so, otherwise it'll throw a null pointer exception.
    //Therefore, we'll check whether we got a username cookie stored and we do that by checking if the return value is not null.
    if (getUsernameCookie() !== null) {
        //We'll store a JSON object into this variable, by getting the information of our logged in user via our local storage.
        let obj = JSON.parse(localStorage.getItem(getUsernameCookie()));
        //We then instantiate the date class. So we can use it.
        let date = new Date();

        //Using push, we'll add current date and time into our json object.
        obj.gameDate.push(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        //We then push our temporary points from the game.
        obj.gamePoints.push(tempTotalPoints);

        //If the value from our parameter is a win, we'll push the json object with a win, so that we can store it in the local storage.
        if (win) {
            obj.gameOutcome.push("WIN");
        } else {
            //Otherwise, we'll store a loss.
            obj.gameOutcome.push("LOSS");
        }

        //We stringify our json object so that we can store it into our local storage.
        let updatedObj = JSON.stringify(obj);
        //We our json object into our local storage while using the currently logged in user's username as a key.
        localStorage.setItem(getUsernameCookie(), updatedObj);
    }
}

//This function is responsible of animating the score increasing during our game.
//This function takes 2 parameters. id of the element and the points we want to increase from.
function animateScoreIncrease(id, previousPoints) {
    //We'll use prop with counter, then passing in our previous points.
    $(id).prop('Counter', previousPoints).animate({
        Counter: $(id).text()
    }, {
        //The amount of time the animation should take, in this case it's 1 second.
        duration: 1000,
        //The type of easing we want to use, we decided to use 'swing' for the smoothness.
        easing: 'swing',
        //This will increase the points to the current amount of points we got in our element.
        step: function (now) {
            $(id).text(Math.ceil(now));
        }
    });
}

//A sleep function that is responsible of making a function sleep for a value fed to the parameter.
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};