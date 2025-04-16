"use client"
import { Provider, useDispatch, useSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { useState } from "react"
import "./todo_app.css"

// 1. State: danh sách công việc
// 2. Actions: addTodo, toggleTodo, removeTodo
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

// Export actions
const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

// Configure Redux store
const store = configureStore({
  reducer: todosSlice.reducer,
})

// Main TodoApp component
function TodoList() {
  const todos = useSelector((state) => state)
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo("")
    }
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">Danh sách công việc</h1>

      {/* Form thêm công việc */}
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập công việc mới..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Thêm
        </button>
      </form>

      {/* Hiển thị danh sách công việc */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="todo-checkbox"
              />
              <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
            </div>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-button">
              ×
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty-message">Chưa có công việc nào. Hãy thêm công việc mới!</p>}
    </div>
  )
}

// Root component with Provider
export default function TodoApp() {
  return (
    <Provider store={store}>
      <main className="main-container">
        <TodoList />
      </main>
    </Provider>
  )
}
