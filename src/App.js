import * as React from 'react'
import HomePage from './pages'
import "animate.css/animate.min.css";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App