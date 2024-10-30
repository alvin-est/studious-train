import executeQuery from "./executeQuery.js"

export default async (userSelection) => {
    
    let result;

    switch(userSelection) {
        case 'viewDepartments':
            result = executeQuery(`SELECT * FROM department;`);
            break;
        case 'viewRoles':
            result = executeQuery(`SELECT * FROM role;`);
            break;
        case 'viewEmployees':
            result = executeQuery(`SELECT * FROM employee;`);
            break;
        default:
            return;
    }

    const data = result.rows;
    console.table(data);
}