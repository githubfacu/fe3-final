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

  let them = themes.dark

  const [theme, setTheme] = useState(them)

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

  const setBackground = () => {
    if (theme === themes.light){
      return `url('../../images/psy-pers2.png')`
    }
    if (theme === themes.dark){
      return `url('../../images/backgroundc10.png')`
    }
  }

  return (
    <Themecontext.Provider value={{theme, handleChangeTheme}}>
      <div className="App" style={{background: theme.background, backgroundImage: setBackground(), backgroundSize:theme.backgroundSize , color:theme.font}}>
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
