// import React from 'react'
import{usestate} from 'react'
import  Header from "./components/Header"
import Feedbackitem from "./components/Feedbackitem"
import FeedbackData from './data'


function App() {
const [feedback, setFeedback] = useState()


return( 
<>
    <Header />
        <div className="container">
            <Feedbackitem />
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

export default App