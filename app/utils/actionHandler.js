import inquirer from "inquirer";
import executeQuery from "./executeQuery.js";

// Generic function to handle SQL queries and display results
async function handleQuery(sql) {
    const result = await executeQuery(sql);
    return console.table(result.rows);
}

export async function viewAllDepartments() {
    const sql = `SELECT * FROM department`;
    return handleQuery(sql);
}

export async function viewAllRoles() {
    const sql = `SELECT * FROM role`;
    return handleQuery(sql);
}

export async function viewAllEmployees() {
    const sql = `SELECT * FROM employee`;
    return handleQuery(sql);
}

export async function addDepartment() {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:',
            validate: validateLength('Department', 30)
        }
    ]);

    const sql = `INSERT INTO department (name) VALUES ('${name}');`;
    await executeQuery(sql);
    console.log(`Successfully added the ${name} department!`);
    return;
}

export async function addRole() {
    const { name, salary, department } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the role:',
            validate: validateLength('Role', 30)
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:',
            validate: validateNumber('Salary')
        },
        {
            type: 'input',
            name: 'department',
            message: 'Enter the department ID for the role:',
            validate: validateNumber('Department ID')
        }
    ]);

    const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${name}', ${salary}, ${department});`;
    await executeQuery(sql);
    console.log(`Successfully added the ${name} role in the ${department} department! The starting salary is ${salary}`);
    return;
}

export async function addEmployee() {
    const { first_name, last_name, role, manager } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:',
            validate: validateLength('First name', 30)
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:',
            validate: validateLength('Last name', 30)
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter the role ID for the employee:',
            validate: validateNumber('Role ID')
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Enter the manager ID for the employee:',
            validate: (input) => { if (isNaN(input)) return `Manager ID should be a number.`; return true; }
        }
    ]);

    // Make an exception for Manager ID so it can be null
    const managerConditional = manager === '' ? 'null' : manager;
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role}, ${managerConditional});`;
    await executeQuery(sql);
    console.log(`Employee ${first_name} ${last_name} has just been hired!`)
    return;
}

export async function updateEmployeeRole() {
    const { employee, role } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Enter the employee ID:',
            validate: validateNumber('Employee ID')
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter the new role ID for the employee:',
            validate: validateNumber('Role ID')
        }
    ]);

    const sql = `UPDATE employee SET role_id = ${role} WHERE id = ${employee};`;
    await executeQuery(sql);
    console.log(`Succesfully updated the employee's role.`)
    return;
}

function validateLength(name, maxLength) {
    return function(input) {
        if (!input || input.trim() === '') return `${name} cannot be empty.`;
        if (input.length > maxLength) return `${name} should be ${maxLength} characters or less.`;
        return true;
    }
}

function validateNumber(name) {
    return function(input) {

        if (!input || input.trim() === '') return `${name} cannot be empty.`;

        if (isNaN(input)) return `${name} should be a number.`;
        return true;
    }
}

/* Is it Easter yet? */
export async function exitApp() {
    // Returns the magic word to portal out of here! D:
    return 'Wubbalubbadubdubification';
}