import { useSelector } from 'react-redux';

const SortByPop = (sort) => {
    const countries = useSelector(state => state.getAll)
    let aux = sort
    //console.log(countries)
    //console.log(aux)
    if(aux.sort === "DSC"){
        let asc = countries.sort((a, b) => {return a.population - b.population})
         return(asc.map(auxCountry => {
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

    if(aux.sort === "ASC"){
        let aux = countries.sort((a, b) => {return a.population - b.population})  
        let dsc = aux.reverse()
        return(dsc.map(auxCountry => {
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

export default SortByPop