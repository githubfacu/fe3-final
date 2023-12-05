import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


const Card = ({ name, username, id }) => {

  const image = ['../../images/anime-0.webp', '../../images/anime-1.webp','../../images/anime-3.png', '../../images/anime-4.webp', '../../images/anime-6.webp', '../../images/anime-2.webp', '../../images/anime-5.webp', '../../images/anime-8.jpg', '../../images/anime-9.jpg','../../images/anime-7.jpg']

  const userPayload = {
    id: id,
    img: image,
    name: name,
    username: username
  }

  const addFav = ()=>{
    localStorage.setItem(`user${id}`, JSON.stringify(userPayload))
    Swal.fire({
      title: `${name} is added to favorites`,
      background: 'rgba(24, 24, 24, .9)',
      color: 'grey',
      confirmButtonColor:'black',
    })
  }

  const removeFav = ()=>{
    Swal.fire({
      background: 'rgba(24, 24, 24, .9)',
      title: `Remove ${name} from favorites?`,
      color: 'grey',
      confirmButtonColor: 'black', 
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(`user${id}`)
        location.reload()
      }
    })
  }

  return (
    <div className="card">
        
        <img src={image[id-1]} alt="doctor" />

        <Link to={'/detail/'+id}>
          <h3>{name}</h3>
          <h4>{username}</h4>        
        </Link>

        {window.location.pathname === '/' ? <button onClick={addFav} className="favButton">⭐
        </button> : <button onClick={removeFav} className="favButton">💔
        </button>}

    </div>
  )
}

export default Card;
