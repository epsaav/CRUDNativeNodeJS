import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import {deleteTask} from '../api/TasksRequest'
import {useNavigation} from '@react-navigation/native'

const TaskItem = ({item,loadTasks}) => {

  const navigation= useNavigation();

  const handleDelete = async (id)=>{
      const res = await deleteTask(id); 
      loadTasks();
  }
  const handleEdit = (id)=>{
     // console.log('Editando el id' + id);
      navigation.navigate('TaskFormScreen',{id:id});
  }

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemText}>{item.description}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={()=> handleDelete(item.id)}>
          <Text style={styles.deleteStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.editStyle} onPress={()=>{handleEdit(item.id)}}>Edit</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles= StyleSheet.create({
    itemContainer : {
        backgroundColor: '#FADC32',
        padding: 20,
        marginVertical: 8,
        borderRadius : 15,
        height: 150,
    },
    itemTitle:{
        fontWeight: 'bold',
        fontSize: 18
    },
    itemText: {
        color: '#6D6D69',
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical :15
    },
    deleteStyle: {
      backgroundColor: '#A40B01',
      padding: 8,
      color:'#ffff',
      fontWeight: 'bold',
      width:70
    },
    editStyle: {
      backgroundColor: '#02244B',
      padding: 8,
      color:'#ffff',
      fontWeight: 'bold',
      width:70,
      textAlign:'center'
      
    },
    buttonsContainer: {
      justifyContent:'space-between',
      display:'flex',
      flexDirection: 'row',
      width:'70%',
      alignSelf:'center',
      marginHorizontal:15
    }
})

export default TaskItem