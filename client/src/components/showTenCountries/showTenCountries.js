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

    return(tenCountries.map(country => {
        return (
            <div>
                <img className = 'flag' src = {country.flag} alt = ''/>
                <p>{country.name}</p>
                <p>{country.region}</p>
            </div>
        )
    }))
    }

export default ShowTenCountries;
