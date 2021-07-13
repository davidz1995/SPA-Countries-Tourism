import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GetCountry from "../../actionComponents/getByName/getByName";
import { getByName} from "../../store/actions/actions";

const Search = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    let aux = ''

    useEffect(()=> {
        dispatch(getByName(name))
    },[dispatch, name])

    //const handleChange = (e) => aux = e.target.value
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(aux)
      } 
    
    if(!name){
    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <label>
                Search country:
                    <input 
                        type="text" 
                        name={name}
                        onChange={(e) => aux = e.target.value}
                    />
            </label>
            <input type="submit" value='Submit'/>   
            </form> 
        </div>
    )
} else {
    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <label>
                Search country:
                    <input 
                        type="text" 
                        name={name}
                        onChange={(e) => aux = e.target.value}
                    />
            </label>

            <input type="submit" value='Submit'/>
            </form> 
        <GetCountry name ={name}/>
        </div>
    )
}
}

export default Search
