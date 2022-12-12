import React from 'react'
import {Text,TouchableOpacity} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App = ()=> {

  const Stack = createNativeStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options = {({navigation})=>({headerTitleStyle: {fontSize: 30,color: 'gray'},  title: 'Post Its',
        headerRight: ()=>(
            <TouchableOpacity onPress={()=>{navigation.navigate("TaskFormScreen")}}>
                  <Text style={{fontSize: 20}}>New</Text>
            </TouchableOpacity>
        ),
        })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;