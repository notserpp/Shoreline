import '../App.css';
import * as React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';





function HomePage() {

  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default HomePage;
