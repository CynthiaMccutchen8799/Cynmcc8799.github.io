/*
    Author: Cynthia Mccutchen
    Date: September 13, 2026
    Purpose: This JavaScript asks the visitor for their name.
*/

// Prompt the visitor to enter their name.
let visitorName = prompt("Place Your Name Here");

// Check that the visitor entered a name.
if (visitorName !== null && visitorName.trim() !== "") {

    // Update the welcome message with the visitor's name.
    document.getElementById("welcomeMessage").textContent =
        "Hey! Welcome to My Portfolio, " + visitorName + "!";
}

