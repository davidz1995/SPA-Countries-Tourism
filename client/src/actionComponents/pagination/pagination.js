import React, { useEffect, useState } from "react";
import '../pagination/pagination.css'
import {Link} from 'react-router-dom'
import GoHome from '../../components/goHome/goHome'

const renderCountries = (countries) => {
  return (
    <div className='containerDet'>
      {countries.map((e, i) => {
        return (
            <div className='countryDet'>
            <p><Link to={`/countries/${e.name}`} style={{ textDecoration: 'none', color: '#000'}}>Name: {e.name}</Link></p>
            <p><Link to={`/countries/${e.name}`} style={{ textDecoration: 'none', color: '#000'}}>Region: {e.region}</Link></p>
            <Link to={`/countries/${e.name}`}><img className = 'flag' src = {e.flag} alt = '' width = '200' height = '120'/></Link>
        </div>);
      })}
    </div>
  );
};

function Pagination() {
  const [countries, setCountries] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const [region, setRegion] = useState('')
  const [showSubMenuRegion, setShowSubMenuRegion] = useState(false);
  const [showSubMenuAlpha, setShowSubMenuAlpha] = useState(false);
  const [showSubMenuPop, setShowSubMenuPop] = useState(false);

  const [showByRegion, setShowByRegion] = useState(false);
  const [showAlphaAsc, setShowAlphaAsc] = useState(false);
  const [showAlphaDesc, setShowAlphaDesc] = useState(false);
  const [showPopAsc, setShowPopAsc] = useState(false);
  const [showPopDesc, setShowPopDesc] = useState(false);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
    pages.push(i);
  }

  let sortAtoZ = [...countries].sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
   
    return 0;
  })

  let sortZtoA = [...countries].sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
   
    return 0;
  })

  let sortPopAsc = [...countries].sort((a, b) => {return a.population - b.population})
  sortPopAsc.reverse()

  let sorPopDsc = [...countries].sort((a, b) => {return a.population - b.population})

  let filterByRegion =  [...countries].filter(e => e.region === region)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);
  const currentItemsRegion = filterByRegion.slice(indexOfFirstItem,indexOfLastItem)
  const currentItemsAlphaAtoZ = sortAtoZ.slice(indexOfFirstItem,indexOfLastItem)
  const currentItemsAlphaZtoa = sortZtoA.slice(indexOfFirstItem,indexOfLastItem)
  const currentItemsPopAsc = sortPopAsc.slice(indexOfFirstItem,indexOfLastItem)
  const currentItemsPopDesc = sorPopDsc.slice(indexOfFirstItem,indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div className='num'>
        <button
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </button>
        </div>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch("http://localhost:3001/countries/showAll")
      .then((response) => response.json())
      .then((json) => setCountries(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <button className='btnTP' onClick={handleNextbtn}> &hellip; </button>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <button className='btnTP' onClick={handlePrevbtn}> &hellip; </button>;
  }

  const handleRegionClick = (e) => {
    e.preventDefault();
    setRegion(e.target.value)
    setShowByRegion(true)
    setShowSubMenuRegion(false)
  }

  const handleClickAtoZ = (e) => {
    e.preventDefault();
    setShowAlphaAsc(true)
    setShowSubMenuAlpha(false)
    setShowByRegion(false)
  }

  const handleClickZtoA = (e) => {
    e.preventDefault();
    setShowAlphaDesc(true)
    setShowSubMenuAlpha(false)
    setShowAlphaAsc(false)
    setShowByRegion(false)
  }

  const handleClickAsc = (e) => {
    e.preventDefault();
    setShowPopAsc(true)
    setShowSubMenuPop(false)
    setShowByRegion(false)
    setShowAlphaAsc(false)
    setShowAlphaDesc(false)
  }

  const handleClickDesc = (e) => {
    e.preventDefault();
    setShowPopDesc(true)
    setShowSubMenuPop(false)
    setShowByRegion(false)
    setShowAlphaAsc(false)
    setShowAlphaDesc(false)
    setShowPopAsc(false)
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  

  return (
    <div>
    <div className='navTitle'>
      <h1 className='titleDetail'>Countries:</h1> <br/>
      <div className='menuPagination'>
        <button className='btnPagination' onClick={e => setShowSubMenuRegion(!showSubMenuRegion)}>Filter by region</button>
        {showSubMenuRegion?
        <div className='contSubPagination'>
          <button className='btnSubPagination' value='Americas' onClick={handleRegionClick}>Americas</button>
          <button className='btnSubPagination' value='Asia' onClick={handleRegionClick}>Asia</button>
          <button className='btnSubPagination' value='Africa' onClick={handleRegionClick}>Africa</button>
          <button className='btnSubPagination' value='Europe' onClick={handleRegionClick}>Europe</button>
          <button className='btnSubPagination' value='Oceania' onClick={handleRegionClick}>Oceania</button>
          <button className='btnSubPagination' value='Polar' onClick={handleRegionClick}>Polar</button>
        </div>
        :(null)
        }
      </div>
      <div className='menuPagination'>
        <button className='btnPagination' onClick={e => setShowSubMenuAlpha(!showSubMenuAlpha)}>Sort alphabetically</button>
        {showSubMenuAlpha?
          <div>
            <button className='btnSubPagination' value='atoz' onClick={handleClickAtoZ}>Sort A to Z</button>
            <button className='btnSubPagination' value='ztoa' onClick={handleClickZtoA}>Sort Z to A</button>
          </div>
          :(null)
        }
      </div>
      <div className='menuPagination'>
        <button className='btnPagination' onClick={e => setShowSubMenuPop(!showSubMenuPop)}>Sort by population</button>
        {showSubMenuPop?
          <div>
            <button className='btnSubPagination' value='asc' onClick={handleClickAsc}>Sort Asc</button>
            <button className='btnSubPagination' value='desc' onClick={handleClickDesc}>Sort Desc</button>
          </div>
          :(null)
        }
      </div>
      
      <div className='back'><GoHome/></div>
    </div>
      {showByRegion? 
        renderCountries(currentItemsRegion): showAlphaAsc?
        renderCountries(currentItemsAlphaAtoZ): showAlphaDesc?
        renderCountries(currentItemsAlphaZtoa): showPopAsc?
        renderCountries(currentItemsPopAsc) : showPopDesc?
        renderCountries(currentItemsPopDesc):renderCountries(currentItems)
      }
      <ul className="pageNumbers">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
            className='btnPrevNext'
          >
          <p>&#10094;</p></button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            className='btnPrevNext'
          >	    	
          <p>&#10095;</p></button>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    </div>
  );
}

export default Pagination;

