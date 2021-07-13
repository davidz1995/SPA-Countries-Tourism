import { useSelector } from 'react-redux';

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
      return(aToZ.map(auxCountry => {
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
      return(zToA.map(auxCountry => {
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
}

export default SortAlpha