import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const conn = mysql.createConnection({
    host:process.env.Host,
    port:process.env.port,
    user:process.env.Username,
    password:process.env.Password,
    database:process.env.database,
})

console.log(conn);

conn.connect(function(err){
    if(err) throw err;
    console.log('connection successfull');
})

export default conn;