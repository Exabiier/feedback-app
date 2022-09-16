import {useState} from 'react'
import Button from './shared/Button'
import Card from './shared/Cards'
import React from 'react'
import { FaTerminal } from 'react-icons/fa'

function feedbackForm() {
    const {text, setText} = useState('')
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
  return (
    <Card>
        <form>
            <h2>
                How would you rate your service with us?
            </h2>
            {/*@todo - rating select component*/}
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