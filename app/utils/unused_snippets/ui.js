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

    // If user selection is to view, simply return the DB response
    const view = (response.menu === 'View all departments') || (response.menu === 'View all roles') || (response.menu === 'View all employees');

    if(view) {
        const object = { response: response.menu };
        return object;
    }
    else {
        return uiLogic(response);
    }
}

async function uiLogic(response) {

    let object = {
        response: response,
    };

    if(response === 'Add a department') {
        const promptFurtherDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
            }
        ]);

        object.name = promptFurtherDetails.name;

        // console.log(object);
        // console.log(object.response);
        // console.log(object.params);
        return object;
    }

    if(response === 'Add a role') {

    }

    if(response === 'Add an employee') {
            
    }

    if(response === 'Update an employee\'s role') {

    }
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