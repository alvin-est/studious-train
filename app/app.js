/* 
    Alvin Estado
    For the Coding Bootcamp @ USYD

    With help from my robot friends Grok and Copilot.
    No robots were harmed in the making of this app.
*/

import startMenu from "./utils/startMenu.js";

async function main() {
    console.log('Welcome to SQL Employee Manager v0.1!');

    let toggle = true;

    // Prompt user
    while(toggle) {
        const userSelection = await startMenu();
        console.log(userSelection);

        // toggle = !toggle;
    }


    process.exit();
}

main();