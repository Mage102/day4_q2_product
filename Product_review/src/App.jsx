import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import FeedbackForm from "./components/FeedbackForm";
import ReviewDisplay from "./components/ReviewDisplay";

function App() {
  // const [count, setCount] = useState(0)
  const [feedback, setFeedback] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <FeedbackForm onSubmit={setFeedback} />
      <ReviewDisplay feedback={feedback} />
    </div>
  )
}

export default App
