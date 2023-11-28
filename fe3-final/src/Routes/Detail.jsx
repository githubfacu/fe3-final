import React , { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Detail = () => {

  const [psycho, setPsycho] = useState({})
  const params = useParams()
  console.log(params)
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
 
  useEffect(()=> {
    axios(url)
    .then(res => setPsycho(res.data))
    .catch(err=>{console.log(err)})
  },[])

  return (
    <div style={{height: '100vh'}}>
      <h1>Official {params.id}</h1>
      <div className='detail'>
        <ul>
          <li>
            <p>NAME</p>
            <p>EMAIL</p>
            <p>PHONE</p>
            <p>WEBSITE</p>
          </li>
            <hr />
          <li>
            <p>{psycho.name}</p>
            <p>{psycho.email}</p>
            <p>{psycho.phone}</p>
            <p>{psycho.website}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Detail