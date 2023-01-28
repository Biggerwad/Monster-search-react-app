import React from 'react'

function Card({current}) {
  return (
    <div className='card'>
       <img src={`https://robohash.org/2${current.id}?size=150x150&set=set2`} alt="monster" />
      <h2>{current.name}</h2>
      <p>{current.email}</p>
    </div>
  )
}

export default Card
