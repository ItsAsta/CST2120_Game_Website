<?php

function navigationOutput($currentPage) {

    // Using PHP, we'll add the first part of our navigation, which will be our class inside a div. It acts as a container.
    echo '<div class="nav-bar">
        <ul>';

    loopNavigation($currentPage);

    // At the end, we'll just close our element tags.
    echo '</ul></div>';
}

function leftFooterOutput($currentPage) {

    // Using PHP, we'll add the first part of our navigation, which will be our class inside a div. It acts as a container.
    echo '<div class="footer">
    <div class="footer-container-left">
        <h2>NAVIGATE</h2>
        <div class="footer-nav">
            <ul>';

    loopNavigation($currentPage);

    // At the end, we'll just close our elements tags.
    echo '</ul></div></div></div>';
}

function loopNavigation($currentPage) {
    // An array variable with our page names, which we'll match using the index with our second array.
    $names = array("Home", "Score History", "Scoreboard", "Login/Register");

    // An array variable with our file names which we'll redirect to using the HREF attribute.
    $fileNames = array("index.php", "score-history.php", "scoreboard.php", "login-register.php");

    // We iterating over the length of $names array using a for loop.
    for ($i = 0; $i < count($names); $i++){
        echo '<li ';
        /*
            In this if statement, we are checking if the name we currently iterated on is the same as the page we
            passed as an arguement inside our $currentPage parameter.
            If it matches, we'll add an id attribute into our element, and the string `active` which we use in our css.
        */
        if($names[$i] == $currentPage) {
                echo 'id="active" ';
        }

        // Since we got a function that clears the cookie when the user logs out, we need the id "account-status"
        // Therefore, we check if the string match the string in the 3rd index, which is either login/register or logout.
        // We then add the id attribute.
        if ($names[$i] == $names[3]) {
            echo 'id="account-status" ';
        }

        // We checking if the user is logged in by checking if there is any cookies set.
        if (isset($_COOKIE['username'])) {
            // If the if statement returns true, we'll get the 3rd index in our array and change the string to logout.
            // Since the user is logged in, we want to display logout instead of login/register.
            $names[3] = "Logout";
        }

        /*
            Since we are iterating over our array, we know that both arrays are of same length. For that, we know that
            the page name and file name are matching. So we'll just get the value of each string from the array using the index.
         */
        // We then echo out our html code.
        echo '><a href="' . $fileNames[$i] . '">' . $names[$i] . '</a></li>';
    }

}

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}