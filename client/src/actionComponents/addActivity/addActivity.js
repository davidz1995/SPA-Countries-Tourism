import { useState, useEffect } from "react";
import './addActivity.css'
import background from '../../actionComponents/addActivity/bgForm1.jpg'
import { useDispatch, useSelector } from 'react-redux' 
import { getAll } from "../../store/actions/actions";

function AddActivity() {
    let acc =[]
    const dispatch = useDispatch()
    const countries = useSelector(state => state.getAll)
    const sort = countries.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
     
      return 0;
    })

    useEffect(() => {
      dispatch(getAll())
     },[dispatch]);


    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [term, setTerm] = useState('');
    const [season, setSeason] = useState('');
    const [country, setCountry] = useState([])
    
    function createActivity() {
        
        fetch('http://localhost:3001/activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, difficulty, term, season, country}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            console.log(data);
          })
          .catch(() => console.log('Error'));
      }

    const handleClick = () => {
      window.alert('New activity created. Thanks!')
      setName('')
      setDifficulty('')
      setTerm('')
      setSeason('')
      setCountry([])
      createActivity()
    }

    const handleChangeName = (e) => {
      let aux = e.target.value
      let capitalize = aux.charAt(0).toUpperCase() + aux.slice(1);
      setName(capitalize)
      //console.log(name)
    }

    const handleChangeDifficulty = (e) => {
      setDifficulty(e.target.value)
      //console.log(difficulty)
    }
    
    const handleChangeTerm = (e) => {
      setTerm(Number(e.target.value))
      //console.log(term)
    }

    const handleChangeSeason = (e) => {
      setSeason(e.target.value)
      //console.log(season)
    }

    const handleClickCountry = (e) => {
      country.push(e.target.value)
      setCountry(country)
      acc.push(e.target.value)
      //console.log(country)
    }

    return (
      <div>
      <img className='bgform' src={background} alt="BG img"/>
      <div className='containerSup'>
        <div className='containerTextForm'>
          <h1 className='textForm'>Do you have information about touristic activities in a country?</h1>
          <p className='textForm'>You can add it here and help other people to discover them! </p>
        </div>
        <form className='containerForm'>
            <label>
            <h1>Add turistic activity:</h1>

                <div className='formInput'>
                    <input
                        type='text' 
                        name='name'
                        value={name}
                        placeholder='Name of turistic Activity'
                        onChange={handleChangeName}
                    />
                </div>

                <div className='formInput'>
                    <input 
                        type='text' 
                        name='difficulty'
                        placeholder='Difficulty between 1 and 5'
                        onChange={handleChangeDifficulty}
                    />
                    {!difficulty?<p>*Please set difficulty of activity.</p>:(null)}
                    {difficulty>5?<p className = 'errorInput'>*Max difficulty is 5</p>:(null)}
                </div>
                <div className='formInput'>
                    <input 
                        type='text' 
                        name='term'
                        placeholder='How many hours does it takes?'
                        onChange={handleChangeTerm}  
                    />
                    {!term?<p className='errorInput'>*Term must be set in hours.  (Number)</p>:(null)}
                </div>

                <div className='formInput'>
                    <select  
                        className = 'selectSeason'
                        name='season'
                        onChange={handleChangeSeason}>
                        <option defaultValue> In wich season can it be practiced? </option>
                        <option className='optionCountry' value='Summer' name='season'>Summer</option>
                        <option className='optionCountry' value='Winter' name='Summer'>Winter</option>
                        <option className='optionCountry' value='Spring' name='Summer'>Spring</option>
                        <option className='optionCountry' value='Autumn' name='Summer'>Autumn</option>
                    </select>
                    {!season?<p className='errorInput'>*Please set season where it can be practiced.</p>:(null)}

                <div className='formInput'>
                  <select className='selectCountry' type='text' name='country' multiple>
                    <option className='placeholderCountry' defaultValue>Choose one or many countries where it can be practiced.</option>
                    {sort.map(e => 
                    <option className='option' key={e.alpha3Code} value={e.name} name={e.name} onClick={handleClickCountry}>{e.name}</option>
                    )}
                  </select>
                  <p className='p'>*Please choose at least one country.</p>
                </div>
              
                </div>
            <button className='btnForm' onClick={handleClick}>Add activity</button>
              </label>
            </form> 
          </div>
      </div>
    );
  }

  export default AddActivity;