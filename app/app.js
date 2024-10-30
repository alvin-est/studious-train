import startUI from './utils/ui.js';
import route from './utils/menuLogic.js';

async function main() {
    console.log('Welcome to SQL Employee Tracker!');

    const selection = await startUI();
    console.log('Selected:', selection); // for dev purposes

    // Pass selection to next function
    console.log(await route(selection));
}

main();