import React from 'react'

const Name = ({person}) => {
    const {name, age, image} = person
  return (
    <div className="person">
        <div className='image'>
            <img src={image} alt={name}/>
        </div>
        <div>
            <p className='name'>{name}</p>
            <p className='age'>{age} years</p>
        </div>
    </div>
  )
}

export default Name