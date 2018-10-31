# FriendFinder

FriendFinder is a full-stack application, modeled on current dating apps.

Tech used:
* Javascript
* JQuery
* Bootstrap
* Express
* Path

A user can answer a series of 10 questions on a scale of 1-5. Their answer choices are then compared against the scores of an array of "Friends" stored in local data. The differences in scores are tallied up across all "Friends", and the friend with the lowest difference is matched, and their name and photo appear on a modal when the submit button is clicked.

This application uses Get and Post routing, as well as module-based architecture.

This application has been deployed to Heroku and can be found here: [FriendFinder](https://safe-mesa-64790.herokuapp.com/)

## Current Limitations:
* This app is still in a fragile, non-scalable state
     * The logic had to be coded in the HTML file, rather than in the `apiRoutes.js` file
     * The logic was hardcoded for each individual data object, rather than dynamically against the entire data array
     * The matches can only happen on the initial data set -- if new users are added, they will not be a part of the matching logic, per the above statement
     * There is no "required field" validation
     * A page reload is required to run the application after initial use
