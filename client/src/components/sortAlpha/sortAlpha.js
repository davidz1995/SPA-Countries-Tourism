import React, { useState } from "react";
import SortAlpha from "../../actionComponents/sortAlpha/sortAlpha";

const SortAlphabetic = () => {
    const [sort, setSort] = useState('');
    const [showMenu, setShowMenu] = useState(false)

    const handleClickAtoZ = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('AtoZ');
      }

    const handleClickZtoA = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('ZtoA');
      }
    
    return (
        <div>
            <button onClick = {e => setShowMenu(!showMenu)}>
                Sort Alphabetically
            </button>
            {showMenu ?
            <div className="menu">
                <button onClick = {handleClickAtoZ}> From A to Z </button>
                <button onClick = {handleClickZtoA}> From Z to A </button>
            </div>
            :
            (null)
            } 
            {sort.length ?
            <SortAlpha sort ={sort}/>
            :
            (null)
            }
        </div>
    )

    }

export default SortAlphabetic
