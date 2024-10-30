const inquirer = require('inquirer');

// Gather user input
async function startPrompt() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'age',
            message: 'How old are you?'
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?'
        }
    ]);

    return response;
}

export default startPrompt;