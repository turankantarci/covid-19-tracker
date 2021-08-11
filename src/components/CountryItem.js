const CountryItem = ({ country }) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className="card">
                <img src={
                        country.All.abbreviation ? `https://lipis.github.io/flag-icon-css/flags/4x3/${String(country.All.abbreviation).toLowerCase()}.svg` : "https://via.placeholder.com/200x150.png?text=No+Image"
                    } 
                    className="card-img-top" 
                    alt={country.All.country} />
                <div className="card-body">
                    <h4 className="card-title" title={country.All.country ? country.All.country : "No Name"}>{country.All.country ? country.All.country : "No Name"}</h4>
                    <p className="card-text"><i className="fas fa-fw fa-user-friends"></i>Population: {Number(country.All.population).toLocaleString()}</p>
                    <p className="card-text"><i className="fas fa-fw fa-virus"></i>Cases: {Number(country.All.confirmed).toLocaleString()}</p>
                    <p className="card-text"><i className="fas fa-fw fa-user-md"></i>Recovered: {Number(country.All.recovered).toLocaleString()}</p>
                    <p className="card-text"><i className="fas fa-fw fa-virus-slash"></i>Deaths: {Number(country.All.deaths).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryItem;