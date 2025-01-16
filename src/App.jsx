import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import SignUp from './Component/SignUp'
import ErrorPage from './Component/Error'

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route  path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
