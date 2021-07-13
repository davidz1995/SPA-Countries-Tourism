import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getByName } from '../../store/actions/actions';
import { useParams } from "react-router"
import { Link } from 'react-router-dom';

const GetCountry = () => {
    const country = useSelector(state => state.getByName)
    const dispatch = useDispatch()
    const { name } = useParams()   //Esto lo hice usando parametros
    //console.log(country)

    useEffect(() => {
        dispatch(getByName(name))
       },[dispatch, name]);

    return(country.map(auxCountry => {
        return (
            <div>
                <img className = 'flag' src = {auxCountry.flag} alt = ''/>
                <p>{auxCountry.name}</p>
                <p>{auxCountry.alpha3Code}</p>
                <p>{auxCountry.region}</p>
                <p>{auxCountry.subregion}</p>
                <p>{auxCountry.capital}</p>
                <p>{auxCountry.area}</p>
                <p>{auxCountry.population}</p>
                <div>
                    {auxCountry.turistic_activities.map(e => 
                    <div>
                        <p>{e.name}</p>
                        <p>{e.season}</p>
                        <p>{e.term}</p>
                        <p>{e.difficulty}</p>
                    </div>
                    )}   
                </div>
                <Link to='/addActivity'>Add new touristic activity</Link>
            </div>
        )
    }))
}

export default GetCountry