"use client"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { Provider, useDispatch, useSelector } from "react-redux"
import { Moon, Sun } from "lucide-react"
import "./theme_app.css"

// Create a theme slice with Redux Toolkit
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

// Extract the action creator
export const { toggleTheme } = themeSlice.actions

// Create Redux store with Redux Toolkit
const store = configureStore({
  reducer: themeSlice.reducer,
})

// Simple theme toggle component
function ThemeToggle() {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  return (
    <div className={`container ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div className="content">
        <h1>Chế độ hiển thị</h1>
        <p>Chế độ hiện tại: {darkMode ? "Tối" : "Sáng"}</p>

        <button
          className="toggle-button"
          onClick={() => dispatch(toggleTheme())}
          aria-label={darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{darkMode ? "Chế độ sáng" : "Chế độ tối"}</span>
        </button>
      </div>
    </div>
  )
}

// Root component with Provider
export default function SimpleThemeApp() {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  )
}
