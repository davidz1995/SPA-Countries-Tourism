import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FilterByActivity = (activity) => {
    const activities = useSelector(state => state.getAllActivities)
    
    let aux = activities.filter(e => e.name === activity.activity)
    let countries = aux.map(e => e.countries)
    let names = countries[0].map(e => e.name)
    // console.log(names)

    return(names.map( e => {
        return(
            <p className = 'countryFiltered' ><Link to={`/countries/${e}`} style={{ textDecoration: 'none', color: '#000', fontSize: '16px' }}>{e}</Link></p>
            )
        })
    )
}
export default FilterByActivity

