import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterByActivity from "../../actionComponents/getByActivity/filterByActivity";
import { getAllActivities } from "../../store/actions/actions";

const FilterActivity = () => {
    const activities = useSelector(state => state.getAllActivities)
    const [activity, setActivity] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showComponent, setShowComponent] = useState(false)
    const dispatch = useDispatch()  

    const handleClickBtn = (e) => {
        setShowMenu(!showMenu)
        setShowComponent(false)
      }


    useEffect(()=> {
        dispatch(getAllActivities())
    },[dispatch])

    const handleClick = (event) => {
        event.preventDefault();
        setActivity(event.target.value)
        setShowMenu(!showMenu)
        setShowComponent(!showComponent)
      }
    
    return (
        <div>
            <button className='btnMenu' onClick = {handleClickBtn}>
                Filter by Activity &#9660;
            </button>
            {showMenu ? activities.map(e => {return(
                <button className='btnSubMenu' onClick = {handleClick} value={e.name}> {e.name} </button>
            )})
              :
              (null)
            } 
            {showComponent?
            <FilterByActivity activity ={activity}/>
            :
            (null)
            }
        </div>
    )
}

export default FilterActivity
