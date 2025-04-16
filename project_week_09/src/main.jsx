import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterApp from './components/counter_app.jsx'
import TodoApp from './components/todo_app.jsx'
import ThemeApp from './components/theme_app.jsx'
import ShoppingCart from './components/shopping_cart.jsx'
import AdminApp from './components/admin_app.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CounterApp/> */}
    {/* <TodoApp/> */}
    {/* <ThemeApp/> */}
    {/* <ShoppingCart/> */}
    <AdminApp/>
  </StrictMode>,
)
