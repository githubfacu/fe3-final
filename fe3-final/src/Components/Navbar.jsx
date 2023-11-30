import React , { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../Context/ThemeContext'


const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ThemeContext)



  return (
    
      <nav style={{backgroundImage: `url('../../images/HD-wallpaper-psycho-pass.jpg')`, color:theme.font}}>
        <h3 style={{color:'white'}}>PSYCHO_PASS</h3>
        <div className='routes'>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/favs'>Favs</Link>
          <button onClick={handleChangeTheme}>
            🔌
          </button>        
        </div>
      </nav>
  )
}

export default Navbar