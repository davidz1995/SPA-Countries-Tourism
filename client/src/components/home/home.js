import './home.css'
import Search from '../search/search'
import ShowTenCountries from '../showTenCountries/showTenCountries'
import FilterRegion from '../btnFilterRegion/btnFilterRegion'
import SortAlphabetic from '../sortAlpha/sortAlpha'
import SortPop from '../sortByPop/sortByPop'
import FilterActivity from '../btnFilterActivity/btnFilterActivity'
import { Link } from 'react-router-dom'
import background from '../home/bg2.jpg'

const Home = function () { 
    return (
        <div className="home" > 
        <div className ='con'>
            <div className= 'navBarFirst'>
                <p>Countrie's App</p>
                <div><Search/></div>
                <div className='linkShowAll'><Link to='/showAll' style={{ textDecoration: 'none', color: '#000000', fontSize: '15px' }}>Show All</Link></div>
            </div> 
            <div className='subNavBar'>
            <FilterRegion/>
            <SortAlphabetic/>
            <SortPop/>
            <FilterActivity/>
            </div>
        </div> 
        <img className='bg2' src={background} alt="BG img"/> 
        <div className='search2'>
        <h1>Looking for new adventures?</h1>
        <div ><Search/></div>
        <p>Find interesting information about any country in the world!</p>
        </div>
        <ShowTenCountries/>
        <p className='footer'>&#10096; Countrie's App - Proyecto Individual Henry &#10097;</p>
        </div>
    )
}

export default Home;