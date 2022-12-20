import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTodo } from './ToDoSlice'

const AddToDo = () => {
  const [text, setText] = useState()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder='Todo'
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title='Add' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 2,
    width: 200
  },
  input: {
    backgroundColor: 'ghostwhite'
  }
})

export default AddToDo