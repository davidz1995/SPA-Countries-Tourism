import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GetCountry from "../../actionComponents/getByName/getByName";
import { getByName} from "../../store/actions/actions";
import './search.css'
import { Link } from "react-router-dom";

const Search = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    let aux = ''

    useEffect(()=> {
        dispatch(getByName(name))
    },[dispatch, name])
    //console.log(name)

    const handleChange = (e) => {
        aux=e.target.value
        setName(aux)
    } 

    const handleSubmit = (e) => {
        window.location.assign(`/countries/${e}`)
    }

    return (
        <div>
            <form target="_blank" action={`http://localhost:3000/countries/${name}`}>
            <label>
            <div className='containerSearch' >
                    <input 
                        className='textSearch'
                        type="text" 
                        name={name}
                        value ={name}
                        placeholder='&#x2315; Search:'
                        onChange = {handleChange}
                        onSubmit={handleSubmit}
                    /> 
                    <div>
                        <Link to={`/countries/${name}`} style={{ textDecoration: 'none', color: '#FFF', fontSize: '22px' }}>
                            &#x279c;
                        </Link>
                    </div>
            </div> 
            </label>   
            </form>   
        </div> 
    )  
}


export default Search

