import {useState, useContext, useEffect} from 'react'
import React from 'react'
import FeedbackContext from '../context/FeedbackContext'


function RatingSelect({select}) {
    const {selected, setSelected} = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
      setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])


    const handleChange = (e) =>{
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    }

  return (
    <div>
        rating form
    </div>
  )
}

export default RatingSelect