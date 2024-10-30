import inquirer from "inquirer";

async function showMenu() {

    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: 
            [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee\'s role',
            ]
        }
    ]);

    return response.menu;
}

async function startUI() {
    const response = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'proceed',
            message: 'Would you like to proceed?',
        }
    ]);
    if (response.proceed) {
        return showMenu();
    }
    else {
        console.log('Exiting...');
        process.exit();
    }
}

export default startUI;