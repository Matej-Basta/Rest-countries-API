import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Country({country, setChangedLink}) {
    const {name, population, region, capital, flags, cca2} = country;

    return (
        <Link onClick={() => setChangedLink(cca2)} className="country" to={"/country/" + cca2}>
            <img src={flags.png} alt={"flag of " + name.common} />
            <div>
            <h2>{name.common}</h2>
            <p><strong>Population: </strong>{population.toLocaleString()}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Capital: </strong>{capital}</p>
            </div>
        </Link>
    );
}

export default Country;