import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SortByPop = (sort) => {
    const countries = useSelector(state => state.getAll)
    let aux = sort
    //console.log(countries)
    //console.log(aux)
    if(aux.sort === "DSC"){
        let asc = countries.sort((a, b) => {return a.population - b.population})
        
         return(
            <div className='containerFiltered'> 
            {asc.map(auxCountry => {
            return (
                <div className = 'countryFiltered' key = {auxCountry.alpha3Code}>
                    <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                    <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.name}</Link></p>
                    <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.population} habts</Link></p>
                    {/* <p>{auxCountry.alpha3Code}</p>
                    <p>{auxCountry.region}</p>
                    <p>{auxCountry.subregion}</p>
                    <p>{auxCountry.area}</p>
                    <p>{auxCountry.capital}</p>
                    <p>{auxCountry.turisticActivities}</p> */}
                </div>
            )
        })}
        </div>
        )
    }

    if(aux.sort === "ASC"){
        let aux = countries.sort((a, b) => {return a.population - b.population})  
        let dsc = aux.reverse()
        return(
            <div className='containerFiltered'> 
            {dsc.map(auxCountry => {
            return (
                <div className = 'countryFiltered' key = {auxCountry.alpha3Code}>
                    <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                    <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.name}</Link></p>
                    <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.population} habts</Link></p>
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
}

export default SortByPop