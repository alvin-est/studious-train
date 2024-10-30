const { Pool } = require('pg');
require('dotenv').config();

// Set up the database connection pool with environment variables
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // Configuration for pool behavior
    max: 10,              // Maximum number of connections in the pool
    idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
    connectionTimeoutMillis: 2000 // Give up on connection attempt after 2 seconds
});

module.exports = {
    // Function to execute SQL queries
    query: async (sql, params) => {
        const client = await pool.connect();
        try {
            // Execute the SQL query with parameters and return results
            const result = await client.query(sql, params);
            // Return only the rows from the result
            return result.rows;
        } finally {
            // Always release the client back to the pool
            client.release();
        }
    },
    
    // Function to get a connection directly
    getConnection: async () => {
        // Retrieve a client from the pool
        return await pool.connect();
    }
};