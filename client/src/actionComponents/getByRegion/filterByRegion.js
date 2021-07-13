import {useSelector} from 'react-redux';

const FilterByRegion = (country) => {
    const countries = useSelector(state => state.getAll)
    let aux = countries.filter(e => e.region === country.region)
    //console.log(country.region)

    return(aux.map(auxCountry => {
        return (
            <div key = {auxCountry.alpha3Code}>
                <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                <p >{auxCountry.name}</p>
                <p>{auxCountry.alpha3Code}</p>
                <p>{auxCountry.region}</p>
                <p>{auxCountry.subregion}</p>
                <p>{auxCountry.capital}</p>
                <p>{auxCountry.area}</p>
                <p>{auxCountry.population}</p>
                <p>{auxCountry.turisticActivities}</p>
            </div>
        )
    }))
}

export default FilterByRegion