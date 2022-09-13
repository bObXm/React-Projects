import React ,{useContext}from 'react'
import {AppContext} from './context'

import { useGlobalContext } from './context'

const Stories = () => {
  const data=useContext(AppContext)
  const {isLoading,hits,nbPages,removeStory}=data
  
  

  if(isLoading){
    return  <div className='loading'></div>
  }

  return <section className='stories'>
    {hits.map((story)=>{
      const {objectID, title, num_comments,url, points, author}=story
      
        return <article key={objectID} className='story'>
        <h4 className='title'>{title}</h4>
        <p className='info'>{points} points by <span>{author}</span> | <span>{num_comments} comments</span></p>
        <a href={url} className='read-link' target='_blanck'>read moare</a>
        <button className='remove-btn' onClick={()=>{removeStory(objectID)}}>remove</button>
        
        </article>
    })}
  </section>
}

export default Stories
