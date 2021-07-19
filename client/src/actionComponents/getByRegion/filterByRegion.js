import {useSelector} from 'react-redux';
import './filterByRegion.css'
import { Link } from 'react-router-dom';

const FilterByRegion = (country) => {
    const countries = useSelector(state => state.getAll)
    let aux = countries.filter(e => e.region === country.region)
    //console.log(country.region)
    return(
        <div className='containerFiltered'>
        {aux.map(auxCountry => {
        return (
            <div className = 'countryFiltered' key = {auxCountry.alpha3Code}>
                <img className = 'flag' src = {auxCountry.flag} alt = '' width = '50' height = '20'/>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.name}</Link></p>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.capital}</Link></p>
                {/* <p>{auxCountry.alpha3Code}</p>
                <p>{auxCountry.region}</p>
                <p>{auxCountry.subregion}</p>
                <p>{auxCountry.capital}</p>
                <p>{auxCountry.area}</p>
                <p>{auxCountry.population}</p>
                <p>{auxCountry.turisticActivities}</p> */}
            </div>
        )
    })}
    </div>
    )
}

export default FilterByRegion