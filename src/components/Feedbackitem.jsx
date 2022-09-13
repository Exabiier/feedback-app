import React from 'react'
import Card from './shared/Cards'
import PropTypes from 'prop-types'

export default function FeedbackItem({item}) {

    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')

// const handleClick = () => {setRating((prev) => {return prev + 1})}

  return (
    <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
           
      </Card>      
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


{/* <button onClick={handleClick}>Click</button> */}
