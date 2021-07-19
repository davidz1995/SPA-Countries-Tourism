import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterByRegion from "../../actionComponents/getByRegion/filterByRegion";
import { getAll } from "../../store/actions/actions";
import './btnFilterRegion.css'

const FilterRegion = () => {
    const [region, setRegion] = useState('_');
    const [showMenu, setShowMenu] = useState(false)
    const [showComponent, setShowComponent] = useState(false)
    const dispatch = useDispatch()  

    useEffect(()=> {
        dispatch(getAll())
    },[dispatch])

    const handleClickBtn = (e) => {
      e.preventDefault();
      setShowMenu(!showMenu)
      setShowComponent(false)
    }

    const handleClickAmericas = (e) => {
        e.preventDefault();
        setRegion('Americas')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }
    
    const handleClickEurope = (e) => {
        e.preventDefault();
        setRegion('Europe')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }

    const handleClickAsia = (e) => {
        e.preventDefault();
        setRegion('Asia')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }

    const handleClickAfrica = (e) => {
        e.preventDefault();
        setRegion('Africa')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }

    const handleClickOceania = (e) => {
        e.preventDefault();
        setRegion('Oceania')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }

    const handleClickPolar = (e) => {
        e.preventDefault();
        setRegion('Polar')
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }
  
    return (
        <div>
            <button className='btnMenu' onClick = {handleClickBtn}>
                Filter by region &#9660;
            </button>
            {showMenu ?
            <div className="menu">
                <button className='btnSubMenu' onClick = {handleClickAmericas}> Americas </button>
                <button className='btnSubMenu' onClick = {handleClickEurope}> Europe </button>
                <button className='btnSubMenu' onClick = {handleClickAsia}> Asia </button>
                <button className='btnSubMenu' onClick = {handleClickAfrica}> Africa </button>
                <button className='btnSubMenu' onClick = {handleClickOceania}> Oceania </button>
                <button className='btnSubMenu' onClick = {handleClickPolar}> Polar </button>
            </div>
              :
              (null)
            }
            {showComponent?
            <div className='componentFilterRegionBtn'><FilterByRegion region ={region}/></div> 
            :
              (null)
            }
        </div>
    )     
}

export default FilterRegion
