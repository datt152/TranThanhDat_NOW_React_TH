"use client"
import { Provider, useDispatch, useSelector } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import "./counter_app.css"

// 1. Create the counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// 2. Export the actions
const { increment, decrement } = counterSlice.actions

// 3. Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

// 4. Create the Counter component
function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Đếm số đơn giản</h2>
      </div>
      <div className="card-content">
        <div className="counter-container">
          <div className="counter-value">{count}</div>
          <div className="button-group">
            <button className="button button-outline" onClick={() => dispatch(decrement())}>
              <span className="button-icon">-</span>
              <span>Decrease</span>
            </button>
            <button className="button button-primary" onClick={() => dispatch(increment())}>
              <span className="button-icon">+</span>
              <span>Increase</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// 5. Create the main App component with Provider
export default function CounterApp() {
  return (
    <Provider store={store}>
      <main className="main-container">
        <div className="content-wrapper">
          <h1 className="page-title">Counter App</h1>
          <Counter />
        </div>
      </main>
    </Provider>
  )
}
