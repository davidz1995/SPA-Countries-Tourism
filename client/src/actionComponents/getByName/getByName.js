import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getByName } from '../../store/actions/actions';
import { useParams } from "react-router"
import { Link } from 'react-router-dom';
import background from '../getByName/bgCountry2.jpg'
import GoHome from '../../components/goHome/goHome';
import './getByName.css'

const GetCountry = (nameAux) => {
    const country = useSelector(state => state.getByName)
    const dispatch = useDispatch()
    const { name } = useParams()   //Esto lo hice usando parametros
    //console.log(country)

    useEffect(() => {
        dispatch(getByName(name))
        dispatch(getByName(nameAux.name))
       },[dispatch, name, nameAux]);

       if(name || nameAux){
    return(country.map(auxCountry => {
        return (
            <div>
            <img className='bgCountry' src={background} alt="BG img"/>
            <div className='goHome'><GoHome/></div>
            <div className='detailContainer'>
                <img className = 'flag' src = {auxCountry.flag} alt = '' width = '380' height = '225'/>
                <div className = 'containerTestCountry'>
                <div className='line'><p className='prop'>Name: </p><p>{auxCountry.name}</p></div>
                <div className='line'><p className='prop'>Country code: </p><p>{auxCountry.alpha3Code}</p></div>
                <div className='line'><p className='prop'>Region: </p><p>{auxCountry.region}</p></div>
                <div className='line'><p className='prop'>Subregion: </p><p>{auxCountry.subregion}</p></div>
                <div className='line'><p className='prop'>Capital: </p><p>{auxCountry.capital}</p></div>
                <div className='line'><p className='prop'>Area: </p><p>{auxCountry.area} km&sup2;</p></div>
                <div className='line'><p className='prop'>Population: </p><p>{auxCountry.population}</p></div>
                <div className='line2'><p className='prop'>Tourism: </p>
                    {auxCountry.turistic_activities.map(e => 
                    <div className='pActivity'>
                        <p>Name: {e.name}</p>
                        <p>Season: {e.season}</p>
                        <p>Term: {e.term} hours</p>
                        <p>Difficulty: {e.difficulty}</p>
                    </div>
                    )}   
                </div>
                </div>
                <div className={'btnAddActivity'}><Link to='/addActivity' style={{ textDecoration: 'none', color: '#000', fontSize:'18px',fontWeight: 'bold' }}>Add new touristic activity</Link></div>
            </div>
            <p className='footer'>&#10096; Countrie's App - Proyecto Individual Henry &#10097;</p>
            </div>
        )
    }))
}
}

export default GetCountry