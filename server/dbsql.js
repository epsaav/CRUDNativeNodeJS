import sql from 'mssql'

const dbSettings = {
    user: "sa",
    password: "Str0ngPa$$w0rd",
    server:"localhost",
    database:"tasksDB",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}


 export async function getConnection(){
     try{
            const pool= await sql.connect(dbSettings);
            return pool;
     }
     catch(error){
         console.error(error);
     }

}

export {sql}
