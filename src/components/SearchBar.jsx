function SearchBar({setSearchQuery, searchQuery, loadSearchedCountries}) {
    return (
        <>
            <input id="search" type="search"  onChange={(e) => setSearchQuery(e.target.value)}/>
            <br />
            <button onClick={() => {loadSearchedCountries(searchQuery); document.getElementById("search").value = "";}}>Search</button>
        </>
    );
}

export default SearchBar;