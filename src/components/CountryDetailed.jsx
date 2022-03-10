import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import BorderButton from "./BorderButton";

function CountryDetailed({change, setChangedLink}) {

    const {cca2} = useParams();

    const [country, setCountry] = useState([]);
    const [countryLoaded, setCountryLoaded] = useState(false);

    const loadCountry = async (code) => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();

        console.log(data[0]);

        data && setCountry(data[0]);
        setCountryLoaded(true);
    };

    useEffect(() => {
        setCountryLoaded(false);
        loadCountry(cca2);
    }, [change]);

    return (<>
        {countryLoaded ?
        <div className="detailed">
            <img src={country.flags.png} alt={"flag of " + country.name.common} />
            <div className="text">
            <h1>{country.name.common}</h1>
            <p><strong>Official name: </strong>{country.name.official}</p>
            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Sub region: </strong>{country.subregion}</p>
            <p><strong>Capital: </strong>{country.capital}</p>
            <p><strong>Border countries: </strong></p>
            {country.borders ? 
            country.borders.map((cca3, index) => (
                    <BorderButton key={index} cca3={cca3} setChangedLink={setChangedLink}/>
                )) :
                <p>none</p>}
            </div>
        </div> :
        null }
    </>);
}

export default CountryDetailed;