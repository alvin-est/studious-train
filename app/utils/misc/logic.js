// Import required modules
import db from './db.js';

async function route(params) {
    // Route user selection to helper functions and return the response
    
    let code;

    switch (params.response) {
        case 'View all departments':
            code = 'viewDepartments';
            break;
        case 'View all roles':
            code = 'viewRoles';
            break;
        case 'View all employees':
            code = 'viewEmployees';
            break;
        case 'Add a department':
            code = 'addDepartment';
            break;
        case 'Add a role':
            code = 'addRole';
            break;
        case 'Add an employee':
            code = 'addEmployee';
            break;
        case 'Update an employee\'s role':
            code = 'updateEmployeeRole';
            break;
        default:
            return;
    }

    const result = await db(code, params);
    return result;
}

export default route;