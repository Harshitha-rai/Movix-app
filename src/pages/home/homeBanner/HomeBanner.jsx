import React, { useEffect, useState } from 'react';
import "./homeBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadingImage/Img'

const HomeBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  
  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }  
  return (
    <div className="homeBanner">
    {!loading && <div className='backdrop-img'>
      <Img src={background} />
    </div>}
    
    <div className='herobanner-opacity'>
      
    </div>

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