
import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const NewLink = ()=>{
  let [title, setTitle] = useState('')
  let [username, setUsername] = useState('')
    const params = useParams()

    const handleSubmit = (e) =>{
      e.preventDefault()
      let newLink = {title, username}
      console.log(newLink)
    }
    return (
        <div>
          <h1>New Links</h1>
          {/* <Link to='/links'>Links</Link> */}
          <p>{params.id ? 'Update Form':'New Links Form'}</p>
          {/* <p>id: {params.id ? params.id :'No id'}</p> */}
          <form onSubmit={handleSubmit}>
            <p> Title:</p>
            <input value={title} on change={(e)=>setTitle(e.target.value)}/>
            <p> Username:</p>
            <input value={username} on change={(e)=>setUsername(e.target.value)}/>
            <button>add</button>
          </form>
        </div>
    )
}

export default NewLink