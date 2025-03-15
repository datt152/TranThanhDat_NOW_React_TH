import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from '../component/Main/main.jsx'
import Header from '../component/Header/Header.jsx'
import Footer from '../component/Footer/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
