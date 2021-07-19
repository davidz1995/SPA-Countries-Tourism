import {Link} from 'react-router-dom'
import './landingPage.css'
import background from '../landingPage/bg.jpg'
import { useEffect } from 'react'
import { getDB } from '../../store/actions/actions'
import { useDispatch } from 'react-redux';

const LandingPage = function () {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getDB())
      },[dispatch]);
      
    return (
        <div className="landingPage">
        <img className='bg' src={background} alt="BG img"/>
        <div className = 'container'> 
        <div className='text'></div>     
        <Link to = '/countries' className='btn'>Let's explore it!</Link>
        </div>
          </div>
    )
}

export default LandingPage;