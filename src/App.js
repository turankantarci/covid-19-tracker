import { useEffect, useState } from 'react';
import CountryItem from './components/CountryItem';
import Header from './components/Header';

const App = () => {
    const [covidStats, setCovidStats] = useState({});
    const [countryFilter, setCountryFilter] = useState([]);

    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(data => data.json())
        .then((data) => {
            setCovidStats(data);
        });
    }, []);

    return (
        <>
            <div className="container">
                <Header countryNames={Object.keys(covidStats)} setCountryFilter={setCountryFilter} />
                {
                    countryFilter.length ?
                        <div className="row">
                            {countryFilter.map((countryName, index) => {
                                return <CountryItem key={index} country={covidStats[countryName]} />
                            })}
                        </div>
                        :
                        <div className="row">
                            {Object.keys(covidStats).map((countryName, index) => {
                                return <CountryItem key={index} country={covidStats[countryName]} />
                            })}
                        </div>
                }
            </div>
        </>
    )
}

export default App;
