import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const todos = useSelector(state => state.todos)

  if (!todos.length) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Todo List</Text>
      {todos.map((todo, i) => (
        <Text style={styles.todoText} key={todo.id}>{`${i + 1}. ${todo.text}`}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
   margin: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  todoText: {
    margin: 4
  }
})

export default ToDoList