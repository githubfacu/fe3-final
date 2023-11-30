import React , { useState , useContext } from "react"
import ThemeContext from '../Context/ThemeContext'

const Form = () => {

  const {theme} = useContext(ThemeContext)

  const [user, setUser] = useState({
    fullName: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(user.fullName.length > 5 && user.email.length > 5 && user.email.includes('@')){
      console.log(`FullName: ${user.fullName} \nEmail: ${user.email}`)        
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }

  }

  return (
    <div className="contact-form">
      {!show && 
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full-Name" value={user.fullName} onChange={(event) => setUser({...user, fullName: event.target.value.trim()})}/>
          <input type="text" placeholder="Email" value={user.email} onChange={(event) => setUser({...user, email: event.target.value.trim()})}/>
          <button style={{background: theme.font, color: theme.background}}>Send</button>
        </form>}
        {show && <h4>Thanks {user.fullName} We will contact you as soon as possible via email</h4> }
        {error && <h5 style={{color: 'red', marginTop: '1.3rem'}}>Please check your information again</h5>}
    </div>
  )
}

export default Form
