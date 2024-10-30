const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres', // or any database where you have privilege to drop other databases
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

async function dropDatabase() {
    const client = await pool.connect();
    try {
        // Ensure no transaction block is active
        await client.query('BEGIN;');
        await client.query('COMMIT;');
        
        // Read and execute the drop database command
        const dropDBQuery = fs.readFileSync(path.join(__dirname, 'drop.sql'), 'utf-8');
        await client.query(dropDBQuery);
        console.log('Database successfully dropped');
    } catch (err) {
        console.error('Failed to drop database:', err);
    } finally {
        client.release(); // Release the client back to the pool        
    }
}

dropDatabase();
process.exit(); // Exit the process after dropping the database