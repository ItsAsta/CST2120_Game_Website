<?php

function navigationOutput($currentPage)
{

    // Using PHP, we'll add the first part of our navigation, which will be our class inside a div. It acts as a container.
    echo '<div class="banner-container"><img src="./assets/resources/banner.png"></div>
        <div class="nav-bar">
        <ul>';

    loopNavigation($currentPage);

    // At the end, we'll just close our element tags.
    echo '</ul></div>';
}

function footerOutput($currentPage) {
    openFooter();
    leftFooterOutput($currentPage);
    centerFooterOutput();
    rightFooterOutput();
    closeFooter();
}

function leftFooterOutput($currentPage)
{
    // Using PHP, we'll add the first part of our navigation, which will be our class inside a div. It acts as a container.
    echo '<div class="footer-container-left">
        <h2>NAVIGATE</h2>
        <hr>
        <div class="footer-nav">
            <ul>';

    loopNavigation($currentPage);

    // At the end, we'll just close our elements tags.
    echo '</ul></div></div>';
}

function centerFooterOutput() {
    echo '<div class="footer-container-center">
            <h2>PLUGS</h2>
            <hr>
            <i class="fab fa-snapchat"></i>
            <span>@BIGA</span>
            <i class="fab fa-instagram"></i>
            <span>@BIGA</span>
            <i class="fas fa-globe"></i>
            <span>@RSPeer.org</span>
            <i class="fab fa-discord"></i>
            <span>@discord.gg/Z6AJsdE</span>
          </div>';
}

function rightFooterOutput()
{
    echo '<div class="footer-container-right">
        <h2>TOP 5 USERS</h2>
        <hr>
        <ol class="footer-top-list">';

    echo '<script  type="text/JavaScript">
            for (let i = 0; i < getTopFive().length; i++) {
                let li = document.createElement("li");

                li.innerHTML = getTopFive()[i][0].toUpperCase();
                let footerParent = document.getElementsByClassName("footer-top-list");
                footerParent[0].insertBefore(li, footerParent.lastChild);
            }
        </script>';

    echo '</ol>
    </div>';
}

function openFooter()
{
    echo '<div class="footer">';
}

function closeFooter()
{
    echo '</div>';
}

function loopNavigation($currentPage)
{
    // An array variable with our page names, which we'll match using the index with our second array.
    $pageTitle = array("Home", "Score History", "Scoreboard", "Login/Register");

    // An array variable with our file names which we'll redirect to using the HREF attribute.
    $fileNames = array("index.php", "score-history.php", "scoreboard.php", "login-register.php");

    // We iterating over the length of $names array using a for loop.
    for ($i = 0; $i < count($pageTitle); $i++) {
        echo '<li ';
        /*
            In this if statement, we are checking if the name we currently iterated on is the same as the page we
            passed as an arguement inside our $currentPage parameter.
            If it matches, we'll add an id attribute into our element, and the string `active` which we use in our css.
        */
        if ($pageTitle[$i] == $currentPage) {
            echo 'id="active" ';
        }

        // Since we got a function that clears the cookie when the user logs out, we need the id "account-status"
        // Therefore, we check if the string match the string in the 3rd index, which is either login/register or logout.
        // We then add the id attribute.
        if ($pageTitle[$i] == $pageTitle[3]) {
            echo 'id="account-status" ';
        }

        // We checking if the user is logged in by checking if there is any cookies set.
        if (isset($_COOKIE['username'])) {
            // If the if statement returns true, we'll get the 3rd index in our array and change the string to logout.
            // Since the user is logged in, we want to display logout instead of login/register.
            $pageTitle[3] = "Logout";
        }

        /*
            Since we are iterating over our array, we know that both arrays are of same length. For that, we know that
            the page name and file name are matching. So we'll just get the value of each string from the array using the index.
         */
        // We then echo out our html code.
        echo '><a href="' . $fileNames[$i] . '">' . $pageTitle[$i] . '</a></li>';
    }

}


function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}