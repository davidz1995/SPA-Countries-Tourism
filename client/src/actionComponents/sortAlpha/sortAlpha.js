import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SortAlpha = (sort) => {
    const countries = useSelector(state => state.getAll)
    let aux = sort
    //console.log(countries)
    //console.log(aux)
    if(aux.sort === "AtoZ"){
        let aToZ = countries.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
       
        return 0;
    });
      return(
        <div className='containerFiltered'>
        {aToZ.map(auxCountry => {
        return (
            <div className = 'countryFiltered' key = {auxCountry.alpha3Code}>
                <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.name}</Link></p>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.alpha3Code}</Link></p>
                {/* <p>{auxCountry.capital}</p>
                <p>{auxCountry.region}</p>
                <p>{auxCountry.subregion}</p>
                <p>{auxCountry.area}</p>
                <p>{auxCountry.population}</p>
                <p>{auxCountry.turisticActivities}</p> */}
            </div>
        )
    })}
    </div>
    )
    }

    if(aux.sort === "ZtoA"){
        let zToA = countries.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
       
        return 0;
      });   
      return(
        <div className='containerFiltered'>
        {zToA.map(auxCountry => {
        return (
            <div className = 'countryFiltered' key = {auxCountry.alpha3Code}>
                <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.name}</Link></p>
                <p><Link to={`/countries/${auxCountry.name}`} style={{ textDecoration: 'none', color: '#000', fontSize: '12.5px' }}>{auxCountry.alpha3Code}</Link></p>
               {/*  <p>{auxCountry.capital}</p>
                <p>{auxCountry.region}</p>
                <p>{auxCountry.subregion}</p>
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

export default SortAlpha