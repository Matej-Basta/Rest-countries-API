import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function BorderButton({cca3, setChangedLink}) {

   const [country, setCountry] = useState([]);
   const [countryLoaded, setCountryLoaded] = useState(false);

   const loadName = async (code) => {
       const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
       const data = await response.json();

       data && setCountry(data);

       setCountryLoaded(true);
   }

   useEffect(() => {
       loadName(cca3);
   }, [])

    return (
        <>
        { countryLoaded ?
        <>
        <Link to={"/country/" + cca3} onClick={() => setChangedLink(cca3)}><button>{country[0].name.common}</button></Link>
        {" "} </> :
        null 
        }
        </>
    );
}

export default BorderButton;