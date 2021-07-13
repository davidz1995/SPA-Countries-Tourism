import {useSelector } from 'react-redux';
import GetCountry from '../getByName/getByName';
import { Link } from 'react-router-dom';

const FilterByActivity = (activity) => {
    const activities = useSelector(state => state.getAllActivities)
    let aux = activities.filter(e => e.name === activity.activity)
    let aux2 = []
    //aux2.push(aux.map(e => e.countries.map(e => e.name)))
    let aux3 = aux.map(e => e.countries)
    let aux4 = aux3.map( e => e[0].name)
    for(var i = 0; i < aux4.length; i++){
        aux2.push(aux4[i])
    }
    //let aux3 = aux.map(e => e[0])
    console.log(aux2)

    return(aux2.map( e => {
        return(
            <div>
            <Link to={'/countries/'+ e}>{e}</Link>
            </div>
        )}))
}
export default FilterByActivity

