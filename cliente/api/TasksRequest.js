import axios from 'axios'

export const getTasks = async ()=>{
    try{
        //const APIAdress = 'http://192.168.1.67:4000'
         const res= await axios.get('http://192.168.1.68:4000/tasks');
        // const res= await fetch('http://192.168.1.67:4000/tasks');
        //return await res.json();
        return res;
    }
    catch(error){
        console.error(error);
    }
}

export const getTask = (id)=>{
    try{
        console.log(id);
        const res = axios.get(`http://192.168.1.68:4000/tasks/${id}`)
        return res
    }
    catch(error){
        console.error(error);
    };
}

export const createTask = async (task)=>{
    try{
        const res = await axios.post('http://192.168.1.68:4000/tasks',task)
        return res;
    }
    catch(error){
        console.error(error);
    };    

}

export const deleteTask = async (id)=>{
    try{
       // console.log('delete' + id );
        const res= await axios.delete(`http://192.168.1.68:4000/tasks/${id}`);

        return res;
    }
    catch(error){
        console.error(error);
    }
}

export const updateTask = async (id,task)=>{
    try{
         const res=  await axios.put(`http://192.168.1.68:4000/tasks/${id}`,task);
         return res;
    }
    catch(error){
        console.error(error);
    }
}
