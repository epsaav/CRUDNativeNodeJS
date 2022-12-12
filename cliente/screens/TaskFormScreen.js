import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import {createTask,getTask,updateTask} from '../api/TasksRequest'

const TaskFormScreen = ({navigation,route}) => {
  const [task,setTask] = useState({
    title:'',
    description: ''
  })
//console.log('parametro' + route.params.id)
  const handleChange = (name,value)=> setTask({...task,[name]:value})

  const handleSubmit = () => {
    if (route.params && route.params.id){
      const result = updateTask(route.params.id,task); 
    }
    else{
       const result=createTask(task);
    }
    setTask({});
    navigation.navigate('HomeScreen');
    //console.log(result);
  }

useEffect(()=>{
    if (route.params && route.params.id){
        navigation.setOptions({headerTitle: 'Edit Task'});
        (async()=>{
            const res = await getTask(route.params.id); 
            console.log(res.data.recordset[0].title);
            setTask({title: res.data.recordset[0].title, description: res.data.recordset[0].description});
        })();
    }
},[]);

  return (
    <Layout>
      <View style={styles.titleContainer}>
        <View style={styles.taskView}>
          <Text style={styles.taskText}>Title:</Text>
        <TextInput onChangeText={(text) =>{handleChange('title',text)}} style={styles.taskInput} placeholder='Write a Title of the tasks' placeholderTextColor='gray' value={task.title}/>
        </View>
        <View style={styles.taskView}>
        <Text style={styles.taskText}>Description:</Text>
          <TextInput  onChangeText={(text) =>{handleChange('description',text)}} style={styles.taskInput} placeholder='Write a Description of the task' placeholderTextColor='gray' value={task.description}/>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.taskButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

const styles= StyleSheet.create({
  titleContainer: {
    marginVertical:'40%',
    padding:20,
   
  },
  taskView:{
    padding:10,
  
  },
  taskInput : {
    backgroundColor: '#FADC32',
    padding: 10,
    color:'#090909',
    marginTop:5,
    width:300,
    fontSize:20,
    borderRadius:5
  },
  taskText : {
    color:'#ffff', fontSize:20
  },
  taskButton: {
    backgroundColor: '#148304',
    fontSize:20, 
    color:'#ffff',
    borderRadius:5,
    padding:10,
    width:'100%',
    alignItems:'center',
    textAlign:'center',
    marginTop:20,
    fontWeight: 'bold',
  }
});

export default TaskFormScreen