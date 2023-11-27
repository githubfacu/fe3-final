import React from "react"
import Card from "../Components/Card"


const Favs = () => {

  const user1 = JSON.parse(localStorage.getItem('user1'))
  const user2 = JSON.parse(localStorage.getItem('user2'))
  const user3 = JSON.parse(localStorage.getItem('user3'))
  const user4 = JSON.parse(localStorage.getItem('user4'))
  const user5 = JSON.parse(localStorage.getItem('user5'))
  const user6 = JSON.parse(localStorage.getItem('user6'))
  const user7 = JSON.parse(localStorage.getItem('user7'))
  const user8 = JSON.parse(localStorage.getItem('user8'))
  const user9 = JSON.parse(localStorage.getItem('user9'))
  const user10 = JSON.parse(localStorage.getItem('user10'))

  return (
    <>
      <h1>Psycho Favs</h1>
      <div className="card-grid">
        {user1 && < Card key={user1.id} name={user1.name} username={user1.username} id={user1.id}/>}
        {user2 && < Card key={user2.id} name={user2.name} username={user2.username} id={user2.id}/>}
        {user3 && < Card key={user3.id} name={user3.name} username={user3.username} id={user3.id}/>}
        {user4 && < Card key={user4.id} name={user4.name} username={user4.username} id={user4.id}/>}
        {user5 && < Card key={user5.id} name={user5.name} username={user5.username} id={user5.id}/>}
        {user6 && < Card key={user6.id} name={user6.name} username={user6.username} id={user6.id}/>}
        {user7 && < Card key={user7.id} name={user7.name} username={user7.username} id={user7.id}/>}
        {user8 && < Card key={user8.id} name={user8.name} username={user8.username} id={user8.id}/>}
        {user9 && < Card key={user9.id} name={user9.name} username={user9.username} id={user9.id}/>}
        {user10 && < Card key={user10.id} name={user10.name} username={user10.username} id={user10.id}/>}
      </div>
    </>
  )
}

export default Favs;
