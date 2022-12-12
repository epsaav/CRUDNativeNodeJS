import { View, Text,FlatList } from 'react-native'
import React, { useState,useEffect} from 'react'
import TaskItem from './TaskItem'
import {getTasks} from '../api/TasksRequest'

useState


export const TaskList = () => {

const [datos,setDatos] = useState([]);

async function loadTasks(){
 const res = await getTasks();
  setDatos(res.data.recordset);
}

useEffect(()=>{
    loadTasks();
});


const renderItem = ({item})=>{
    //return <Text>{item.title}</Text>
    return (
      <TaskItem item ={item} loadTasks={()=>loadTasks()}/>)
    
}

  return (
    <FlatList style={{width: '80%'}} data={datos} 
    keyExtractor= {(item)=> item.id + ''}
    renderItem={renderItem} />
  )
}

export default TaskList