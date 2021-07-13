import React, { useState } from "react";
import SortByPop from "../../actionComponents/sortByPop/sortByPop";

const SortPop = () => {
    const [sort, setSort] = useState('');
    const [showMenu, setShowMenu] = useState(false)

    const handleClickAsc = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('ASC');
      }

    const handleClickDsc = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
        setSort('DSC');
      }
    
    return (
        <div>
            <button onClick = {e => setShowMenu(!showMenu)}>
                Sort By population
            </button>
            {showMenu ?
            <div className="menu">
                <button onClick = {handleClickAsc}> Sort Ascendant </button>
                <button onClick = {handleClickDsc}> Sort Descendant </button>
            </div>
            :
            (null)
            } 
            {sort.length ?
            <SortByPop sort ={sort}/>
            :
            (null)
            }
        </div>
    )

    }

export default SortPop
