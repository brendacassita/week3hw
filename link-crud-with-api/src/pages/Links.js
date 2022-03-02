import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'

const Links = ()=>{
    //useContext always return object just destructor keys
    
    const { links, getLinks, createLink, updateLink , deleteLink} = useContext(DataContext)
    return (
        <div>
        <h1>Links Here:</h1>
        <div>{JSON.stringify(links)}</div>
        {/*
        comment .....map over links state for each individual link have a delete button
          let returnId = id.map((id)=>{
            return{id:id}
          })
        */}
    
        <button onClick={getLinks}>Get Links</button>
        <button onClick={()=>createLink( {title:'title here', username:'brendac'} )}>create link</button>
        <button onClick={()=>updateLink( {id:16, title:'UPDATED'} )}>update link</button>
        <button onClick={()=>deleteLink(53)}>delete link</button>
        </div>
    )
}
export default Links
