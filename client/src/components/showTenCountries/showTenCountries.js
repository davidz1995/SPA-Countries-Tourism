import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTenCountries } from '../../store/actions/actions';
import './showTenCountries.css';

function ShowTenCountries(){
    const dispatch = useDispatch()
    let tenCountries= useSelector(state => state.getTenCountries);
    //console.log(tenCountries.map(e => e.name))

  useEffect(()=>{
    dispatch(getTenCountries())
     },[dispatch]) 

    return(
        <div className='cont'>
        {tenCountries.map(country => {
        return (
                <div className='country'>
                <img className = 'flag' src = {country.flag} alt = '' width = '300' height = '200'/>
                <p>Name: {country.name}</p>
                <p>Region: {country.region}</p>
                </div>  
        )})}
        </div>
        )
}

export default ShowTenCountries;
