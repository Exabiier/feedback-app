import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Cards'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)


  // const handleClick = (id) => (
  //   console.log(id)
  // )

    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')

// const handleClick = () => {setRating((prev) => {return prev + 1})}

  return (
    <Card>
            <div className="num-display">{item.rating}</div>
             <button onClick={() =>deleteFeedback(item.id)} className="close">
             {/* <button onClick={() =>handleClick(item.id)} className="close"> */}
              <FaTimes color="purple"/>
            </button> 
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
