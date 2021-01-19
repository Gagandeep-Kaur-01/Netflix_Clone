import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results
                [
                    Math.floor(Math.random() * request.data.results.length - 1) 
                    //to get random object/ movie in the array or to get the object from the array randomly.
                ]
            );
            return request;          
        }
        fetchData();
    }, []);

    console.log(movie);
    
    return (
        <header className="banner"
        /* <<<Background image */
          style={{
              backgroundSize: "cover",
              backgroundImage: `url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
              backgroundPosition: "center center"
          }}
        > 
            <div className="banner_contents"> 
            {/* title */}
            <h1></h1>
            
            {/* title */}
            {/* div > 2 buttons : 'Play' & ''My List' */}
            {/* description */}

            </div>
        </header>
    )
}

export default Banner;