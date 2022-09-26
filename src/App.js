
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom' 
import  Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import feedbackStats from './components/feedbackStats'
import feedbackForm from './components/feedbackForm'
import AbouticonLink from './components/AbouticonLink'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {




return( 
<FeedbackProvider>
    <Router>
        <Header />
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <feedbackForm />
                    <feedbackStats />
                    <FeedbackList />
                    </>
                }>  
                </Route>
                <Route path='/about' element={<AboutPage />} />

                </Routes>
                <AbouticonLink />
            </div>
    </Router>
</FeedbackProvider>
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