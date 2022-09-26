import React from 'react'
import {useContext} from 'react'
import FeedbackItem from './Feedbackitem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
const{feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback Yet</p>
    }

  return <div className='feedback-list'>
    {feedback.map((item)=> (
        <FeedbackItem Key={item.id} item={item}
        />
    ))}
  </div>
  
}



export default FeedbackList