import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Samantha","Tollywood","Bollywood","Hollywood","Love","Comedy","StandUp","Cooking","React","Javascript"]
  return (
    <div>
       <ul className='flex'>
                {list.map((item, index) => (
                    <li key={index}><Button name={item}/></li>
                ))}
            </ul>
    </div>
  )
}

export default ButtonList