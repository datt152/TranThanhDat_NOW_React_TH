"use client"
import { useReducer } from "react"
import { createStore } from "redux"
import { Provider, useDispatch, useSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import "./counter_app.css"

// =============================================
// IMPLEMENTATION 1: useReducer
// =============================================

// Step 1: Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    default:
      return state
  }
}

// Counter component using useReducer
function UseReducerCounter() {
  // Initialize useReducer with our reducer function and initial state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <div className="counter-container">
      <h2>Implementation 1: useReducer</h2>
      <div className="counter-display">{state.count}</div>
      <div className="counter-buttons">
        <button onClick={() => dispatch({ type: "DECREMENT" })} className="counter-button decrement">
          -
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })} className="counter-button increment">
          +
        </button>
      </div>
      <div className="counter-explanation">
        <p>
          Using React's built-in <code>useReducer</code> hook
        </p>
        <p>State is local to this component</p>
      </div>
    </div>
  )
}

// =============================================
// IMPLEMENTATION 2: Redux with Pure Reducer
// =============================================

// Step 2: Create a pure reducer function for Redux
function pureCounterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    default:
      return state
  }
}

// Create Redux store with our pure reducer
const reduxStore = createStore(pureCounterReducer)

// Counter component using Redux
function ReduxCounter() {
  // Use Redux hooks to access state and dispatch
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className="counter-container">
      <h2>Implementation 2: Redux</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => dispatch({ type: "DECREMENT" })} className="counter-button decrement">
          -
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })} className="counter-button increment">
          +
        </button>
      </div>
      <div className="counter-explanation">
        <p>Using Redux with a pure reducer function</p>
        <p>State is managed by the Redux store</p>
      </div>
    </div>
  )
}

// =============================================
// IMPLEMENTATION 3: Redux Toolkit
// =============================================

// Step 3: Create a slice with Redux Toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

// Extract the action creators and reducer
const { increment, decrement } = counterSlice.actions

// Create Redux store with Redux Toolkit
const toolkitStore = configureStore({
  reducer: counterSlice.reducer,
})

// Counter component using Redux Toolkit
function ReduxToolkitCounter() {
  // Use Redux hooks to access state and dispatch
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className="counter-container">
      <h2>Implementation 3: Redux Toolkit</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => dispatch(decrement())} className="counter-button decrement">
          -
        </button>
        <button onClick={() => dispatch(increment())} className="counter-button increment">
          +
        </button>
      </div>
      <div className="counter-explanation">
        <p>
          Using Redux Toolkit with <code>createSlice</code>
        </p>
        <p>Simplified Redux with less boilerplate</p>
      </div>
    </div>
  )
}

// Main App Component
export default function CounterApp() {
  return (
    <div className="app-container">
      <h1 className="app-title">Counter App: Three Implementations</h1>

      {/* Implementation 1: useReducer */}
      <UseReducerCounter />

      {/* Implementation 2: Redux */}
      <Provider store={reduxStore}>
        <ReduxCounter />
      </Provider>

      {/* Implementation 3: Redux Toolkit */}
      <Provider store={toolkitStore}>
        <ReduxToolkitCounter />
      </Provider>
    </div>
  )
}
