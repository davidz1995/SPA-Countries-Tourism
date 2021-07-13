import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterByActivity from "../../actionComponents/getByActivity/filterByActivity";
import { getAllActivities } from "../../store/actions/actions";

const FilterActivity = () => {
    const activities = useSelector(state => state.getAllActivities)
    const [activity, setActivity] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()  

    useEffect(()=> {
        dispatch(getAllActivities())
    },[dispatch])

    const handleClick = (event) => {
        event.preventDefault();
        setActivity(event.target.value)
        setShowMenu(!showMenu)
      }
    
    return (
        <div>
            <button onClick = {e => setShowMenu(!showMenu)}>
                Filter by activity
            </button>
            {showMenu ? activities.map(e => {return(
                <button onClick = {handleClick} value={e.name}> {e.name} </button>
            )})
              :
              (null)
            } 
            <FilterByActivity activity ={activity}/>
        </div>
    )
}

export default FilterActivity
