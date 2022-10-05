import React from 'react'
import {useContext} from 'react'
import FeedbackItem from './Feedbackitem'
import spinner from "../components/shared/spinner"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
const{feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && !feedback || feedback.length === 0){
        return <p>No feedback Yet</p>
    }

    return isLoading ? <spinner /> : <div className='feedback-list'>
    {feedback.map((item)=> (
        <FeedbackItem Key={item.id} item={item}
        />
    ))}
  </div>
}



export default FeedbackList