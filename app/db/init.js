const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { Pool } = require('pg');


async function runSQL(fileName) {
    const pool = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    });

    const filePath = path.join(__dirname, `queries/${fileName}`);
    // console.log(`Attempting to read from: ${filePath}`);
    const sql = fs.readFileSync(filePath, 'utf-8').toString();
    const client = await pool.connect();

    try {
        await client.query(sql);
        console.log(`Successfully ran ${fileName}`);
    }
    catch (err) {
        console.error(`Failed to run ${fileName}`, err);
    }
    finally {
        client.release();
    }
}

async function dropDatabase() {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: 'postgres', // or any database where you have privilege to drop other databases
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    });

    const client = await pool.connect();
    try {
        // Ensure no transaction block is active
        await client.query('BEGIN;');
        await client.query('COMMIT;');
        
        // Read and execute the drop database command
        const dropDBQuery = fs.readFileSync(path.join(__dirname, 'queries/drop.sql'), 'utf-8');
        await client.query(dropDBQuery);
        console.log('Database successfully dropped');
    } catch (err) {
        console.error('Failed to drop database:', err);
    } finally {
        client.release(); // Release the client back to the pool        
    }
}

async function createDatabase() {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: 'postgres', // or any database where you have privilege to create other databases
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    });

    const client = await pool.connect();
    try {
        // Ensure no transaction block is active
        await client.query('BEGIN;');
        await client.query('COMMIT;');
        
        // Read and execute the drop database command
        const createDBQuery = fs.readFileSync(path.join(__dirname, 'queries/create.sql'), 'utf-8');
        await client.query(createDBQuery);
        console.log('Database successfully created');
    } catch (err) {
        console.error('Failed to create database:', err);
    } finally {
        client.release(); // Release the client back to the pool        
    }
}

async function init() {
    // Drop and create the database
    await dropDatabase();
    await createDatabase();

    // Run the schema and seeds
    try {
        await runSQL('schema.sql');
        await runSQL('seeds.sql');
        console.log('Database initialised!');
    }
    catch (err) {
        console.error('Failed to initialise database', err);
    }
    finally {
        process.exit();
    }

}

init();