import React from "react";
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from "./components/Nav";
import Routepage from "./routes/Routepage";

function App() {
  return (
    <Router>
      <div>
       <Nav/> 
       <Routepage/>
      </div>
    </Router>
  )
}

export default App
