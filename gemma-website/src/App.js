import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
// import Education from './contents/Education';
// import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/about">
      <About />
       </Route>
     {/* <Route path="/education">
      <Education />
      </Route>
      <Route path="/skills">
      <Skills />
      </Route> */}
      <Route path="/contact">
      <Contact />
      </Route>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>GEMMA STANDLEY</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
