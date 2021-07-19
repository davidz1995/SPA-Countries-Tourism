import { Link } from 'react-router-dom';
import './goHome.css'

const GoHome = () => {
    return (
        <div className='btnGoHome'>
            <p><Link to='/countries' style={{ textDecoration: 'none', color: '#000', fontSize:'25px' }}>&#129144;</Link></p>
        </div>
    )
}

export default GoHome