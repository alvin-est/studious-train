import inquirer from "inquirer";
import executeQuery from "./executeQuery.js";

async function startMenu() {
    // Prompt for user intent
    const userSelection = await inquirer.prompt([
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

    /* Logic based on user input */
    if(userSelection.menu === 'View all departments') {
        const sql = `SELECT * FROM department`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }

    if(userSelection.menu === 'View all roles') {
        const sql = `SELECT * FROM role;`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }

    if(userSelection.menu === 'View all employees') {
        const sql = `SELECT * FROM employee;`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }

    if(userSelection.menu === 'Add a department') {
        const promptFurtherDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Department name cannot be empty.';
                    }
                    // Check if the input length exceeds 30 characters
                    if (input.length > 30) {
                        return 'Department name should be 30 characters or less.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            }
        ]);

        const sql = `INSERT INTO department (name) VALUES ('${promptFurtherDetails.name}');`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }

    if(userSelection.menu === 'Add a role') {
        const promptFurtherDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the role:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Role name cannot be empty.';
                    }
                    // Check if the input length exceeds 30 characters
                    if (input.length > 30) {
                        return 'Role name should be 30 characters or less.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Salary cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Salary should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'department',
                message: 'Enter the department ID for the role:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Department ID cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Department ID should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            }
        ]);

        const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${promptFurtherDetails.name}', ${promptFurtherDetails.salary}, ${promptFurtherDetails.department});`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }

    if(userSelection.menu === 'Add an employee') {
        const promptFurtherDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the employee:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'First name cannot be empty.';
                    }
                    // Check if the input length exceeds 30 characters
                    if (input.length > 30) {
                        return 'First name should be 30 characters or less.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the employee:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Last name cannot be empty.';
                    }
                    // Check if the input length exceeds 30 characters
                    if (input.length > 30) {
                        return 'Last name should be 30 characters or less.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter the role ID for the employee:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Role ID cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Role ID should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Enter the manager ID for the employee:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Manager ID cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Manager ID should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            }
        ]);

        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${promptFurtherDetails.first_name}', '${promptFurtherDetails.last_name}', ${promptFurtherDetails.role}, ${promptFurtherDetails.manager});`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;

    }
    if(userSelection.menu === 'Update an employee\'s role') {
        const promptFurtherDetails = await inquirer.prompt([
            {
                type: 'input',
                name: 'employee',
                message: 'Enter the employee ID:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Employee ID cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Employee ID should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                }
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter the new role ID for the employee:',
                validate: (input) => {
                    // Check if the input is empty or only whitespace
                    if (!input || input.trim() === '') {
                        return 'Role ID cannot be empty.';
                    }
                    // Check if the input is a number
                    if (isNaN(input)) {
                        return 'Role ID should be a number.';
                    }
                    // If both conditions pass, return true to signify valid input
                    return true;
                },
            },
        ]);

        const sql = `UPDATE employee SET role_id = ${promptFurtherDetails.role} WHERE id = ${promptFurtherDetails.employee};`;
        const result = await executeQuery(sql);
        const data = console.table(result.rows);

        return data;
    }
}

export default startMenu;