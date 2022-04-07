import * as React from 'react'
import HomePage from './pages'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Animation from './pages/Animation';




function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="App">
      <HomePage />
    </div>

  )
}

export default App