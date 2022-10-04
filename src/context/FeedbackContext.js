import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext =  createContext()

export const FeedbackProvider = ({children}) => {
    const[feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this item is from context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this item is from context 2',
            rating: 9
        },
        {
            id: 3,
            text: 'this item is from context 3',
            rating: 7
        }


    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,})

        // to add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])    
    }

    // delete feedback
const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //  update the feedback item
    const updateFeedback  = (id, upItem) => {
        setFeedback(feedback.map((item)=> (item.id === id ? {...item, ...upItem} : item)))
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true 
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
       {children} 
    </FeedbackContext.Provider>
}

export default FeedbackContext