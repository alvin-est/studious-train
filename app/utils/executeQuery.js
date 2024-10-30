/* Using ES6 syntax */
// Import required modules
import pg from 'pg';
const { Pool } = pg;
import 'dotenv/config';

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// This will take an SQL query and execute it
export default async function executeQuery(sql) {
    const client = await pool.connect();
    try {
        const result = await client.query(sql);
        // const data = result.rows;
        // console.log('Executed SQL!')
        return result;
    }
    catch (err) {
        console.error('Failed to execute query:', err);
    }
    finally {
        client.release();
    }
}