import {useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import Card from './shared/Cards'
import React from 'react'
import { FaTerminal } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function feedbackForm() {
    const {addFeedback,feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const {text, setText} = useState('')
    const {rating, setRating}= useState(10)
    const {btnDisabled, setBtnDisabled} = useState(true)
    const {message, setTMessage} = useState('')

   useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
   },[feedbackEdit])


    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setTMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setTMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else{
            setTMessage(null)
            setBtnDisabled(true)
        }
        setText(e.target.value)
    }

const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback =  {
            text: text,
            rating,
        }
        if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else{
            addFeedback(newFeedback)
        }
        addFeedback(newFeedback)

        setText('')

    }
}


  return (
    <Card>
        <form>
            <h2 onSubmit={handleSubmit}>
                How would you rate your service with us?
            </h2>
            <RatingSelect select ={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange}  type="text" placeholder="Write a review" value={text}/>
                <button type="submit">send</button>
                <Button type='sumbit' isDisabled={btnDisabled}></Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
  )
}

export default feedbackForm