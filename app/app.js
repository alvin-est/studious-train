import startMenu from "./utils/startMenu.js";
import viewUI from "./utils/viewUI.js";

async function main() {
    console.log('Welcome to SQL Employee Tracker!');

    // Prompt user
    const userSelection = await startMenu();
    console.log(userSelection);


}

main();