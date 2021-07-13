import './home.css'
import { useState } from 'react'
import Search from '../search/search'
import ShowTenCountries from '../showTenCountries/showTenCountries'
import FilterRegion from '../btnFilterRegion/btnFilterRegion'
import SortAlphabetic from '../sortAlpha/sortAlpha'
import SortPop from '../sortByPop/sortByPop'
import FilterActivity from '../btnFilterActivity/btnFilterActivity'

const Home = function () {
    
    const [show, setShow] = useState(true)

if(show){
    return (
        <div className="home" onClick={e => setShow(false)}>    
            <Search/>
            <ShowTenCountries/>
        </div>
    )} else {
        return (
        <div className="home">    
            <Search onChange={e=>setShow(false)} />
            <FilterRegion/>
            <SortAlphabetic/>
            <SortPop/>
            <FilterActivity/>
        </div>
        )
    }
}

export default Home;