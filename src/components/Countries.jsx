import React, {useState, useEffect} from "react";
import Country from "./Country";
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";

function Countries({change, setChangedLink}) {

    const {region} = useParams();

    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState(null);

    const loadAllCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        console.log(data);

        data && setCountries(data);
    }

    const loadSearchedCountries = async (name) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();

        console.log(data);

        data && setCountries(data);
    }

    const loadRegionCountries = async (region) => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await response.json();

        console.log(data);

        data && setCountries(data);
    }

    useEffect(() => {
        if(region === undefined) {
            loadAllCountries();
        } else {
            loadRegionCountries(region);
        }
        
    },[change]);

    return (
        <>
            {region === undefined ?
            <><SearchBar loadSearchedCountries={loadSearchedCountries} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {" "}<button onClick={() => loadAllCountries()}>All</button></> :
            <h1>{region}</h1>}
            <div className="list-of-countries">
            {countries.map((country, index) => (
                
                    <Country key={index} country={country} setChangedLink={setChangedLink}/>
                
            ))}
            </div>
        </>
    );
}

export default Countries;