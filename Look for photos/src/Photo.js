import React from 'react'

const Photo = ({urls,likes,user}) => {
  const urlRegular=urls.regular
  const {name,profile_url,profile_image:{medium}}=user



  return <article className='photo'>
  <img src={urlRegular} alt='ceva'></img>
  <div className='photo-info '>
<div>
  <h4>{name}</h4>
  <p>{likes} likes</p>
</div>
<a href={profile_url}>
  <img src={medium} alt={name} className='user-img'></img>
</a>
  </div>

  </article>
}

export default Photo
