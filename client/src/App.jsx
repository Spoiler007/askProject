import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About'
import Header from './components/Header';

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;