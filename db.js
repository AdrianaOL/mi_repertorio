const { Pool } = require('pg')

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'repertorio_db',
   password: '12616027',
   port: 5432,
})

module.exports = pool