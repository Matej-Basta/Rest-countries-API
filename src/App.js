import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Countries from "./components/Countries";
import React, {useState} from "react";
import CountryDetailed from './components/CountryDetailed';

function App() {

  const [changedLink, setChangedLink] = useState("");

  return (
    <div>
      <BrowserRouter>
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
          {/* <Route path="/Americas" element={<Countries />} />
          <Route path="/Asia" element={<Countries />} />
          <Route path="/Europe" element={<Countries />} />
          <Route path="/Oceania" element={<Countries />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
