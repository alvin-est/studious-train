async function route(params) {
    // Route user selection to helper functions
    switch (params) {
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'View all employees':
            viewEmployees();
            break;
        case 'Add a department':
            addDepartment();
            break;
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update an employee\'s role':
            updateEmployeeRole();
            break;
        default:
            return 'exit';
    }
}

/* Handle all logic here */

async function viewDepartments() {
    console.log('Viewing all departments...');
    return;
}

async function viewRoles() {
    console.log('Viewing all roles...');
    return;
}

async function viewEmployees() {
    console.log('Viewing all employees...');
    return;
}

async function addDepartment() {
    console.log('Adding a department...');
    return;
}

async function addRole() {
    console.log('Adding a role...');
    return;
}

async function addEmployee() {
    console.log('Adding an employee...');
    return;
}

async function updateEmployeeRole() {
    console.log('Updating an employee\'s role...');
    return;
}



export default route;