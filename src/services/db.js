const mysql = require('mysql2/promise');

 const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT } = process.env;

 module.exports = async () => {
   const connection = await mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'password',
     port: 3307,
     database: 'music_library_test',
   });

   return connection;
 };