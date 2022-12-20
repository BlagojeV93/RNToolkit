const { configureStore } = require("@reduxjs/toolkit")
import ToDoSlice from "./ToDoSlice"

const reducer = {
  todos: ToDoSlice
}

const store = configureStore({
  reducer,
  devTools: true
})

export default store