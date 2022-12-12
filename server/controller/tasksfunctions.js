import {getConnection,sql} from '../dbsql.js'


export const getTasks= async(req,res)=> {
    try{
          const  pool = await getConnection();
           const result = await pool.request().query('SELECT * FROM tasks')
           res.json(result);
    }
    catch(error){
        console.error(error);
    }
}

export const getTask = async (req,res)=> {
    try{
       const pool= await getConnection();
        const result = await pool.request().query(`SELECT * FROM tasks WHERE ID=${req.params.id}` )
        res.json(result);
    }
    catch(error){
        console.error(error);
    }
}

export const createTask = async (req,res)=>{
    try{
       const pool = await getConnection();
       const {title, description} = req.body;
       const result = await pool.request()
                      .input('title',sql.VarChar,title)
                      .input('description', sql.VarChar,description)
                      .query('INSERT INTO Tasks(title, description) VALUES(@title, @description)')

      res.json(result);
    }
    catch(error){
        console.error(error);
    }
}

export const updateTask = async (req,res)=> {
    try{
        const pool = await getConnection();
        const {title, description} = req.body;
        const result = await pool.request()
                           .input("title", sql.VarChar, title)
                           .input("description",sql.VarChar,description)
                           .query(`UPDATE TASKS SET title = @title, description= @description WHERE id=${req.params.id}`);
        res.json(result);
    }
    catch(error){
        console.error(error);
    }
}

export const deleteTask = async (req,res)=>{
    try{
         const pool = await getConnection();
        const result = await pool.request()
                    .query(`Delete tasks where id=${req.params.id}`);
        res.json(result);
    }
    catch(error){
        console.error(result);
    }
}