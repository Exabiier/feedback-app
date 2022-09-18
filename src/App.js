import {v4 as uuidv4} from 'uuid'
import React from 'react'
import {useState} from 'react'
import  Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import feedbackStats from './components/feedbackStats'
import feedbackForm from './components/feedbackForm'
import FeedbackData from './data/Feedbackdata'


function App() {
const [feedback, setFeedback] = useState(FeedbackData)

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
    
}

return( 
<>
    <Header />
        <div className="container">
            <feedbackForm handleAdd={addFeedback}/>
            <feedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
</>
)
}



//     const title = "Blog Post";
//     const body = "This is my blog post";
//      const comments = [   
//         {id: 1, text: "Comment one"},
//         {id: 2, text: "Comment two"},
//         {id: 3, text: "Comment two"},
//      ]

//      const loading = false
//      const showComments = false

//      if(loading) return <h1>Loading....</h1>

// // return React.createElement('h1', {className: "nooooo"}, 'nooo')
// return (

        
//     <div className="container">
//         <h1>{title}</h1> 
//         <p>{body}</p> 
       
//     {showComments ? <div className="comments">
//     <h3> Comments ({comments.length})</h3>
//     <ul>
//         {comments.map((comments, index) => (
//             <li key={index}>{comments.text}</li>
//         ))}
//     </ul>

// </div> : null}



//     </div>    
//     )
// }
}
export default App