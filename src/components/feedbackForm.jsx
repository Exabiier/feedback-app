import {useState} from 'react'
import Button from './shared/Button'
import Card from './shared/Cards'
import React from 'react'
import { FaTerminal } from 'react-icons/fa'

function feedbackForm({handleAdd}) {
    const {text, setText} = useState('')
    const {rating, setRating}= useState(10)
    const {btnDisabled, setBtnDisabled} = useState(true)
    const {message, setTMessage} = useState('')


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
        
        handleAdd(newFeedback)

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