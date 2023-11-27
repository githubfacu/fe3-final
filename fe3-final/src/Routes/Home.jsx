import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import '../Styles/Home.css'


const Home = () => {

  const [psychoList, setPsychoList] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'


  useEffect(() => {
      axios(url)
      .then(res => {setPsychoList(res.data)})
      .catch(err=>{console.log(err)})
  }, [])


  return (
      <main className="main">
        <h1>Home</h1>
        <div className='card-grid'>
          {psychoList.map(psycho => <Card key={psycho.id} name={psycho.name} username={psycho.username} id={psycho.id}/>)}
        </div>
      </main>
  )
}

export default Home