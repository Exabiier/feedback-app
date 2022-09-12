import React from 'react'
import {useState} from 'react'

export default function Feedbackitem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item')

// const handleClick = () => {setRating((prev) => {return prev + 1})}

  return (
    <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
           
        </div>      
  )
}

{/* <button onClick={handleClick}>Click</button> */}
