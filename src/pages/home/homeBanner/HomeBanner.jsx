import React, { useState } from 'react';
import "./homeBanner.scss";
import { useNavigate } from "react-router-dom"

const HomeBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }  
  return (
    <div className="homeBanner">
      <div className="wrapper">
        <div className="homeBannerContent">
          <span className='subTitle'>
            Discover popular Movies,
            TV shows and more
          </span>
          <div className="serachInput">
            <input type='text' placeholder='Search for a movie or TV show...' onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler}/>
            <button>Search</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeBanner