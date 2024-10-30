import inquirer from "inquirer";
import { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } from "./actionHandler.js";

async function startMenu() {
    const actions = {
        'View all departments': viewAllDepartments,
        'View all roles': viewAllRoles,
        'View all employees': viewAllEmployees,
        'Add a department': addDepartment,
        'Add a role': addRole,
        'Add an employee': addEmployee,
        'Update an employee\'s role': updateEmployeeRole,
    };

    const userSelection = await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: Object.keys(actions)
        }
    ]);

    await actions[userSelection.menu]();
}

export default startMenu;