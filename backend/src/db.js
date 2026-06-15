const mysql = require('mysql2/promise');

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

const pool = mysql.createPool({
  host: requiredEnv('MYSQL_HOST'),
  port: Number(process.env.MYSQL_PORT ?? 3306),
  user: requiredEnv('MYSQL_USER'),
  password: requiredEnv('MYSQL_PASSWORD'),
  database: requiredEnv('MYSQL_DATABASE'),
  waitForConnections: true,
  connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT ?? 10),
  queueLimit: 0
});

async function testConnection() {
  const [rows] = await pool.query('SELECT 1 AS ok');
  return rows?.[0]?.ok === 1;
}

module.exports = {
  pool,
  testConnection
};
