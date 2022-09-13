import React from 'react'
import Card from './shared/Cards'

export default function FeedbackItem({item}) {

    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')

// const handleClick = () => {setRating((prev) => {return prev + 1})}

  return (
    <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
           
      </Card>      
  )
}

{/* <button onClick={handleClick}>Click</button> */}
