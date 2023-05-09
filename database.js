import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();


const conn = mysql.createConnection({
    host:process.env.Host,
    user:process.env.Username,
    password:process.env.Password,
    database:process.env.database
})

conn.connect(function(err){
    if(err) throw err;
    console.log('connection successfull');
})

export default conn;