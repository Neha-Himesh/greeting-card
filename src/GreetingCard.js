import React from 'react'

function GreetingCard({title,message,name}) {
  return (
    <div className='card' style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <h2>{title}</h2>
        <p>{message}</p>
        <p><strong>- {name}</strong></p>
    </div>
  )
}

export default GreetingCard