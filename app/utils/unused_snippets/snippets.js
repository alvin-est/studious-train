    // Check if viewing, adding, or updating
    const boolView = (userSelection === 'viewDepartments') || (userSelection === 'viewRoles') || (userSelection === 'viewEmployees');
    const boolAdd = (userSelection === 'addDepartment') || (userSelection === 'addRole') || (userSelection === 'addEmployee');
    const boolUpdate = (userSelection === 'updateEmployeeRole');

    if(boolView) {
        viewUI(userSelection);
    }
    if(boolAdd) {

    }
    if(boolUpdate) {

    }


    validate: (input) => { if (isNaN(input)) return `Manager ID should be a number.`; return true; }
