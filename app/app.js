/* 
    Alvin Estado
    For the Coding Bootcamp @ USYD

    With help from my robot friends Grok and Copilot.
    No robots were harmed in the making of this app.
*/

import startMenu from "./utils/startMenu.js";

async function main() {

    console.log('\n')
    const asciiArt = [
        "┏┓┏┓┓            ",
        "┗┓┃┃┃            ",
        "┗┛┗┻┗┛           ",
        "┏┓     ┓         ",
        "┣ ┏┳┓┏┓┃┏┓┓┏┏┓┏┓ ",
        "┗┛┛┗┗┣┛┗┗┛┗┫┗ ┗  ",
        "┳┳┓  ┛     ┛     ",
        "┃┃┃┏┓┏┓┏┓┏┓┏┓┏┓  ",
        "┛ ┗┗┻┛┗┗┻┗┫┗ ┛   ",
        "  ┏┓ ┓ ┏┓ ┛      ",
        "┓┏┃┫ ┃ ┃┫        ",
        "┗┛┗┛•┻•┗┛        "
    ];
    console.log(asciiArt.join('\n'));
    console.log('\nWelcome to SQL Employee Manager v0.1!\n\n');


    // Prompt user - leave in while loop to keep continous appearance on screen
    let toggle = true;
    while(toggle) {
        const userSelection = await startMenu();

        // Pickle Rick!! Await the magic word to exit out of the app.
        if(userSelection === 'Wubbalubbadubdubification') { toggle = !toggle; console.log(`\n🐟 So long and thanks for all the fish! 🐟\n`) };
    }

    process.exit();
}

main();