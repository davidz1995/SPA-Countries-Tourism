import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterByRegion from "../../actionComponents/getByRegion/filterByRegion";
import { getAll } from "../../store/actions/actions";

const FilterRegion = () => {
    const [region, setRegion] = useState('_');
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()  

    useEffect(()=> {
        dispatch(getAll())
    },[dispatch])

    const handleClickAmericas = (e) => {
        e.preventDefault();
        setRegion('Americas')
        setShowMenu(!showMenu)
      }
    
    const handleClickEurope = (e) => {
        e.preventDefault();
        setRegion('Europe')
        setShowMenu(!showMenu)
      }

    const handleClickAsia = (e) => {
        e.preventDefault();
        setRegion('Asia')
        setShowMenu(!showMenu)
      }

    const handleClickAfrica = (e) => {
        e.preventDefault();
        setRegion('Africa')
        setShowMenu(!showMenu)
      }

    const handleClickOceania = (e) => {
        e.preventDefault();
        setRegion('Oceania')
        setShowMenu(!showMenu)
      }

    const handleClickPolar = (e) => {
        e.preventDefault();
        setRegion('Polar')
        setShowMenu(!showMenu)
      }

    return (
        <div>
            <button onClick = {e => setShowMenu(!showMenu)}>
                Filter by region
            </button>
            {showMenu ?
            <div className="menu">
                <button onClick = {handleClickAmericas}> Americas </button>
                <button onClick = {handleClickEurope}> Europe </button>
                <button onClick = {handleClickAsia}> Asia </button>
                <button onClick = {handleClickAfrica}> Africa </button>
                <button onClick = {handleClickOceania}> Oceania </button>
                <button onClick = {handleClickPolar}> Polar </button>
              </div>
              :
              (null)
            } 
            <FilterByRegion region ={region}/>
        </div>
    )
}

export default FilterRegion
