import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const conn = mysql.createConnection({
    host:"mysql-127751-0.cloudclusters.net",
    port:"10154",
    user:"admin",
    password:"RZvwMvwi",
    database:"curd",
})

console.log(conn);

conn.connect(function(err){
    if(err) throw err;
    console.log('connection successfull');
})

export default conn;