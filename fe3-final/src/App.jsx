import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Themecontext , { themes } from "./Context/ThemeContext"
import React , { useEffect, useState } from 'react'


function App() {


  const [theme, setTheme] = useState(themes.dark)

  let them = themes.dark

  useEffect((them)=>{
    sessionStorage.getItem('theme') === 'themes.light' ? them = themes.light : them = themes.dark
    setTheme(them)
  },[])


  const handleChangeTheme = () => {
    if (theme === themes.light){
      setTheme(themes.dark)
      sessionStorage.setItem('theme', 'themes.dark')      
    } 
    if (theme === themes.dark){
      setTheme(themes.light)
      sessionStorage.setItem('theme', 'themes.light')  
    } 
  }

  return (
    <Themecontext.Provider value={{theme, handleChangeTheme}}>
      <div className="App" style={{background: theme.background, color:theme.font}}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
    </Themecontext.Provider>
  )
}

export default App
