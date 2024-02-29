import { useState } from "react";
import axios from "axios"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import "./App.css";
import BioPage from "./BioPage";

function App() {

  return (
    <Router>
    <div className="App">

      <h1>Vite + React  // Express APP</h1>
      <div className="card">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<BioPage />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <h2>Home</h2>
      <Link to="bio">
        <button>Get Bio</button>
      </Link>
    </div>
  )
}

export default App;
