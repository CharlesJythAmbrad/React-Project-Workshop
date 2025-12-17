import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/user/Home.jsx'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import About from './pages/user/About.jsx'
import Signup from './components/SignUpForm.jsx'
import Admin_login from './pages/admin/Admin_login.jsx'
function App() {

  return (
    <>
    {/* */}
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/admin_login' element={<Admin_login/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
