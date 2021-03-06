import React, { useEffect, useState } from 'react';
import axios from '../axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); 

  // A snippet of code which runs based on a specific condition

  useEffect(() => {
     // if [], which means => run once when the row loads, and don't run it again.
     async function fetchData() {
       const request = await axios.get(fetchUrl); //"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213", 
       console.log(request.data.results);
       setMovies(request.data.results)
       return request;       
     }
     fetchData();
  }, [fetchUrl]);   

    /* Whenever use anything inside useEffect, 
  if any variable that is being pulled in from outside
  but it's used inside of the useEffect, we have to include inside of here.
  Reason: because it's dependent on that variable,
  so dependency, every time this changes we have to update our useEffect so that way 
  Why this (fetchUrl) one: Because this is outside of the block, 
  we need to tell useEffect that you're using this variable which is outside the block
  The reason why is because that way useEffect knows something changed so I need to refile the code*/

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }; 

  //for adding movie trailer popups......................
  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }

  console.table(movies);

  return ( 

    <div className="row">

      {/* title.................................................... */}
      <h2> {title} </h2>

      {/* container -> posters ..................................... */}   

      <div className="row_posters">
        {/* several row_poster(s) */}

        {movies.map(movie => (          
          <img                         //"/obLBdhLxheKg8Li1qO11r2SwmYO.jpg"
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarger"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>        /* if it doesn't get the image, it'll just get the name */
        ))}
      </div>  

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> } 
      {/* when we have trailerUrl, then show youtube video */}

    </div>
  );
}

export default Row;
