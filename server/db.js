import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    password:"R@hasy4",
    host:"localhost",
    port: 5432,
    database: "taskmanager"
});

export default pool;