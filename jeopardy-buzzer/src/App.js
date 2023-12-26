import './App.css';
import Admin from './Admin';
import Team1 from './Team1';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Admin />} />
          <Route path="/team1" element={<Team1 />} />
          {/* <Route path="/team1" element={<Blogs />} /> */}
      </Routes>
  </Router>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


export default App;
