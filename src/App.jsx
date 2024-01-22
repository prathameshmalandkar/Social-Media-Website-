import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/home/home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Rgister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
        <Home/>
      </div>
    </>
  )
}

export default App
