import './home.css'
import { useState } from 'react'
import Search from '../search/search'
import ShowTenCountries from '../showTenCountries/showTenCountries'
import FilterRegion from '../btnFilterRegion/btnFilterRegion'
import SortAlphabetic from '../sortAlpha/sortAlpha'
import SortPop from '../sortByPop/sortByPop'
import FilterActivity from '../btnFilterActivity/btnFilterActivity'
import { Link } from 'react-router-dom'

const Home = function () {
    
    const [show, setShow] = useState(true)

if(show){
    return (
            <div className="home" > 
            <div onClick={e => setShow(false)}><Search /></div>   
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
            <Link to='/showAll'>Show All</Link>
        </div>
        )
    }
}

export default Home;