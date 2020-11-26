import React from 'react';
import './styles.css';
import Homepage from  './components/Homepage';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
