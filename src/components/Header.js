const Header = ({ countryNames, setCountryFilter }) => {

    const filterCountry = (e) => {
        const filteredItems = [];
        const searchValue = (String(e.target.value).charAt(0).toUpperCase()) + String(e.target.value).slice(1);
        countryNames.forEach((country) => {
            if(country.includes(searchValue)) {
                filteredItems.push(country);
            }
        });
        setCountryFilter(filteredItems);
    }

    return (
        <nav className="navbar navbar-light bg-light py-4">
            <h2 className="">
                <i className="fas fa-virus"></i> Covid-19 Tracker
            </h2>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={filterCountry} />
            </form>
        </nav>
    )
}

export default Header
