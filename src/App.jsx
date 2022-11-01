import { useState } from 'react';
import './App.css';
import Project from '../src/Project'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={ <Project />}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
