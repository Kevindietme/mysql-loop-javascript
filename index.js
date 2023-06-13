import mysql from 'mysql2';
import { dbCredentials } from './secrets.js';

const db = mysql.createConnection(dbCredentials);

const query = "SELECT * FROM movies";

//for loop 

db.query(
    query,
    function(err, results){
    console.log(err);
    console.table(results);

    for (let i=0; i<results.length; i++) 
      console.log(results[i]);
    }

        db.destroy();
    }
)

