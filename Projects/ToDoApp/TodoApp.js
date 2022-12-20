import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

const ToDoApp = () => {

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tiitle}>Todo App</Text>
      <AddToDo />
      <ToDoList />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  tiitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  }
})

export default ToDoApp