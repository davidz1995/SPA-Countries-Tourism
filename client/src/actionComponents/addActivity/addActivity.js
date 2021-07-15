import { useState } from "react";

function AddActivity() {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [term, setTerm] = useState('');
    const [season, setSeason] = useState('');
    const [country, setCountry] = useState('')
    
    function createMerchant() {
        
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
          createMerchant();
          setName('');
          setDifficulty('');
          setTerm('');
          setSeason('')
          setCountry('')
    }

    return (
      <div>
        <form>
            <label>
            <h1>Add turistic activity:</h1>
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Name of turistic Activity'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='difficulty'
                        placeholder='Difficulty between 1 and 5'
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='term'
                        placeholder='How long does it takes?'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='season'
                        placeholder='In wich season can it be practiced?'
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                    />
                    <input 
                        type='text' 
                        name='country'
                        placeholder='Where can it be practiced?'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
            </label>
            <button onClick={handleClick}>Add activity</button>
            </form> 
        
      </div>
    );
  }

  export default AddActivity;