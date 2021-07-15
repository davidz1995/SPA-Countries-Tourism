import './App.css';
import { Route } from 'react-router';
import LandingPage from './components/landingPage/landingPage';
import Home from './components/home/home';
import GetCountry from './actionComponents/getByName/getByName';
import AddActivity from './actionComponents/addActivity/addActivity'
import Pagination from './actionComponents/pagination/pagination';
//import Search from './components/search/search';
//import GetCountry from './actionComponents/getByName/getByName';
//import Country from './components/'
 
function App() {
  return (
    <div className="App">
      <Route path = '/' exact component = {LandingPage}/>
      <Route path = '/countries' exact component = {Home}/>
      <Route path = '/countries/:name' component = {GetCountry}/>
      <Route path='/addActivity' exact component = {AddActivity}/>
      <Route path='/showAll' exact component = {Pagination}/>
    </div>
  );
}

export default App;
