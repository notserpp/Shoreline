import * as React from 'react'
import HomePage from './pages'
import "animate.css/animate.min.css";
import FadeSpy from './components/FadeSpy';




function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="App">
      <HomePage />
    </div>

  )
}

export default App