import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, {useState} from "react";
// custom components
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryDetailed from './components/CountryDetailed';

function App() {

  const [changedLink, setChangedLink] = useState("");

  return (
    <div>
      <BrowserRouter>
      <Header />

      <select>
        <Link to="/Africa" onClick={() => setChangedLink("africa")}><option>Africa</option></Link>        
        <Link to="/Amercias" onClick={() => setChangedLink("americas")}><option>Americas</option></Link>
      </select>
      <nav className="nav-links">
        <Link to="/" onClick={() => setChangedLink("home")}>All countries</Link>
        {" "}
        <Link to="/Africa" onClick={() => setChangedLink("africa")}>Africa</Link>
        {" "}
        <Link to="/Americas" onClick={() => setChangedLink("americas")}>Americas</Link>
        {" "}
        <Link to="/Asia" onClick={() => setChangedLink("asia")}>Asia</Link>
        {" "}
        <Link to="/Europe" onClick={() => setChangedLink("europe")}>Europe</Link>
        {" "}
        <Link to="/Oceania" onClick={() => setChangedLink("oceania")}>Oceania</Link>
      </nav>  
        <Routes>
          <Route path="/" element={<div className="App"><h1>List of All countries</h1><Countries change={changedLink} setChangedLink={setChangedLink}/></div>} />
          <Route path="/:region" element={<div className="App"><Countries change={changedLink}/></div>} />
          <Route path="/country/:cca2" element={<CountryDetailed change={changedLink} setChangedLink={setChangedLink}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
