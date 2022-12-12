import { View, Text,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = (navigation) => {

  return (   
      <Layout>
          <TaskList />
      </Layout>
  )
}

export default HomeScreen