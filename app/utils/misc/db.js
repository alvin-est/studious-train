/* Using ES6 syntax */
// Import required modules
import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';

// Create a new pool with the connection details
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// This function will take the command from the menu along with the parameters and pass on the SQL query to be executed
async function dbHelper(command, paramsObj) {
    switch (command) {
        case 'viewDepartments':
            return executeQuery(`SELECT * FROM department;`);
        case 'viewRoles':
            return executeQuery(`SELECT * FROM role;`);
        case 'viewEmployees':
            return executeQuery(`SELECT * FROM employee;`);
        default:
            return;
    }

};

// This will take an SQL query and execute it
async function executeQuery(sql) {
    const client = await pool.connect();
    try {
        const result = await client.query(sql);
        const data = result.rows;
        return console.table(data);
    }
    catch (err) {
        console.error('Failed to execute query:', err);
    }
    finally {
        client.release();
    }
}


export default dbHelper;